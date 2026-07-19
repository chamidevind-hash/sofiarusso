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
  | "primary"
  | "pink"
  | "coral"
  | "blue"
  | "wishlist"
  | "facebook"
  | "instagram";

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

const paypalCoffeeUrl =
  process.env.NEXT_PUBLIC_PAYPAL_COFFEE_URL ?? "https://www.paypal.me/YOURHANDLE/5USD";

const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://facebook.com/";
const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/";
const fourthwallUrl = process.env.NEXT_PUBLIC_FOURTHWALL_URL ?? "https://fourthwall.com/";
const amazonWishlistUrl = process.env.NEXT_PUBLIC_AMAZON_WISHLIST_URL ?? "https://www.amazon.com/hz/wishlist/";

export const sofiaProfile = {
  name: "Sofia",
  username: "@sofia",
  meta: "AI Virtual Creator · Los Angeles",
  bio: "Luxury nights, private diaries and exclusive virtual collections.",
  coverImage: "/images/sofia-wallpaper-preview.webp",
  avatarImage: "/images/sofia-collection-mirror.webp",
};

export const sofiaStats = ["Exclusive collections", "HD wallpapers", "New posts daily"];

export const sofiaFeaturedCollection = {
  title: "Los Angeles After Dark",
  subtitle: "Sofia's latest exclusive collection",
  cta: "Explore collection",
  href: "/collections",
  image: "/images/sofia-wallpaper-preview.webp",
};

export const sofiaLinks: SofiaLink[] = [
  {
    icon: "coffee",
    title: "Buy Sofia a Coffee",
    subtitle: "Support the next virtual photoshoot",
    href: paypalCoffeeUrl,
    external: true,
    variant: "primary",
    label: "$5 support",
    ariaLabel: "Buy Sofia a Coffee for five dollars using PayPal",
  },
  {
    icon: "lock",
    title: "Enter SofiaHub",
    subtitle: "Exclusive collections and private diaries",
    href: "/collections",
    variant: "pink",
    label: "Popular",
  },
  {
    icon: "bag",
    title: "My Merch",
    subtitle: "Shop Sofia's official apparel and creator merchandise",
    href: fourthwallUrl,
    external: true,
    variant: "pink",
    label: "Official Store",
  },
  {
    icon: "gift",
    title: "Sofia's Amazon Wishlist",
    subtitle: "See Sofia's favorite outfits, accessories and creator gear",
    href: amazonWishlistUrl,
    external: true,
    variant: "wishlist",
    label: "Wishlist",
  },
  {
    icon: "images",
    title: "Latest Exclusive Collection",
    subtitle: "Unseen photos from Los Angeles",
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
    icon: "mail",
    label: "Email SofiaHub",
    href: "mailto:hello@sofiahub.com",
  },
  {
    icon: "globe",
    label: "Visit SofiaHub website",
    href: "/",
  },
  {
    icon: "paypal",
    label: "Support Sofia on PayPal",
    href: paypalCoffeeUrl,
    external: true,
  },
];

export const sofiaPreviewImages: SofiaPreviewImage[] = [
  {
    alt: "Sofia overlooking the city at night",
    href: "/collections",
    image: "/images/sofia-wallpaper-preview.webp",
    featured: true,
  },
  {
    alt: "Sofia in a hotel mirror portrait",
    href: "/collections",
    image: "/images/sofia-collection-mirror.webp",
  },
  {
    alt: "Sofia in a luxury hotel lobby",
    href: "/collections",
    image: "/images/sofia-collection-hotel.webp",
  },
  {
    alt: "Sofia in a warm hotel room at golden hour",
    href: "/collections",
    image: "/images/sofia-collection-satin.webp",
  },
];

export const sofiaSupport = {
  title: "Help create Sofia's next collection",
  text: "Support new locations, outfits and exclusive virtual photoshoots.",
  buttonText: "Buy Sofia a Coffee - $5",
  href: paypalCoffeeUrl,
  note: "Sofia is an AI virtual creator. Support is voluntary.",
};

export const sofiaMerch = {
  title: "Official Sofia Merch",
  subtitle: "Creator apparel, accessories and limited collections.",
  cta: "Visit the Store",
  href: fourthwallUrl,
  wishlistTitle: "Amazon Wishlist",
  wishlistText: "Explore Sofia's favorite fashion, beauty and creator essentials.",
  wishlistCta: "View Wishlist",
  wishlistHref: amazonWishlistUrl,
};
