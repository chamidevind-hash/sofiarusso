"use client";

import Link, { type LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode, useEffect } from "react";

export type AnalyticsEventName =
  | "collection_preview_click"
  | "unlock_collection_click"
  | "join_page_view"
  | "paypal_insider_click"
  | "paypal_vip_click"
  | "paypal_lifetime_click"
  | "member_signin_click";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function sendAnalyticsEvent(eventName: AnalyticsEventName) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName);
}

export function AnalyticsPageView({ eventName }: { eventName: AnalyticsEventName }) {
  useEffect(() => {
    sendAnalyticsEvent(eventName);
  }, [eventName]);

  return null;
}

type TrackedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | "href"> & {
    children: ReactNode;
    eventName: AnalyticsEventName;
  };

export function TrackedLink({ children, eventName, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        onClick?.(event);
        sendAnalyticsEvent(eventName);
      }}
    >
      {children}
    </Link>
  );
}

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName: AnalyticsEventName;
  href: string;
};

export function TrackedAnchor({ children, eventName, onClick, ...props }: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        onClick?.(event);
        sendAnalyticsEvent(eventName);
      }}
    >
      {children}
    </a>
  );
}
