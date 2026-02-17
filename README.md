# Alex Chen Portfolio

A modern, responsive developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, and `next-themes`.

This project is a single-page portfolio experience with smooth section navigation, animated UI, project showcase cards, skill categories, and a contact section.

## Table of Contents

- Overview
- Features
- Tech Stack
- Project Structure
- Getting Started
- Configuration and Customization
- Theming
- Deployment
- Current Limitations

## Overview

The app renders a personal portfolio with these sections:

- Hero (`#hero`)
- Projects (`#projects`)
- Skills (`#skills`)
- Contact (`#contact`)

The layout is composed in `src/app/page.tsx`, while site-wide metadata, fonts, and theme provider are configured in `src/app/layout.tsx`.

## Features

- Responsive, animated landing page with section-based navigation
- Active section tracking in the navbar while scrolling
- Mobile menu with animated open/close behavior
- Light and dark mode support via `next-themes`
- Reusable section wrapper with scroll-triggered reveal animations
- Data-driven content managed from one file (`src/lib/data.ts`)
- Project cards with gradient previews, tech tags, and external links
- Contact form UI with optimistic/simulated submission states

## Tech Stack

- Framework: Next.js 16 (App Router)
- Language: TypeScript + React 19
- Styling: Tailwind CSS v4 + CSS custom properties
- Animation: Framer Motion
- Icons: Lucide React
- Theme switching: `next-themes`
- Linting: ESLint (Next.js config)

## Project Structure

```text
.
|- src/
|  |- app/
|  |  |- globals.css
|  |  |- layout.tsx
|  |  `- page.tsx
|  |- components/
|  |  |- Contact.tsx
|  |  |- Footer.tsx
|  |  |- Hero.tsx
|  |  |- Navbar.tsx
|  |  |- ProjectCard.tsx
|  |  |- Projects.tsx
|  |  |- SectionWrapper.tsx
|  |  |- Skills.tsx
|  |  |- ThemeProvider.tsx
|  |  `- ThemeToggle.tsx
|  `- lib/
|     `- data.ts
|- public/
|- package.json
`- README.md
```

## Getting Started

### Prerequisites

- Node.js 20+ recommended
- npm (or yarn/pnpm/bun)

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000`.

### Build and Start Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Configuration and Customization

Most content is centralized in `src/lib/data.ts`.

- `personalInfo`: name, title, bio, email, location
- `projects`: portfolio cards (title, description, tags, links)
- `skillCategories`: grouped skills shown in the skills section
- `socialLinks`: social/contact icons in the contact card
- `navLinks`: section links used by navbar and active-state logic

To personalize the portfolio quickly:

1. Replace placeholder personal details in `personalInfo`.
2. Replace sample project entries and links in `projects`.
3. Update skill groups and proficiency data in `skillCategories`.
4. Update social profiles in `socialLinks`.

## Theming

Theme tokens are defined in `src/app/globals.css` using CSS variables:

- Light theme under `:root`
- Dark theme under `.dark`
- Token bridge via `@theme inline` for Tailwind usage

You can adjust brand color and atmosphere by updating variables such as:

- `--accent`
- `--gradient-from`
- `--gradient-to`
- `--background`
- `--card`

Theme switching is handled by:

- `src/components/ThemeProvider.tsx`
- `src/components/ThemeToggle.tsx`

## Deployment

This app can be deployed to any platform supporting Next.js:

- Vercel (recommended)
- Netlify
- Railway
- Self-hosted Node runtime

Typical production flow:

1. Set install command: `npm install`
2. Set build command: `npm run build`
3. Set start command: `npm run start`

## Current Limitations

- The contact form currently simulates submission in the client and does not send data to a backend service.
- Project cards use gradient placeholders instead of real project thumbnails.
- Some sample links/data in `src/lib/data.ts` are placeholders and should be replaced before production use.

---

If you want, I can also generate a second README variant focused on recruiters (shorter, with highlights first) and keep this one as a full developer reference.
