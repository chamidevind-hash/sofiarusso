import collectionsData from "./collections.json";
import downloadsData from "./downloads.json";
import postsData from "./posts.json";
import type { BlogPost, Collection, DownloadPack } from "./types";

export const collections = collectionsData as Collection[];
export const downloads = downloadsData as DownloadPack[];
export const posts = postsData as BlogPost[];

export const categories = collections.map((collection) => collection.title);
