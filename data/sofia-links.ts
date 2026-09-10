export type SofiaIconKey =
  | "arrow"
  | "bag"
  | "coffee"
  | "facebook"
  | "gift"
  | "globe"
  | "home"
  | "images"
  | "instagram"
  | "lock"
  | "mail"
  | "paypal"
  | "phone"
  | "share"
  | "sparkles";

export type SofiaLinkVariant =
  | "pink"
  | "coral"
  | "blue"
  | "facebook"
  | "instagram"
  | "primary"
  | "wishlist";

export type SofiaLink = {
  title: string;
  subtitle: string;
  href: string;
  icon: SofiaIconKey;
  variant: SofiaLinkVariant;
  external?: boolean;
  label?: string;
  ariaLabel?: string;
};

export type SofiaSocialLink = {
  label: string;
  href: string;
  icon: SofiaIconKey;
  external?: boolean;
};

export type SofiaPreviewImage = {
  alt: string;
  href: string;
  image: string;
  featured?: boolean;
};

const facebookUrl =
  process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://facebook.com/";

const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/";

export const sofiaProfile = {
  name: "Sofia",
  username: "@sofia",
  meta: "Virtual Creator · Los Angeles",
  bio: "Fashion, photography and everyday lifestyle inspiration.",
  coverImage: "/images/blog/city-photo-walk.webp",
  avatarImage: "/images/blog/colors-photograph-well.webp",
};

export const sofiaStats = [
  "Lifestyle collections",
  "HD wallpapers",
  "New posts daily",
];

export const sofiaLinks: SofiaLink[] = [
  {
    icon: "lock",
    title: "Explore Sofia",
    subtitle: "Fashion, photography and lifestyle inspiration",
    href: "/collections",
    variant: "pink",
    label: "Popular",
  },
  {
    icon: "images",
    title: "Lifestyle Collections",
    subtitle: "Fashion, photography and lifestyle inspiration",
    href: "/collections",
    variant: "coral",
  },
  {
    icon: "phone",
    title: "HD Phone Wallpapers",
    subtitle: "Download Sofia wallpapers for your phone",
    href: "/downloads",
    variant: "blue",
  },
  {
    icon: "facebook",
    title: "Follow on Facebook",
    subtitle: "New Sofia photos every day",
    href: facebookUrl,
    external: true,
    variant: "facebook",
  },
  {
    icon: "instagram",
    title: "Follow on Instagram",
    subtitle: "More from Sofia's virtual life",
    href: instagramUrl,
    external: true,
    variant: "instagram",
  },
];

export const sofiaSocialLinks: SofiaSocialLink[] = [
  {
    icon: "facebook",
    label: "Follow Sofia on Facebook",
    href: facebookUrl,
    external: true,
  },
  {
    icon: "instagram",
    label: "Follow Sofia on Instagram",
    href: instagramUrl,
    external: true,
  },
  {
    icon: "globe",
    label: "Visit SofiaRusso website",
    href: "/",
  },
];

export const sofiaPreviewImages: SofiaPreviewImage[] = [
  {
    alt: "Sofia overlooking the city at night",
    href: "/collections",
    image: "/images/blog/city-photo-walk.webp",
    featured: true,
  },
  {
    alt: "Sofia in a hotel mirror portrait",
    href: "/collections",
    image: "/images/blog/colors-photograph-well.webp",
  },
  {
    alt: "Sofia in a luxury hotel lobby",
    href: "/collections",
    image: "/images/blog/indoor-phone-photography.webp",
  },
  {
    alt: "Sofia in a warm hotel room at golden hour",
    href: "/collections",
    image: "/images/blog/capsule-wardrobe.webp",
  },
];