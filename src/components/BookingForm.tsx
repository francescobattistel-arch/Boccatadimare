"use client";

import { trackPlausible } from "@/analytics/plausible";
import { siteConfig } from "@/config/site";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CalendarDays, CheckCircle2, Loader2 } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().min(2, "Please share your name."),
  email: z.string().email("Please enter a valid email."),
  guests: z.string().min(1, "Please share the guest count."),
  date: z.string().min(1, "Please choose a preferred date."),
  occasion: z.string().min(1, "Please choose the occasion."),
  menuExperience: z.string().min(1, "Please choose a preferred menu experience."),
  location: z.string().min(2, "Where will the event take place?"),
  dietaryRequirements: z.string().optional(),
  contactMethod: z.string().min(1, "Please choose a preferred contact method."),
  notes: z.string().max(1200, "Please keep notes under 1200 characters.").optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const defaultValues: QuoteFormValues = {
  name: "",
  email: "",
  guests: "",
  date: "",
  occasion: "",
  menuExperience: "",
  location: "",
  dietaryRequirements: "",
  contactMethod: "Email",
  notes: "",
};

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const hasTrackedOpen = useRef(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({ resolver: zodResolver(quoteSchema), defaultValues });

  function trackFormOpened() {
    if (!hasTrackedOpen.current) {
      hasTrackedOpen.current = true;
      trackPlausible("Booking Form Opened");
    }
  }

  async function onSubmit(values: QuoteFormValues) {
    setStatus("idle");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      trackPlausible("Booking Submitted", {
        menuExperience: values.menuExperience,
        occasion: values.occasion,
        contactMethod: values.contactMethod,
      });
      setStatus("success");
      reset(defaultValues);
      hasTrackedOpen.current = false;
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      id="quote-form"
      onFocusCapture={trackFormOpened}
      onSubmit={handleSubmit(onSubmit)}
      className="glass-panel rounded-[2rem] p-6 text-left md:p-8"
      aria-label="Private chef quote request"
    >
      <div className="mb-8 flex items-start gap-4">
        <div className="rounded-full bg-[#d7b46a]/15 p-3 text-[#d7b46a]">
          <CalendarDays aria-hidden="true" className="h-6 w-6" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d7b46a]">
            Concierge booking
          </p>
          <h2 className="font-display mt-2 text-4xl text-[#fff8ec]">
            Request a tailored quote
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#fff8ec]/62">
            Share the essentials and Francesco will reply with a refined menu direction, availability, and service recommendation.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name")} className="form-input" placeholder="Your name" autoComplete="name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} className="form-input" placeholder="name@domain.com" autoComplete="email" />
        </Field>
        <Field label="Number of guests" error={errors.guests?.message}>
          <input {...register("guests")} className="form-input" placeholder="8 guests" inputMode="numeric" />
        </Field>
        <Field label="Preferred date" error={errors.date?.message}>
          <input {...register("date")} className="form-input" type="date" />
        </Field>
        <Field label="Occasion" error={errors.occasion?.message}>
          <select {...register("occasion")} className="form-input" defaultValue="">
            <option value="" disabled>Choose occasion</option>
            {siteConfig.booking.occasions.map((occasion) => <option key={occasion} value={occasion}>{occasion}</option>)}
          </select>
        </Field>
        <Field label="Preferred menu experience" error={errors.menuExperience?.message}>
          <select {...register("menuExperience")} className="form-input" defaultValue="">
            <option value="" disabled>Choose menu style</option>
            {siteConfig.booking.menuExperiences.map((experience) => <option key={experience} value={experience}>{experience}</option>)}
          </select>
        </Field>
        <Field label="Event location" error={errors.location?.message}>
          <input {...register("location")} className="form-input" placeholder="Villa, yacht, private home" />
        </Field>
        <Field label="Preferred contact method" error={errors.contactMethod?.message}>
          <select {...register("contactMethod")} className="form-input">
            {siteConfig.booking.contactMethods.map((method) => <option key={method} value={method}>{method}</option>)}
          </select>
        </Field>
        <Field label="Dietary requirements" error={errors.dietaryRequirements?.message} className="md:col-span-2">
          <input {...register("dietaryRequirements")} className="form-input" placeholder="Allergies, preferences, non-negotiables" />
        </Field>
        <Field label="Optional notes" error={errors.notes?.message} className="md:col-span-2">
          <textarea {...register("notes")} className="form-input min-h-32 rounded-[1.4rem] resize-none" placeholder="Tell us about the setting, kitchen access, timing, wine preferences, or any details that will help shape the evening." />
        </Field>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        data-plausible-event="Booking Submit Clicked"
        className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#d7b46a] px-8 py-4 text-sm font-bold uppercase tracking-[0.24em] text-[#071512] transition hover:bg-[#f1d893] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? <Loader2 aria-hidden="true" className="h-5 w-5 animate-spin" /> : <ArrowRight aria-hidden="true" className="h-5 w-5" />}
        Request quote
      </button>

      {status === "success" ? (
        <p className="mt-5 flex items-start gap-2 text-sm leading-6 text-[#d8f5e6]" role="status">
          <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          Thank you. Francesco will reply with availability and a bespoke proposal.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-5 text-sm leading-6 text-[#ffb4a8]" role="alert">
          We could not send the request. Please email {siteConfig.contact.email}.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={className ?? "block"}>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-[#fff8ec]/65">
        {label}
      </span>
      {children}
      {error ? <span className="mt-2 block text-xs text-[#ffb4a8]">{error}</span> : null}
    </label>
  );
}
