import { getBookingEmailEnv, isBookingEmailConfigured } from "@/config/server-env";
import { siteConfig } from "@/config/site";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "edge";

const quoteSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  guests: z.string().min(1),
  date: z.string().min(1),
  occasion: z.string().min(1),
  menuExperience: z.string().min(1),
  location: z.string().min(2),
  dietaryRequirements: z.string().optional().default(""),
  contactMethod: z.string().min(1),
  notes: z.string().max(1200).optional().default(""),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = quoteSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid quote request." }, { status: 400 });
  }

  const env = getBookingEmailEnv();
  if (!isBookingEmailConfigured(env)) {
    return NextResponse.json({ ok: true, mode: "preview", missing: env.missing });
  }

  const inquiry = parsed.data;
  const resend = new Resend(env.resendApiKey);
  const ownerEmail = buildOwnerEmail(inquiry);
  const guestEmail = buildGuestEmail(inquiry);

  try {
    await Promise.all([
      resend.emails.send({
        from: env.bookingFromEmail,
        to: env.bookingToEmail!,
        replyTo: inquiry.email,
        subject: "New " + siteConfig.name + " inquiry from " + inquiry.name,
        html: ownerEmail.html,
        text: ownerEmail.text,
      }),
      resend.emails.send({
        from: env.bookingFromEmail,
        to: inquiry.email,
        subject: "Your " + siteConfig.name + " request has been received",
        html: guestEmail.html,
        text: guestEmail.text,
      }),
    ]);
  } catch (error) {
    console.error("[Boccata di Mare] Failed to send quote email", error);
    return NextResponse.json({ error: "Unable to send quote request." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

type QuoteInquiry = z.infer<typeof quoteSchema>;

function buildOwnerEmail(inquiry: QuoteInquiry) {
  const summaryRows = [
    ["Name", inquiry.name],
    ["Email", inquiry.email],
    ["Guests", inquiry.guests],
    ["Date", inquiry.date],
    ["Occasion", inquiry.occasion],
    ["Menu experience", inquiry.menuExperience],
    ["Event location", inquiry.location],
    ["Preferred contact", inquiry.contactMethod],
    ["Dietary requirements", inquiry.dietaryRequirements || "None shared"],
    ["Optional notes", inquiry.notes || "None shared"],
  ];

  return {
    html: emailShell({
      eyebrow: "New private dining inquiry",
      title: "A new concierge request is ready to review.",
      body:
        "<p style=\"margin:0 0 24px;color:#4b4033;line-height:1.7\">A guest has requested a bespoke " +
        escapeHtml(siteConfig.name) +
        " experience. Reply directly to continue the conversation.</p>" +
        inquiryTable(summaryRows),
    }),
    text: [
      "New " + siteConfig.name + " quote request",
      "",
      ...summaryRows.map(([label, value]) => label + ": " + value),
    ].join("\n"),
  };
}

function buildGuestEmail(inquiry: QuoteInquiry) {
  const summaryRows = [
    ["Guests", inquiry.guests],
    ["Date", inquiry.date],
    ["Occasion", inquiry.occasion],
    ["Menu experience", inquiry.menuExperience],
    ["Event location", inquiry.location],
    ["Preferred contact", inquiry.contactMethod],
  ];

  return {
    html: emailShell({
      eyebrow: "Request received",
      title: "Thank you, " + escapeHtml(inquiry.name) + ".",
      body:
        "<p style=\"margin:0 0 18px;color:#4b4033;line-height:1.7\">Francesco will review your preferred date, setting, and menu direction, then reply with availability and a tailored proposal.</p>" +
        "<p style=\"margin:0 0 24px;color:#4b4033;line-height:1.7\">Your inquiry summary is below for reference.</p>" +
        inquiryTable(summaryRows),
    }),
    text: [
      "Thank you for contacting " + siteConfig.name + ".",
      "Francesco will reply with availability and a tailored proposal.",
      "",
      ...summaryRows.map(([label, value]) => label + ": " + value),
    ].join("\n"),
  };
}

function emailShell({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return [
    '<div style="margin:0;padding:0;background:#071512;font-family:Arial,Helvetica,sans-serif;">',
    '<div style="max-width:680px;margin:0 auto;padding:36px 18px;">',
    '<div style="border:1px solid rgba(215,180,106,.45);border-radius:28px;background:#fff8ec;overflow:hidden;">',
    '<div style="padding:34px 34px 24px;background:#071512;color:#fff8ec;">',
    '<p style="margin:0 0 12px;color:#d7b46a;font-size:11px;letter-spacing:.32em;text-transform:uppercase;">' + escapeHtml(eyebrow) + '</p>',
    '<h1 style="margin:0;font-family:Georgia,serif;font-size:40px;line-height:1;color:#fff8ec;">' + escapeHtml(siteConfig.name) + '</h1>',
    '</div>',
    '<div style="padding:34px;">',
    '<h2 style="margin:0 0 18px;font-family:Georgia,serif;font-size:34px;line-height:1.08;color:#071512;">' + title + '</h2>',
    body,
    '<p style="margin:28px 0 0;color:#7a6a58;font-size:13px;line-height:1.6;">Luxury private chef experiences by ' + escapeHtml(siteConfig.founder) + '.</p>',
    '</div>',
    '</div>',
    '</div>',
    '</div>',
  ].join("");
}

function inquiryTable(rows: string[][]) {
  return (
    '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:1px solid #eadfcf;border-radius:18px;overflow:hidden;">' +
    rows
      .map(([label, value], index) => {
        const background = index % 2 === 0 ? "#ffffff" : "#fbf3e6";
        return (
          '<tr style="background:' +
          background +
          '"><td style="padding:14px 16px;width:38%;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#9f7937;font-weight:bold;vertical-align:top;">' +
          escapeHtml(label) +
          '</td><td style="padding:14px 16px;color:#221b14;line-height:1.6;vertical-align:top;">' +
          escapeHtml(value) +
          "</td></tr>"
        );
      })
      .join("") +
    "</table>"
  );
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
