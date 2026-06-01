import { useCallback } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export type CallSource =
  | "header"
  | "footer"
  | "hero"
  | "service_page"
  | "city_page"
  | "emergency_banner"
  | "google_maps"
  | "google_ads";

interface CallTrackingOptions {
  source: CallSource;
  label?: string;
}

export function useCallTracking() {
  const location = useLocation();

  const trackCall = useCallback(({ source, label }: CallTrackingOptions) => {
    // Google Analytics 4 event
    if (typeof window.gtag === "function") {
      window.gtag("event", "phone_call_click", {
        event_category: "engagement",
        event_label: label || source,
        call_source: source,
        page_path: location.pathname,
      });

      // GA4 conversion event (configure this as a conversion in GA4)
      window.gtag("event", "conversion", {
        send_to: "AW-CONVERSION_ID/CONVERSION_LABEL", // replace with your Google Ads conversion ID
        value: 1.0,
        currency: "USD",
      });
    }

    // Fallback: dataLayer push for GTM
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: "phone_call_click",
        callSource: source,
        pagePath: location.pathname,
        label: label || source,
      });
    }

    // Log in development
    if (import.meta.env.DEV) {
      console.log("[Call Tracking]", { source, label, path: location.pathname });
    }
  }, [location.pathname]);

  return { trackCall };
}

// Standalone helper for use outside of React components
export function trackCallClick(source: CallSource) {
  if (typeof window.gtag === "function") {
    window.gtag("event", "phone_call_click", {
      event_category: "engagement",
      call_source: source,
    });
  }
}
