import type { SVGProps } from "react";
import type { SofiaIconKey } from "@/data/sofia-links";

type IconProps = SVGProps<SVGSVGElement> & {
  name: SofiaIconKey;
};

const lineProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function SofiaIcon({ name, ...props }: IconProps) {
  switch (name) {
    case "arrow":
      return (
        <svg aria-hidden="true" {...lineProps} {...props}>
          <path d="M5 12h14M14 7l5 5-5 5" />
        </svg>
      );
    case "bag":
      return (
        <svg aria-hidden="true" {...lineProps} {...props}>
          <path d="M6.5 8.5h11l.8 11H5.7l.8-11Z" />
          <path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" />
          <path d="M9.2 13.5h5.6" />
        </svg>
      );
    case "coffee":
      return (
        <svg aria-hidden="true" {...lineProps} {...props}>
          <path d="M5 8h10.5v6.2A3.8 3.8 0 0 1 11.7 18H8.8A3.8 3.8 0 0 1 5 14.2V8Z" />
          <path d="M15.5 10h1.6a2.6 2.6 0 0 1 0 5.2h-1.6" />
          <path d="M8 4.5v1M12 4.5v1M4 20h15" />
        </svg>
      );
    case "facebook":
      return (
        <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M14.1 8.2V6.8c0-.72.48-1.12 1.2-1.12h1.72V3.1A22.7 22.7 0 0 0 14.5 3c-2.5 0-4.2 1.53-4.2 4.3v.9H7.9v2.95h2.4V21h3.1v-9.85h2.45l.47-2.95H13.4v-.63c0-.85.23-1.37.7-1.37Z" />
        </svg>
      );
    case "gift":
      return (
        <svg aria-hidden="true" {...lineProps} {...props}>
          <rect x="4" y="9" width="16" height="11" rx="2.3" />
          <path d="M4 13h16M12 9v11" />
          <path d="M12 8.7c-2.7 0-4.2-.9-4.2-2.2A1.7 1.7 0 0 1 9.5 4.8C11.2 4.8 12 6.8 12 8.7Z" />
          <path d="M12 8.7c2.7 0 4.2-.9 4.2-2.2a1.7 1.7 0 0 0-1.7-1.7C12.8 4.8 12 6.8 12 8.7Z" />
        </svg>
      );
    case "globe":
      return (
        <svg aria-hidden="true" {...lineProps} {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.2 2.4 3.4 5.4 3.4 9S14.2 18.6 12 21c-2.2-2.4-3.4-5.4-3.4-9S9.8 5.4 12 3Z" />
        </svg>
      );
    case "home":
      return (
        <svg aria-hidden="true" {...lineProps} {...props}>
          <path d="m4 11 8-7 8 7" />
          <path d="M6.5 10.5V20h11v-9.5" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case "images":
      return (
        <svg aria-hidden="true" {...lineProps} {...props}>
          <rect x="4" y="5" width="16" height="14" rx="3" />
          <circle cx="9" cy="10" r="1.4" />
          <path d="m7 17 4.2-4.2 3 3 1.5-1.5L20 18.4" />
        </svg>
      );
    case "instagram":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
          <defs>
            <linearGradient id="sofia-instagram-gradient" x1="4" x2="20" y1="20" y2="4">
              <stop offset="0" stopColor="#ff6a5f" />
              <stop offset="0.48" stopColor="#ff4f91" />
              <stop offset="1" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="5"
            fill="none"
            stroke="url(#sofia-instagram-gradient)"
            strokeWidth="2"
          />
          <circle cx="12" cy="12" r="3.55" fill="none" stroke="url(#sofia-instagram-gradient)" strokeWidth="2" />
          <circle cx="16.65" cy="7.35" r="1.15" fill="url(#sofia-instagram-gradient)" />
        </svg>
      );
    case "lock":
      return (
        <svg aria-hidden="true" {...lineProps} {...props}>
          <rect x="5" y="10" width="14" height="10" rx="2.6" />
          <path d="M8.2 10V7.7a3.8 3.8 0 0 1 7.6 0V10" />
          <path d="M12 14.4v1.8" />
        </svg>
      );
    case "mail":
      return (
        <svg aria-hidden="true" {...lineProps} {...props}>
          <rect width="18" height="14" x="3" y="5" rx="2.6" />
          <path d="m4 7.5 8 5.7 8-5.7" />
        </svg>
      );
    case "paypal":
      return (
        <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.2 20.7H5.1L7.8 3.3h6.58c3.3 0 5.22 1.9 4.7 4.9-.48 2.9-2.93 4.85-6.34 4.85h-2.32l-.62 3.85h2.04c3.15 0 5.56-1.6 6.45-4.08.22.66.23 1.47.08 2.36-.5 3.1-2.88 5.52-6.62 5.52H9.12l-.92 0Zm2.78-10.32h2.18c1.42 0 2.48-.78 2.7-2.02.22-1.28-.56-2.2-2-2.2h-2.2l-.68 4.22Z" />
        </svg>
      );
    case "phone":
      return (
        <svg aria-hidden="true" {...lineProps} {...props}>
          <rect x="7.5" y="3" width="9" height="18" rx="2.7" />
          <path d="M11 17.7h2" />
        </svg>
      );
    case "share":
      return (
        <svg aria-hidden="true" {...lineProps} {...props}>
          <path d="M12 5v10" />
          <path d="m8 8 4-4 4 4" />
          <path d="M6 13v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5" />
        </svg>
      );
    case "sparkles":
      return (
        <svg aria-hidden="true" {...lineProps} {...props}>
          <path d="M12 3c.45 4.9 3.1 7.55 8 8-4.9.45-7.55 3.1-8 8-.45-4.9-3.1-7.55-8-8 4.9-.45 7.55-3.1 8-8Z" />
          <path d="M19 3v3M20.5 4.5h-3" />
        </svg>
      );
  }
}
