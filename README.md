# Yance Lean — Portfolio

A responsive personal portfolio for Arduino and web development, IoT projects, and photojournalism.

## Requirements

- Node.js 20.19 or newer
- npm

## Run locally

```sh
npm install
npm run dev
```

Vite prints the local development URL after startup.

## Available scripts

- `npm run dev` — start the development server
- `npm run build` — create the production site in `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — check JavaScript with ESLint

## Deploy to Vercel

Import the repository into Vercel. The included `vercel.json` configures the Vite build and `dist/` output directory.

## Portfolio images

Place these image files in the project root to show the intended portfolio imagery:

- `angas.jpg` — featured hero image
- `pastoral.jpg` — about portrait
- `winning1.jpg` and `winning2.jpg` — photojournalism gallery

When an image is unavailable, the page displays a styled placeholder instead.

## External services

Tailwind CSS is compiled into the production build. Lucide icons, AOS animations, particles.js, Google Fonts, and EmailJS are loaded from their respective CDNs. The contact form uses the EmailJS service and template configured in `script.js`.
