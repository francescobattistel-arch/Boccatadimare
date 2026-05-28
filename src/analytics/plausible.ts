export type PlausibleProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: PlausibleProps }) => void;
  }
}

export function trackPlausible(eventName: string, props?: PlausibleProps) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.plausible === "function") {
    window.plausible(eventName, props ? { props } : undefined);
  }
}
