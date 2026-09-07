# Hackathon Submission Plan

This document tracks the work needed to turn AI Influencer Studio into a clean Alibaba Cloud AI Hackathon Pakistan 2026 submission.

## One-line Pitch

AI Influencer Studio helps small brands and creators build fictional virtual influencers, generate campaign-ready visuals, and manage synthetic creator assets safely from one simple workspace.

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
6. The user creates a brand deal asset or campaign concept.
7. The final output becomes a reusable creator profile and a campaign asset kit.

## What Already Works

- React/Vite app shell and routing.
- Guided influencer creation flow.
- LocalStorage-backed creator data.
- Influencer dashboard.
- Photo Studio workflow.
- Brand Deals workspace.
- Judge-friendly `/demo` route.
- Responsible AI `/responsible-ai` route.
- Professional generation loading messages.
- GitHub Actions production build check.
- Higgsfield OAuth and generation proxy layer.
- Serverless API routes for generation, image proxy, Claude proxy, search, and rate limiting.
- Vercel-ready deployment setup.

## Current Technology Disclosure

The current repository includes React, Vite, React Router, browser localStorage, Higgsfield generation/auth utilities, Vercel serverless API routes, and GitHub Actions build checks.

The project does **not** currently claim a working Alibaba Cloud, Qoder, or Qwen product integration. Those should only be added to the submission story after they are actually used or integrated in the codebase.

## Submission Gaps

### Must Fix Before Final Submission

- Remove or reorganize unused starter assets and hardcoded legacy demo media.
- Prepare live deployment link and demo walkthrough.
- Verify the deployed app after merging.
- Make the repository accessible according to the organizers' submission rules.

### Already Improved in PR #1

- Added judge-friendly demo mode that does not require personal API keys.
- Added in-app responsible AI disclosure and fictional-only messaging.
- Replaced casual loading copy with professional product copy.
- Added GitHub Actions production build check.
- Removed unimplemented Alibaba Cloud/Qwen claims from current-feature documentation.

### Nice to Have

- Campaign brief generator.
- Urdu/English campaign copy generator.
- Exportable PDF/ZIP demo kit.
- Brand safety scoring.
- Sample personas for Pakistan-focused business categories.
- Qoder, Alibaba Cloud, or Qwen integration only if the team actually uses or implements it.

## Honest Hackathon Positioning

AI Influencer Studio should be presented as a working prototype for safe fictional virtual creators. The honest current story is:

- The product workflow exists.
- The demo route exists.
- Responsible AI rules are visible.
- Production build passes.
- External generation/account setup is still required for live generation outside demo mode.
- Alibaba Cloud, Qoder, or Qwen should not be claimed as implemented unless added later.

## Suggested Final Submission Name

**AI Influencer Studio — Safe Virtual Creator Platform**

## Suggested Focus Area

**Open Innovation**

## Submission Description Draft

AI Influencer Studio is a safe virtual creator platform for small brands, student founders, and content teams. It helps users design fictional AI influencers, generate campaign-ready visuals, and organize creator assets without hiring a full production team. The product focuses on affordability, repeatable brand identity, and responsible synthetic media use. The current prototype includes the creator workflow, dashboard, photo studio, brand workspace, demo route, responsible AI page, and production build checks.

## Final Checklist

- [x] README is clean and hackathon-focused.
- [x] Landing page has no unrelated attribution.
- [x] Demo mode works without requiring judge-owned API keys.
- [x] Responsible AI rules are visible inside the app.
- [x] Build passes with `npm run build` through GitHub Actions.
- [x] Current documentation avoids claiming unimplemented Alibaba Cloud/Qoder/Qwen features.
- [ ] Vercel deployment is live and verified.
- [ ] Demo video recorded.
- [ ] Pitch script prepared.
- [ ] GitHub repository access is ready for judges.
