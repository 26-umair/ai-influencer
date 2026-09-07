# Hackathon Submission Plan

This document tracks the work needed to turn AI Influencer Studio into a clean Alibaba Cloud AI Hackathon Pakistan 2026 submission.

## One-line Pitch

AI Influencer Studio helps small brands and creators build fictional virtual influencers, generate campaign-ready visuals, plan campaign content, and manage synthetic creator assets safely from one simple workspace.

## Target Users

- Student founders who need affordable marketing visuals.
- Small businesses that cannot hire models, photographers, and creative agencies for every campaign.
- Content creators who want reusable fictional personas for storytelling and branded content.
- Agencies that want fast visual prototypes before full production.

## Demo Story

1. A small brand wants campaign visuals but has limited budget.
2. The user creates a fictional AI influencer by entering basic identity, niche, story, and visual style.
3. The app generates multiple candidate looks.
4. The user selects one look and opens the influencer dashboard.
5. The user generates lifestyle campaign photos in Photo Studio.
6. The user opens Campaign Planner to turn the creator into campaign positioning, content pillars, and sample posts.
7. The user creates a brand deal asset or campaign concept.
8. The user exports a Markdown demo packet with campaign summary, sample post plan, demo asset paths, and responsible AI checklist.
9. The final output becomes a reusable creator profile and a campaign asset kit.

## What Already Works

- React/Vite app shell and routing.
- Guided influencer creation flow.
- LocalStorage-backed creator data.
- Influencer dashboard.
- Photo Studio workflow.
- Brand Deals workspace.
- Judge-friendly `/demo` route.
- Campaign Planner `/campaign-planner` route.
- Markdown demo packet export.
- Responsible AI `/responsible-ai` route.
- Professional generation loading messages.
- Clean demo asset structure under `public/demo`.
- GitHub Actions production build check.
- Higgsfield OAuth and generation proxy layer.
- Serverless API routes for generation, image proxy, Claude proxy, search, and rate limiting.
- Vercel-ready deployment setup.

## Current Technology Disclosure

The current repository includes React, Vite, React Router, browser localStorage, Higgsfield generation/auth utilities, Vercel serverless API routes, GitHub Actions build checks, and local browser-based Markdown export for demo packets.

The project does **not** currently claim a working Alibaba Cloud, Qoder, or Qwen product integration. Those should only be added to the submission story after they are actually used or integrated in the codebase.

## Submission Gaps

### Must Fix Before Final Submission

- Create and verify the live Vercel deployment.
- Make the repository public or grant judge access according to the organizers' submission rules.
- Record the actual demo video from the deployed app.
- Capture actual screenshots/GIF from the deployed app.

### Already Improved in PR #1

- Rewrote README and setup documentation for the hackathon submission.
- Removed unrelated/legacy attribution references and old setup material.
- Removed tracked `.agents`, `CLAUDE.md`, `skills-lock.json`, and legacy Seedance guide content.
- Removed the old Higgsfield referral URL and helper copy.
- Organized public demo media under `public/demo/creators`, `public/demo/gallery`, and `public/demo/campaigns`.
- Added judge-friendly demo mode that does not require personal API keys.
- Added in-app responsible AI disclosure and fictional-only messaging.
- Added Campaign Planner for brand strategy, content pillars, sample posts, and safety checklist.
- Added downloadable Markdown demo packet export from the demo and planner flows.
- Replaced casual loading copy with professional product copy.
- Added GitHub Actions production build check.
- Added final pitch script, demo video storyboard, screenshot/GIF guide, and final submission checklist.
- Removed unimplemented Alibaba Cloud/Qwen claims from current-feature documentation.

### Nice to Have

- Native PDF or ZIP export for demo kit.
- Brand safety scoring.
- Sample personas for Pakistan-focused business categories.
- Qoder, Alibaba Cloud, or Qwen integration only if the team actually uses or implements it.

## Phase 4 Materials Prepared

The repo now contains the final submission support documents:

- `docs/PITCH_SCRIPT.md` — 5–7 minute pitch script.
- `docs/DEMO_VIDEO_STORYBOARD.md` — short demo video shot-by-shot plan.
- `docs/SCREENSHOTS_AND_GIF_FLOW.md` — required screenshot list and optional GIF flow.
- `docs/FINAL_SUBMISSION_CHECKLIST.md` — operator checklist before portal submission.

## Honest Hackathon Positioning

AI Influencer Studio should be presented as a working prototype for safe fictional virtual creators. The honest current story is:

- The product workflow exists.
- The demo route exists.
- Campaign planning exists as a local, no-key workflow.
- Demo packet export exists as a Markdown browser download.
- Responsible AI rules are visible.
- Production build passes.
- External generation/account setup is still required for live generation outside demo mode.
- Alibaba Cloud, Qoder, or Qwen should not be claimed as implemented unless added later.

## Suggested Final Submission Name

**AI Influencer Studio — Safe Virtual Creator Platform**

## Suggested Focus Area

**Open Innovation**

## Submission Description Draft

AI Influencer Studio is a safe virtual creator platform for small brands, student founders, and content teams. It helps users design fictional AI influencers, generate campaign-ready visuals, plan campaign content, and organize creator assets without hiring a full production team. The product focuses on affordability, repeatable brand identity, and responsible synthetic media use. The current prototype includes the creator workflow, dashboard, photo studio, brand workspace, campaign planner, demo packet export, demo route, responsible AI page, clean demo asset structure, and production build checks.

## Final Checklist

- [x] README is clean and hackathon-focused.
- [x] Setup guide is clean and repository-specific.
- [x] Landing page has no unrelated attribution.
- [x] Demo mode works without requiring judge-owned API keys.
- [x] Campaign Planner is available inside the app.
- [x] Export Demo Packet is available as a downloadable Markdown packet.
- [x] Responsible AI rules are visible inside the app.
- [x] Build passes with `npm run build` through GitHub Actions.
- [x] Current documentation avoids claiming unimplemented Alibaba Cloud/Qoder/Qwen features.
- [x] Phase 1 repo cleanup is complete.
- [x] Phase 2 hackathon product polish is complete.
- [x] Pitch script is prepared in `docs/PITCH_SCRIPT.md`.
- [x] Demo video storyboard is prepared in `docs/DEMO_VIDEO_STORYBOARD.md`.
- [x] Screenshot/GIF shot list is prepared in `docs/SCREENSHOTS_AND_GIF_FLOW.md`.
- [x] Final submission checklist is prepared in `docs/FINAL_SUBMISSION_CHECKLIST.md`.
- [ ] Vercel deployment is live and verified.
- [ ] Actual demo video is recorded from the live deployment.
- [ ] Actual screenshots/GIF are captured from the live deployment.
- [ ] GitHub repository access is ready for judges.
