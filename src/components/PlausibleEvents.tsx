"use client";

import { trackPlausible } from "@/analytics/plausible";
import { useEffect } from "react";

export function PlausibleEvents() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const eventElement = target.closest<HTMLElement>("[data-plausible-event]");
      const eventName = eventElement?.dataset.plausibleEvent;
      if (!eventName) {
        return;
      }

      const props = Object.entries(eventElement.dataset).reduce<Record<string, string>>(
        (currentProps, [key, value]) => {
          if (key.startsWith("plausibleProp") && value) {
            const propName = key.replace("plausibleProp", "");
            const normalizedName = propName.charAt(0).toLowerCase() + propName.slice(1);
            currentProps[normalizedName] = value;
          }
          return currentProps;
        },
        {}
      );

      trackPlausible(eventName, props);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
