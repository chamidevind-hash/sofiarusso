export type SofiaCollectionImage = {
  src: string;
  alt: string;
  aspect: "portrait" | "landscape" | "square";
};

export const losAngelesAfterDarkImages: SofiaCollectionImage[] = [
  {
    src: "/images/sofia-wallpaper-preview.webp",
    alt: "Sofia overlooking Los Angeles city lights at night",
    aspect: "landscape",
  },
  {
    src: "/images/sofia-collection-hotel.webp",
    alt: "Sofia in a luxury hotel interior",
    aspect: "portrait",
  },
  {
    src: "/images/sofia-collection-mirror.webp",
    alt: "Sofia mirror portrait in an elegant evening look",
    aspect: "portrait",
  },
  {
    src: "/images/sofia-collection-satin.webp",
    alt: "Sofia in white satin styling",
    aspect: "portrait",
  },
  {
    src: "/images/sofia-gallery-1.webp",
    alt: "Sofia in warm golden evening light",
    aspect: "portrait",
  },
  {
    src: "/images/sofia-gallery-2.webp",
    alt: "Sofia in a city night editorial portrait",
    aspect: "portrait",
  },
  {
    src: "/images/sofia-gallery-3.webp",
    alt: "Sofia in a refined Los Angeles lifestyle portrait",
    aspect: "portrait",
  },
  {
    src: "/images/sofia-hero.webp",
    alt: "Sofia editorial portrait with a cinematic mood",
    aspect: "portrait",
  },
];

export const featuredCollection = {
  slug: "los-angeles-after-dark",
  title: "Los Angeles After Dark",
  description: "Luxury interiors, city lights and Sofia's signature night-time aesthetic.",
  href: "/collections/los-angeles-after-dark",
  image: "/images/sofia-wallpaper-preview.webp",
  imageCount: losAngelesAfterDarkImages.length,
};
