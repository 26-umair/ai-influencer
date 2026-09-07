# AI Influencer Studio

AI Influencer Studio is a web application for creating and managing fictional virtual influencers for brand campaigns, social content, and visual storytelling.

The project is being prepared for **Alibaba Cloud AI Hackathon Pakistan 2026** as a safe virtual creator platform: users define a fictional creator, build a consistent identity, generate campaign-ready visuals, plan campaign content, and export demo-ready campaign material from one local-first workspace.

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
- **Campaign Planner** — `/campaign-planner` turns a creator, brand, product, audience, tone, and channel brief into campaign positioning, content pillars, post ideas, and a responsible AI checklist without external API keys.
- **Export Demo Packet** — judges and teammates can download a Markdown demo packet containing campaign summary, concept, sample posts, asset paths, and responsible AI checklist.
- **Judge Demo Mode** — `/demo` gives reviewers a no-login, no-API-key walkthrough of the product story, sample persona, campaign output, safety guardrails, and demo packet export.
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
- the campaign planner,
- and the expected campaign output package.

## Campaign Planner and Demo Packet

A dedicated planner is available at:

```txt
/campaign-planner
```

The planner is intentionally local-first and does not claim external model integration. It helps judges see the product as more than an avatar generator by showing a complete brand workflow:

- campaign brief input,
- campaign positioning,
- content pillars,
- sample post plan,
- responsible AI checklist,
- and downloadable Markdown demo packet.

## Responsible AI Disclosure

A dedicated safety page is available at:

```txt
/responsible-ai
```

This route explains the project's safe-use position: fictional-first creator design, consent-based references, clear AI disclosure, prohibited use cases, and human review before publishing.

## Hackathon Fit

This repository is being prepared as a hackathon submission candidate. The current implemented prototype includes the virtual creator workflow, image generation flow, local data layer, deployment-ready structure, judge demo route, campaign planner, demo packet export, responsible AI disclosure route, cleaned demo asset structure, and automated build check.

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
    CampaignPlanner.jsx   Local campaign planner and demo packet export
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
  utils/                  Prompt builders, generation APIs, auth, image helpers, demo packet export utility
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

## Final Submission Materials

Supporting materials are included in `docs/`:

```txt
docs/HACKATHON_SUBMISSION.md
docs/FINAL_SUBMISSION_CHECKLIST.md
docs/PITCH_SCRIPT.md
docs/DEMO_VIDEO_STORYBOARD.md
docs/SCREENSHOTS_AND_GIF_FLOW.md
```

These documents prepare the pitch, demo recording plan, screenshot/GIF list, and final operator checklist. Actual screenshots and the demo video should be captured from the live deployment after it is created.

## Submission Roadmap

Before final submission:

- [x] Add judge-friendly demo mode.
- [x] Add a responsible AI disclosure section inside the app UI.
- [x] Add campaign planner for brand strategy and sample post planning.
- [x] Add downloadable Markdown demo packet export.
- [x] Add automated production build check.
- [x] Remove unimplemented Alibaba Cloud/Qwen claims from current-feature documentation.
- [x] Complete Phase 1 repo cleanup: remove old agent files, clean setup docs, remove legacy attribution/referral markers, and organize demo media.
- [x] Complete Phase 2 hackathon product polish: demo mode, landing polish, safety page, campaign planner, export demo packet, and professional loading copy.
- [x] Prepare pitch script, demo video storyboard, screenshot/GIF guide, and final submission checklist.
- [ ] Add Qoder, Alibaba Cloud, or Qwen only after actually using or integrating them.
- [ ] Create and verify live deployment.
- [ ] Record actual demo video and screenshots from the live deployment.

## Team

Built by Muhammad Umair and team for Alibaba Cloud AI Hackathon Pakistan 2026.