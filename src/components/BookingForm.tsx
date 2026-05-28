"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CalendarDays, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().min(2, "Please share your name."),
  email: z.string().email("Please enter a valid email."),
  guests: z.string().min(1, "How many guests will join?"),
  date: z.string().min(1, "Please choose a preferred date."),
  location: z.string().min(2, "Where will the dinner take place?"),
  dietaryRequests: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;
const defaultValues: QuoteFormValues = { name: "", email: "", guests: "", date: "", location: "", dietaryRequests: "" };

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<QuoteFormValues>({ resolver: zodResolver(quoteSchema), defaultValues });

  async function onSubmit(values: QuoteFormValues) {
    setStatus("idle");
    const response = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    if (!response.ok) {
      setStatus("error");
      return;
    }
    setStatus("success");
    reset(defaultValues);
  }

  return (
    <form id="quote-form" onSubmit={handleSubmit(onSubmit)} className="glass-panel rounded-[2rem] p-6 text-left md:p-8">
      <div className="mb-8 flex items-start gap-4">
        <div className="rounded-full bg-[#d7b46a]/15 p-3 text-[#d7b46a]"><CalendarDays aria-hidden="true" className="h-6 w-6" /></div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d7b46a]">Private booking</p>
          <h2 className="font-display mt-2 text-4xl text-[#fff8ec]">Request a tailored quote</h2>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}><input {...register("name")} className="form-input" placeholder="Your name" autoComplete="name" /></Field>
        <Field label="Email" error={errors.email?.message}><input {...register("email")} className="form-input" placeholder="you@example.com" autoComplete="email" /></Field>
        <Field label="Guests" error={errors.guests?.message}><input {...register("guests")} className="form-input" placeholder="8 guests" inputMode="numeric" /></Field>
        <Field label="Date" error={errors.date?.message}><input {...register("date")} className="form-input" type="date" /></Field>
        <Field label="Location" error={errors.location?.message}><input {...register("location")} className="form-input" placeholder="Villa, yacht, private home" /></Field>
        <Field label="Dietary requests" error={errors.dietaryRequests?.message}><input {...register("dietaryRequests")} className="form-input" placeholder="Allergies, preferences, notes" /></Field>
      </div>
      <button type="submit" disabled={isSubmitting} data-analytics="quote-request" className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#d7b46a] px-8 py-4 text-sm font-bold uppercase tracking-[0.24em] text-[#071512] transition hover:bg-[#f1d893] disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? <Loader2 aria-hidden="true" className="h-5 w-5 animate-spin" /> : <ArrowRight aria-hidden="true" className="h-5 w-5" />}
        Request quote
      </button>
      {status === "success" ? <p className="mt-5 flex items-center gap-2 text-sm text-[#d8f5e6]"><CheckCircle2 aria-hidden="true" className="h-4 w-4" />Thank you. Francesco will reply with availability and a bespoke proposal.</p> : null}
      {status === "error" ? <p className="mt-5 text-sm text-[#ffb4a8]">We could not send the request. Please email hello@boccatadimare.com.</p> : null}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.24em] text-[#fff8ec]/65">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-xs text-[#ffb4a8]">{error}</span> : null}
    </label>
  );
}
