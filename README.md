# AI Influencer Studio

AI Influencer Studio is a web application for creating and managing fictional virtual influencers for brand campaigns, social content, and visual storytelling.

The project is being prepared for **Alibaba Cloud AI Hackathon Pakistan 2026** as a safe virtual creator platform: users define a fictional creator, build a consistent identity, generate campaign-ready visuals, and organize content assets in one local-first workspace.

## Problem

Small brands, student founders, and creators often need polished campaign visuals, creator-style content, and consistent social media assets, but hiring models, photographers, studios, and agencies is expensive and slow.

AI Influencer Studio solves this by helping users create a fictional brand-safe virtual creator that can be reused across campaigns while keeping the workflow simple enough for non-technical users.

## Core Features

- **Fictional influencer creation** — guided setup for name, gender, age, niche, story, personality, physical appearance, and aesthetic direction.
- **Reference-based generation** — optional face and style references to guide the output while preserving the fictional creator concept.
- **Multi-model image generation** — supports generation engines such as Higgsfield Soul, GPT Image, and Nano Banana models through the existing generation layer.
- **Influencer management dashboard** — save, view, edit, regenerate, replace, and download creator assets.
- **Photo Studio** — generate lifestyle photos by selecting location, pose, time of day, outfit, props, and aspect ratio.
- **Brand Deals workspace** — organize campaign products and generate product-focused character sheets.
- **Judge Demo Mode** — `/demo` gives reviewers a no-login, no-API-key walkthrough of the product story, sample persona, campaign output, and safety guardrails.
- **Responsible AI page** — `/responsible-ai` explains fictional-only use, consent, disclosure, prohibited uses, and human review.
- **Clean demo asset structure** — public demo media is grouped under `public/demo/creators`, `public/demo/gallery`, and `public/demo/campaigns`.
- **Automated build check** — GitHub Actions runs `npm ci` and `npm run build` on pull requests and pushes.
- **Local-first data storage** — project data is stored in the user's browser through localStorage, so the prototype is lightweight and quick to demo.
- **Vercel-ready deployment** — React + Vite frontend with serverless API routes for generation proxies and supporting services.

## Safety and Responsible Use

This project is designed for **fictional virtual creators**, not impersonation.

Recommended safety rules for usage and judging demos:

- Do not use the app to impersonate real people without consent.
- Do not create minors or sexualized underage characters.
- Label generated creators and campaign assets as AI-generated where appropriate.
- Avoid misleading political, medical, financial, or identity-based claims.
- Use brand-safe fictional personas for marketing, storytelling, and prototyping.

## Judge Demo Mode

A dedicated judge-friendly demo is available at:

```txt
/demo
```

This route is designed for hackathon review. It does not require Higgsfield, Claude, or private API keys. It uses existing demo assets to explain:

- the fictional creator workflow,
- the brand campaign use case,
- the safety and disclosure rules,
- and the expected campaign output package.

## Responsible AI Disclosure

A dedicated safety page is available at:

```txt
/responsible-ai
```

This route explains the project's safe-use position: fictional-first creator design, consent-based references, clear AI disclosure, prohibited use cases, and human review before publishing.

## Hackathon Fit

This repository is being prepared as a hackathon submission candidate. The current implemented prototype includes the virtual creator workflow, image generation flow, local data layer, deployment-ready structure, judge demo route, responsible AI disclosure route, cleaned demo asset structure, and automated build check.

This README only claims technologies and features that are already present in the repository. Alibaba Cloud, Qoder, and Qwen are not listed as implemented product dependencies unless they are actually integrated in a later commit.

## Tech Stack

- **Frontend:** React 18, Vite, React Router
- **State/Data:** Browser localStorage with React context providers
- **Generation Layer:** Higgsfield MCP/OAuth integration, OpenAI-compatible image model option, Nano Banana model options
- **Serverless API:** Vercel functions for Higgsfield proxy, Claude proxy, image proxy, search proxy, and rate limiting
- **CI:** GitHub Actions build workflow
- **Deployment:** Vercel-ready configuration

## Project Structure

```txt
.github/workflows/
  build.yml               Automated production build check
src/
  App.jsx                 App shell, routes, analytics
  main.jsx                React entry point
  store.jsx               localStorage-backed shared state
  pages/
    Landing.jsx           Homepage
    Demo.jsx              Judge-friendly no-key demo route
    ResponsibleAI.jsx     Responsible AI disclosure route
    Create.jsx            Guided influencer creation flow
    Influencers.jsx       Influencer dashboard and asset management
    PhotoStudio.jsx       Lifestyle image generation workflow
    BrandDeals.jsx        Brand campaign/product workspace
    Inspiration.jsx       Inspiration boards
    Settings.jsx          Higgsfield and Claude settings
    AuthCallback.jsx      OAuth callback handler
  components/             Reusable UI components
  context/                Theme provider
  utils/                  Prompt builders, generation APIs, auth, image helpers
api/                       Serverless API functions
lib/                       Shared server utilities
docs/                      Technical and submission references
public/
  demo/                   Organized sample media for judge demo and seeded prototype data
```

## Local Development

Requirements:

- Node.js 18+
- npm

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Automated Build Check

GitHub Actions runs the production build automatically on pull requests and pushes to `main` or `submission-ready-polish`.

The workflow is located at:

```txt
.github/workflows/build.yml
```

It installs dependencies with `npm ci` and verifies the app with `npm run build`.

## Deployment

The project is Vercel-ready. Connect this repository to Vercel and deploy. Vercel will detect the Vite frontend and the `api/` serverless functions automatically.

For full generation functionality, connect the required external generation accounts in the app settings. For hackathon demos, use `/demo` so judges can review the product story without entering personal API keys.

## Submission Roadmap

Before final submission:

- [x] Add judge-friendly demo mode.
- [x] Add a responsible AI disclosure section inside the app UI.
- [x] Add automated production build check.
- [x] Remove unimplemented Alibaba Cloud/Qwen claims from current-feature documentation.
- [x] Complete Phase 1 repo cleanup: remove old agent files, clean setup docs, remove legacy attribution/referral markers, and organize demo media.
- [ ] Add Qoder, Alibaba Cloud, or Qwen only after actually using or integrating them.
- [ ] Prepare live deployment link, demo video, screenshots, and pitch script.

## Team

Built by Muhammad Umair and team for Alibaba Cloud AI Hackathon Pakistan 2026.
