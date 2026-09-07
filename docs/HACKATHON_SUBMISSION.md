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
- Higgsfield OAuth and generation proxy layer.
- Serverless API routes for generation, image proxy, Claude proxy, search, and rate limiting.
- Vercel-ready deployment setup.

## Submission Gaps

### Must Fix Before Final Submission

- Add a judge-friendly demo mode that does not require personal API keys.
- Add in-app responsible AI disclosure and fictional-only messaging.
- Remove or reorganize unused starter assets and hardcoded legacy demo media.
- Replace casual loading copy with professional product copy.
- Add a clear Alibaba Cloud/Qwen integration story or working integration.
- Prepare live deployment link and demo walkthrough.

### Nice to Have

- Campaign brief generator.
- Urdu/English campaign copy generator.
- Exportable PDF/ZIP demo kit.
- Brand safety scoring.
- Sample personas for Pakistan-focused business categories.

## Alibaba Cloud / Qwen Alignment

The current prototype can be extended with Alibaba Cloud services in these areas:

- **Qwen for persona strategy:** Generate a coherent fictional identity, content pillars, tone, and audience profile.
- **Qwen for campaign copy:** Create captions, hooks, short scripts, and product launch ideas in English and Urdu/Roman Urdu.
- **Qwen for safety review:** Check whether a persona or campaign prompt is unsafe, misleading, or too close to real-person impersonation.
- **Alibaba Cloud Object Storage:** Store generated assets beyond local browser storage.
- **Alibaba Cloud deployment:** Host production backend and media infrastructure.

## Suggested Final Submission Name

**AI Influencer Studio — Safe Virtual Creator Platform**

## Suggested Focus Area

**Open Innovation**

## Submission Description Draft

AI Influencer Studio is a safe virtual creator platform for small brands, student founders, and content teams. It helps users design fictional AI influencers, generate campaign-ready visuals, and organize creator assets without hiring a full production team. The product focuses on affordability, repeatable brand identity, and responsible synthetic media use. For the Alibaba Cloud AI Hackathon, the project can integrate Qwen for persona strategy, multilingual campaign copy, and brand safety checks, while Alibaba Cloud infrastructure can support scalable deployment and media storage.

## Final Checklist

- [ ] README is clean and hackathon-focused.
- [ ] Landing page has no unrelated attribution.
- [ ] Demo mode works without requiring judge-owned API keys.
- [ ] Responsible AI rules are visible inside the app.
- [ ] Build passes with `npm run build`.
- [ ] Vercel deployment is live.
- [ ] Demo video recorded.
- [ ] Pitch script prepared.
- [ ] GitHub repository access is ready for judges.
