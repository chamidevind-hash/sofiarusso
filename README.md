# Sofia Hub

A clean, mobile-first lifestyle and fashion website for Sofia, a fictional AI creator. Built with Next.js, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production check

```bash
npm run typecheck
npm run build
npm start
```

## Project structure

```text
app/                  Pages, layout, metadata, sitemap, and robots
components/           Shared navigation, cards, forms, and UI elements
data/                 Local JSON content and TypeScript types
public/images/        Local Sofia Hub editorial images
tailwind.config.js    Brand colors, typography, and theme extensions
next.config.js        Next.js configuration
```

## Content updates

- Edit `data/collections.json` to change or add collections.
- Edit `data/gallery.json` to manage gallery images and categories.
- Edit `data/downloads.json` to manage upcoming wallpaper packs.
- Edit `data/posts.json` to manage blog cards.
- Place new assets in `public/images/` and reference them with paths such as `/images/my-photo.jpg`.

## Deployment

The project is ready for providers that support Next.js, including Vercel. Set `NEXT_PUBLIC_SITE_URL` to the final production URL so canonical social metadata, the sitemap, and robots file use the correct domain.

## Future membership

The current join form is intentionally UI-only. To add membership later:

1. Connect the form to an email service or API route.
2. Add an authentication provider.
3. Add a database only when member profiles or gated content are needed.
4. Add payment infrastructure after the membership model is defined.

No login, database, payment, or gated-content code is included yet.
