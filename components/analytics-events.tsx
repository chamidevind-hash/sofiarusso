"use client";

import Link, { type LinkProps } from "next/link";
import { AnchorHTMLAttributes, ReactNode, useEffect, useRef, useState } from "react";
import { addCurrentUtmParams, sendAnalyticsEvent, type AnalyticsEventName, type AnalyticsEventParams } from "@/lib/analytics";

export function AnalyticsPageView({ eventName, params }: { eventName: AnalyticsEventName; params?: AnalyticsEventParams }) {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) {
      return;
    }

    sent.current = true;
    sendAnalyticsEvent(eventName, params);
  }, [eventName, params]);

  return null;
}

type TrackedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | "href"> & {
    children: ReactNode;
    eventName: AnalyticsEventName;
    eventParams?: AnalyticsEventParams;
    preserveUtm?: boolean;
  };

export function TrackedLink({ children, eventName, eventParams, href, onClick, preserveUtm = false, ...props }: TrackedLinkProps) {
  const [trackedHref, setTrackedHref] = useState(href);

  useEffect(() => {
    if (preserveUtm && typeof href === "string") {
      setTrackedHref(addCurrentUtmParams(href));
    }
  }, [href, preserveUtm]);

  return (
    <Link
      {...props}
      href={trackedHref}
      onClick={(event) => {
        onClick?.(event);
        sendAnalyticsEvent(eventName, eventParams);
      }}
    >
      {children}
    </Link>
  );
}

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName: AnalyticsEventName;
  eventParams?: AnalyticsEventParams;
  href: string;
};

export function TrackedAnchor({ children, eventName, eventParams, onClick, ...props }: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        onClick?.(event);
        sendAnalyticsEvent(eventName, eventParams);
      }}
    >
      {children}
    </a>
  );
}
