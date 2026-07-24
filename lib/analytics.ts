"use client";

export type AnalyticsEventName =
  | "private_pool_preview_click"
  | "homepage_membership_click"
  | "collection_preview_click"
  | "locked_preview_click"
  | "unlock_collection_click"
  | "join_page_view"
  | "paypal_insider_click"
  | "paypal_vip_click"
  | "paypal_lifetime_click"
  | "member_signin_click";

export type AnalyticsEventParams = {
  collection_name?: "private_pool_day";
  package_name?: "insider" | "vip" | "lifetime";
  source_page?: "homepage" | "collection" | "join";
};

declare global {
  interface Window {
    gtag?: (command: "event", eventName: AnalyticsEventName, params?: AnalyticsEventParams) => void;
  }
}

export function sendAnalyticsEvent(eventName: AnalyticsEventName, params?: AnalyticsEventParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}

export function addCurrentUtmParams(href: string) {
  if (typeof window === "undefined" || !href.startsWith("/")) {
    return href;
  }

  const currentParams = new URLSearchParams(window.location.search);
  const utmParams = new URLSearchParams();

  ["utm_source", "utm_medium", "utm_campaign"].forEach((key) => {
    const value = currentParams.get(key);
    if (value) {
      utmParams.set(key, value);
    }
  });

  if (!Array.from(utmParams).length) {
    return href;
  }

  const [path, query = ""] = href.split("?");
  const nextParams = new URLSearchParams(query);

  utmParams.forEach((value, key) => {
    if (!nextParams.has(key)) {
      nextParams.set(key, value);
    }
  });

  const nextQuery = nextParams.toString();
  return nextQuery ? `${path}?${nextQuery}` : path;
}
