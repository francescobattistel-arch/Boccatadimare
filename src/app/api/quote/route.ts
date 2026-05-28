import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  guests: z.string().min(1),
  date: z.string().min(1),
  location: z.string().min(2),
  dietaryRequests: z.string().optional().default(""),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid quote request." }, { status: 400 });
  }

  const { name, email, guests, date, location, dietaryRequests } = parsed.data;
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.BOOKING_TO_EMAIL;
  const fromEmail = process.env.BOOKING_FROM_EMAIL ?? "Boccata di Mare <onboarding@resend.dev>";

  if (!resendApiKey || !toEmail) {
    return NextResponse.json({ ok: true, mode: "preview" });
  }

  const resend = new Resend(resendApiKey);
  const requestHtml = [
    "<h1>New Boccata di Mare quote request</h1>",
    "<p><strong>Name:</strong> " + escapeHtml(name) + "</p>",
    "<p><strong>Email:</strong> " + escapeHtml(email) + "</p>",
    "<p><strong>Guests:</strong> " + escapeHtml(guests) + "</p>",
    "<p><strong>Date:</strong> " + escapeHtml(date) + "</p>",
    "<p><strong>Location:</strong> " + escapeHtml(location) + "</p>",
    "<p><strong>Dietary requests:</strong> " + escapeHtml(dietaryRequests || "None shared") + "</p>",
  ].join("");

  await Promise.all([
    resend.emails.send({ from: fromEmail, to: toEmail, replyTo: email, subject: "New private chef quote request from " + name, html: requestHtml }),
    resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Your Boccata di Mare request has been received",
      html: "<p>Dear " + escapeHtml(name) + ",</p><p>Thank you for contacting Boccata di Mare. Francesco will review your request and reply with availability and a tailored proposal.</p><p>Warm regards,<br/>Boccata di Mare</p>",
    }),
  ]);

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
