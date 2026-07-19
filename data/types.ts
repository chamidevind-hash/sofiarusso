export type Collection = {
  slug: string;
  title: string;
  description: string;
  image: string;
  itemCount: number;
  featured: boolean;
};

export type GalleryPhoto = {
  id: number;
  title: string;
  category: string;
  image: string;
  orientation: "portrait" | "tall";
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
};

export type DownloadPack = {
  slug: string;
  title: string;
  description: string;
  image: string;
  format: string;
};
