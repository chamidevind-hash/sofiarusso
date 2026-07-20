export type SofiaWallpaper = {
  id: string;
  title: string;
  preview: string;
  download: string;
  category: string;
  dimensions?: string;
};

export const sofiaWallpapers: SofiaWallpaper[] = [
  {
    id: "white-satin",
    title: "White Satin",
    preview: "/downloads/wallpapers/sofia-white-satin-wallpaper.webp",
    download: "/downloads/wallpapers/sofia-white-satin-wallpaper.webp",
    category: "Soft Editorial",
    dimensions: "Phone ready",
  },
  {
    id: "los-angeles-night",
    title: "Los Angeles Night",
    preview: "/downloads/wallpapers/sofia-los-angeles-night-wallpaper.webp",
    download: "/downloads/wallpapers/sofia-los-angeles-night-wallpaper.webp",
    category: "City Lights",
    dimensions: "Phone ready",
  },
  {
    id: "mirror-moment",
    title: "Mirror Moment",
    preview: "/downloads/wallpapers/sofia-mirror-moment-wallpaper.webp",
    download: "/downloads/wallpapers/sofia-mirror-moment-wallpaper.webp",
    category: "Portrait",
    dimensions: "Phone ready",
  },
  {
    id: "city-lights",
    title: "City Lights",
    preview: "/downloads/wallpapers/sofia-city-lights-wallpaper.webp",
    download: "/downloads/wallpapers/sofia-city-lights-wallpaper.webp",
    category: "Night Mood",
    dimensions: "Phone ready",
  },
];
