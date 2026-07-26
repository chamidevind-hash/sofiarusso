"use client";

export type AnalyticsEventName =
  | "private_pool_preview_click"
  | "homepage_membership_click"
  | "collection_card_click"
  | "bottom_membership_click"
  | "homepage_main_teaser_click"
  | "homepage_clear_teaser_click"
  | "homepage_locked_teaser_click"
  | "sofia_at_home_click"
  | "wallpaper_section_click"
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
  section_name?: "sofia_at_home" | "hd_wallpapers";
  source_page?: "homepage" | "collection" | "join";
  teaser_position?: "main" | "clear_1" | "clear_2" | "locked_1" | "locked_2";
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
