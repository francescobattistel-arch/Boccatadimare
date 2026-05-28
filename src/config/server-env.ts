type BookingEmailEnv = {
  resendApiKey?: string;
  bookingToEmail?: string;
  bookingFromEmail?: string;
  missing: string[];
};

let warnedAboutMissingEmailEnv = false;

export function getBookingEmailEnv(): BookingEmailEnv {
  const resendApiKey = process.env.RESEND_API_KEY;
  const bookingToEmail = process.env.BOOKING_TO_EMAIL;
  const bookingFromEmail = process.env.BOOKING_FROM_EMAIL;
  const requiredEnvVars: Array<[string, string | undefined]> = [
    ["RESEND_API_KEY", resendApiKey],
    ["BOOKING_TO_EMAIL", bookingToEmail],
    ["BOOKING_FROM_EMAIL", bookingFromEmail],
  ];
  const missing = requiredEnvVars
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (process.env.NODE_ENV === "development" && missing.length > 0 && !warnedAboutMissingEmailEnv) {
    warnedAboutMissingEmailEnv = true;
    console.warn(
      "[Boccata di Mare] Booking email is running in preview-safe mode. Missing env vars: " +
        missing.join(", ") +
        ". Set RESEND_API_KEY, BOOKING_TO_EMAIL, and BOOKING_FROM_EMAIL to send email."
    );
  }

  return { resendApiKey, bookingToEmail, bookingFromEmail, missing };
}

export function isBookingEmailConfigured(env: BookingEmailEnv) {
  return Boolean(env.resendApiKey && env.bookingToEmail && env.bookingFromEmail);
}
