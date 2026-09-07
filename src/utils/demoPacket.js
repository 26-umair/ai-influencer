export const DEFAULT_DEMO_PACKET = {
  projectName: 'AI Influencer Studio',
  creatorName: 'Camila',
  niche: 'Wellness, fashion, and lifestyle',
  audience: 'Gen Z and young millennial lifestyle buyers',
  brandName: 'Sample Small Brand',
  productName: 'Everyday wellness product',
  campaignGoal: 'Create safe fictional creator content for a small brand campaign',
  tone: 'Warm, confident, polished, and brand-safe',
  campaignConcept: 'A reusable fictional creator presents everyday product moments through lifestyle visuals, simple hooks, and clear AI disclosure.',
  contentPillars: [
    'Lifestyle product discovery',
    'Creator-led visual storytelling',
    'Behind-the-scenes brand narrative',
    'Responsible AI disclosure',
  ],
  postIdeas: [
    {
      title: 'Launch teaser',
      channel: 'Instagram Reel / TikTok',
      hook: 'A quick creator-led reveal that introduces the product without claiming the creator is a real person.',
      caption: 'Meet a new way to explore everyday style and wellness through fictional AI creator content. AI-generated campaign asset.',
    },
    {
      title: 'Product moment',
      channel: 'Instagram carousel',
      hook: 'Show the product in a polished lifestyle setting with consistent fictional creator identity.',
      caption: 'Small brand, big visual story. A campaign-ready product moment built with a fictional virtual creator.',
    },
    {
      title: 'Brand story',
      channel: 'LinkedIn / Instagram caption',
      hook: 'Explain how the brand can prototype creator content before investing in full production.',
      caption: 'AI Influencer Studio helps teams test campaign visuals safely with fictional creators and human-reviewed assets.',
    },
  ],
  safetyChecklist: [
    'Creator is fictional and not presented as a real human.',
    'Creator age is 18+ for demo and campaign use.',
    'No real-person impersonation or celebrity likeness is used.',
    'Reference assets should be owned, licensed, or permissioned.',
    'Final public assets should disclose AI-generated content where appropriate.',
    'Human review is required before publishing brand claims.',
  ],
  assets: [
    '/demo/creators/camila/main.jpg',
    '/demo/creators/camila/photos/p1.png',
    '/demo/creators/camila/photos/p4.png',
    '/demo/creators/camila/photos/p8.png',
    '/demo/creators/camila/brand_deals/swatch_original.png',
    '/demo/creators/camila/brand_deals/swatch_sheet.png',
  ],
}

export function slugifyFileName(value) {
  return String(value || 'demo-packet')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'demo-packet'
}

export function buildDemoPacketMarkdown(packet = DEFAULT_DEMO_PACKET) {
  const data = { ...DEFAULT_DEMO_PACKET, ...packet }
  const contentPillars = Array.isArray(data.contentPillars) ? data.contentPillars : []
  const postIdeas = Array.isArray(data.postIdeas) ? data.postIdeas : []
  const safetyChecklist = Array.isArray(data.safetyChecklist) ? data.safetyChecklist : []
  const assets = Array.isArray(data.assets) ? data.assets : []

  return `# ${data.projectName} — Demo Packet

## Campaign Summary

**Brand:** ${data.brandName}
**Product / Offer:** ${data.productName}
**Creator:** ${data.creatorName}
**Niche:** ${data.niche}
**Audience:** ${data.audience}
**Goal:** ${data.campaignGoal}
**Tone:** ${data.tone}

## Campaign Concept

${data.campaignConcept}

## Content Pillars

${contentPillars.map(item => `- ${item}`).join('\n')}

## Sample Post Plan

${postIdeas.map((post, index) => `### ${index + 1}. ${post.title}

- **Channel:** ${post.channel}
- **Hook:** ${post.hook}
- **Caption:** ${post.caption}`).join('\n\n')}

## Demo Assets

${assets.map(asset => `- ${asset}`).join('\n')}

## Responsible AI Checklist

${safetyChecklist.map(item => `- [x] ${item}`).join('\n')}

## Review Notes

This packet is prepared for a judge/demo walkthrough. It describes a fictional virtual creator workflow and should not be used to imply a real-person endorsement. All public campaign use should include appropriate AI disclosure and human review.
`
}

export function downloadTextFile(filename, content, mimeType = 'text/markdown;charset=utf-8') {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.setTimeout(() => URL.revokeObjectURL(url), 1000)
}
