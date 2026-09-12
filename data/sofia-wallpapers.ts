export type SofiaWallpaper = {
  id: string;
  title: string;
  preview: string;
  download: string;
  category: string;
  description?: string;
  dimensions?: string;
  alt: string;
};

export const sofiaWallpapers: SofiaWallpaper[] = [
  {
    id: "ivory-texture",
    title: "Ivory Texture",
    preview: "/downloads/wallpapers/sofia-white-satin-wallpaper.webp",
    download: "/downloads/wallpapers/sofia-white-satin-wallpaper.webp",
    category: "Minimal",
    description:
      "Soft ivory textures and natural light designed for a calm phone screen.",
    dimensions: "9:16 HD",
    alt: "Minimal ivory fabric texture phone wallpaper",
  },
  {
    id: "los-angeles-night",
    title: "Los Angeles Night",
    preview: "/downloads/wallpapers/sofia-los-angeles-night-wallpaper.webp",
    download: "/downloads/wallpapers/sofia-los-angeles-night-wallpaper.webp",
    category: "City",
    description:
      "Palm-lined streets and warm evening lights inspired by Los Angeles.",
    dimensions: "9:16 HD",
    alt: "Los Angeles palm lined city street at night phone wallpaper",
  },
  {
    id: "mirror-interior",
    title: "Quiet Interior",
    preview: "/downloads/wallpapers/sofia-mirror-moment-wallpaper.webp",
    download: "/downloads/wallpapers/sofia-mirror-moment-wallpaper.webp",
    category: "Interior",
    description:
      "A calm apartment interior with neutral tones and soft natural light.",
    dimensions: "9:16 HD",
    alt: "Minimal apartment mirror interior phone wallpaper",
  },
  {
    id: "city-lights",
    title: "City Lights",
    preview: "/downloads/wallpapers/sofia-city-lights-wallpaper-preview.webp",
    download: "/downloads/wallpapers/sofia-city-lights-wallpaper.png",
    category: "Night",
    description:
      "A clean blue-hour city view designed with space for lock-screen details.",
    dimensions: "9:16 HD",
    alt: "Blue hour city skyline phone wallpaper",
  },
];
