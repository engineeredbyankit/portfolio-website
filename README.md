# Ankit Kumar Choudhary — Portfolio Website

The website for my freelance work in LLM coding-agent evaluation: what I do for AI teams, results so far, experience and how to reach me. Built with **Next.js**, **Tailwind CSS** and **TypeScript**, exported as a static site and hosted on GitHub Pages.

**Live site:** [https://engineeredbyankit.in/](https://engineeredbyankit.in/)

---

## Features

- **Client-first single page:** a hero with the main offer and contact buttons, then services, a results sheet, experience, skills and background, and a contact panel. A sticky nav highlights the section you are in.
- **Test rig in the hero:** a small panel that shows the three checks every task passes (starting code fails, reference fix passes, a plausible wrong fix fails). It lights up once on load with CSS only and stays still when reduced motion is on.
- **Brown and honey theme, light and dark:** Material You style, with tonal cards, pill buttons and Google Sans Flex. The toggle follows the system setting by default.
- **Responsive:** a horizontally scrolling section bar on phones and tablets, inline links on desktop.
- **Resume download:** the current resume PDF is linked from the header, the hero and the contact panel.
- **Link previews and SEO:** Open Graph and Twitter card image, canonical URL and Person structured data.
- **Accessible:** semantic headings, skip link, visible focus, AA contrast in both themes.
- **Static export:** `next build` writes a fully static site to `dist/`.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) 16 (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Theme | next-themes (class based, light and dark) |
| Icons | Lucide React + custom SVG icons |
| Fonts | Google Sans Flex and JetBrains Mono (via `next/font`) |
| Hosting | GitHub Pages (via GitHub Actions) |

---

## Project Structure

```
portfolio-website/
├── app/                    # Layout, page, global styles, favicon
│   ├── globals.css         # Colour tokens for both themes, buttons, chips, rig animation
│   ├── layout.tsx          # Fonts, metadata, theme provider
│   └── page.tsx            # Page and Person structured data
├── components/
│   ├── icons.tsx           # Custom SVG icons (LinkedIn, GitHub, Spotify, Instagram)
│   ├── portfolio.tsx       # Page shell: header, sections, footer
│   ├── site-header.tsx     # Sticky header with section nav, theme toggle and resume button
│   ├── test-rig.tsx        # The hero's "how every task is checked" panel
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   ├── sections/           # Hero, Services, Results, Experience, Skills, Hobbies, Contact
│   └── ui/section.tsx      # Shared section heading
├── lib/
│   └── content.ts          # All the text on the site
├── public/
│   ├── Ankit_Kumar_Choudhary_Resume.pdf
│   ├── headshot.webp
│   ├── og.png              # Link preview image
│   └── .nojekyll
├── .github/workflows/
│   └── deploy.yml          # Lint, build and deploy to GitHub Pages
├── next.config.ts
├── package.json
└── postcss.config.mjs
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm (comes with Node.js)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will hot-reload as you edit files.

### Build for production

```bash
npm run build
```

The static site is exported to the `dist/` directory. This directory is intentionally ignored by Git; the CI/CD workflow rebuilds it on every push.

---

## Deployment

This project is configured to deploy automatically to **GitHub Pages** using a GitHub Actions workflow.

### 1. Push the repository to GitHub

If you haven't already:

```bash
git remote add origin https://github.com/engineeredbyankit/portfolio-website.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to the repository on GitHub.
2. Navigate to **Settings → Pages**.
3. Under **Build and deployment**, select **Source: GitHub Actions**.

### 3. Run the workflow

The workflow `.github/workflows/deploy.yml` triggers on every push to `main` or `master`. It:

1. Checks out the code.
2. Installs dependencies with `npm ci`.
3. Reads the GitHub Pages settings and runs `npm run build` with the matching `basePath` (none on the custom domain, `/portfolio-website` on github.io).
4. Uploads the `dist/` folder to GitHub Pages.

You can also trigger it manually from the **Actions** tab by clicking **Run workflow**.

### 4. Visit the live site

Once the workflow completes, the site is available at:

```
https://engineeredbyankit.in/
```

> The base path comes from the GitHub Pages settings, so a different repository name or a custom domain needs no code change.

---

## Customisation

- **Content:** edit `lib/content.ts` to update the services, results, experience, skills, education, hobbies and links.
- **Headshot:** replace `public/headshot.webp`.
- **Resume:** replace `public/Ankit_Kumar_Choudhary_Resume.pdf`.
- **Colours:** the light and dark tokens are at the top of `app/globals.css`.
- **Link preview:** replace `public/og.png` (1200 × 630).

---

## License

This project is personal and open for reference. Feel free to fork and adapt it for your own portfolio.
