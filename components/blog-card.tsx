import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/icons";
import type { BlogPost } from "@/data/types";

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article className={`group ${featured ? "lg:grid lg:grid-cols-2 lg:gap-10" : ""}`}>
      <div
        className={`relative overflow-hidden bg-cream ${
          featured ? "aspect-[4/5] lg:aspect-[5/4]" : "aspect-[4/5]"
        }`}
      >
        <Image
          alt={post.title}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
          fill
          priority={featured}
          sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          src={post.image}
        />
      </div>
      <div className={`border-b border-ink/15 py-6 ${featured ? "lg:flex lg:flex-col lg:justify-center lg:border-y" : ""}`}>
        <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-editorial text-taupe">
          <span>{post.category}</span>
          <span className="h-px w-5 bg-champagne" />
          <span>{post.readTime}</span>
        </div>
        <h2
          className={`mt-4 font-display leading-[1.02] text-ink ${
            featured ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
          }`}
        >
          {post.title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-taupe">{post.excerpt}</p>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-[9px] font-bold uppercase tracking-editorial text-ink/45">{post.date}</p>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-ivory">
            <ArrowUpRightIcon className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
