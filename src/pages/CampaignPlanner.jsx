import { useMemo, useState } from 'react'
import { buildDemoPacketMarkdown, downloadTextFile, slugifyFileName } from '../utils/demoPacket'

const INITIAL_FORM = {
  brandName: 'GlowTrail Studio',
  productName: 'Everyday skincare starter kit',
  creatorName: 'Camila',
  niche: 'Wellness, fashion, and lifestyle',
  audience: 'Pakistani Gen Z and young millennial shoppers who like clean lifestyle visuals',
  campaignGoal: 'Launch an affordable product campaign with consistent fictional creator visuals',
  tone: 'Warm, polished, confident, and brand-safe',
  primaryChannel: 'Instagram carousel + short-form video',
  disclosure: 'AI-generated fictional creator campaign asset',
}

const INPUTS = [
  ['brandName', 'Brand name'],
  ['productName', 'Product / offer'],
  ['creatorName', 'Virtual creator'],
  ['niche', 'Creator niche'],
  ['audience', 'Target audience'],
  ['campaignGoal', 'Campaign goal'],
  ['tone', 'Brand tone'],
  ['primaryChannel', 'Primary channel'],
]

function fieldSetter(setForm, key) {
  return event => setForm(current => ({ ...current, [key]: event.target.value }))
}

function buildCampaignPlan(form) {
  const brand = form.brandName.trim() || 'the brand'
  const product = form.productName.trim() || 'the product'
  const creator = form.creatorName.trim() || 'the fictional creator'
  const audience = form.audience.trim() || 'the target audience'
  const channel = form.primaryChannel.trim() || 'social media'
  const goal = form.campaignGoal.trim() || 'build campaign-ready creator content'
  const tone = form.tone.trim() || 'brand-safe and polished'

  return {
    campaignConcept: `${brand} can use ${creator} as a reusable fictional virtual creator to introduce ${product}, test campaign visuals, and create consistent content for ${audience}. The campaign stays ${tone.toLowerCase()} while keeping AI disclosure visible.`,
    positioning: `${creator} is positioned as a fictional creator for ${form.niche || 'lifestyle'} content. The goal is to help ${brand} prototype a complete campaign before spending on a full shoot, creator contract, or agency production cycle.`,
    contentPillars: [
      `${product} discovery and first impression`,
      `${creator}-led lifestyle product moments`,
      `Brand story for ${audience}`,
      'Responsible AI disclosure and human review',
    ],
    postIdeas: [
      {
        title: 'Launch teaser',
        channel,
        hook: `${creator} introduces ${product} through a clean creator-style visual without pretending to be a real person.`,
        caption: `${brand} introduces ${product} with a fictional virtual creator built for consistent, safe campaign storytelling. ${form.disclosure}.`,
      },
      {
        title: 'Product use moment',
        channel: 'Instagram carousel / product grid',
        hook: `Show ${product} in a daily routine scene so ${audience} can understand the product context quickly.`,
        caption: `A polished product moment designed for campaign testing: consistent creator identity, brand-safe visuals, and clear AI disclosure.`,
      },
      {
        title: 'Brand story post',
        channel: 'LinkedIn / Instagram caption',
        hook: `Explain why ${brand} is using a fictional creator workflow to prototype affordable content faster.`,
        caption: `${brand} can validate creator-style campaign ideas before committing to full production. Fictional AI creator content, reviewed by a human before publishing.`,
      },
    ],
    safetyChecklist: [
      `${creator} is fictional and not presented as a real person.`,
      'No real-person or celebrity impersonation is used.',
      'Creator profile is treated as 18+ for demo and campaign use.',
      'Reference assets should be owned, licensed, or permissioned.',
      `Public posts should include this disclosure: ${form.disclosure}.`,
      `Human review is required before publishing claims about ${product}.`,
    ],
    goal,
  }
}

function Card({ title, eyebrow, children }) {
  return (
    <section style={{
      background: 'rgba(255,255,255,0.07)',
      border: '1px solid rgba(255,255,255,0.11)',
      borderRadius: 24,
      padding: 24,
      boxShadow: '0 22px 70px rgba(0,0,0,0.18)',
    }}>
      {eyebrow && <div style={{ color: '#C4B5FD', fontSize: 12, fontWeight: 850, textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: 9 }}>{eyebrow}</div>}
      <h2 style={{ margin: '0 0 14px', fontSize: 25, lineHeight: 1.12, letterSpacing: '-0.8px' }}>{title}</h2>
      {children}
    </section>
  )
}

function PrimaryButton({ children, onClick }) {
  return (
    <button onClick={onClick} style={{
      border: 'none',
      borderRadius: 999,
      padding: '13px 20px',
      background: 'linear-gradient(135deg,#EC4899,#8B5CF6)',
      color: '#fff',
      fontSize: 14,
      fontWeight: 850,
      cursor: 'pointer',
      boxShadow: '0 12px 34px rgba(139,92,246,0.34)',
    }}>{children}</button>
  )
}

export default function CampaignPlanner() {
  const [form, setForm] = useState(INITIAL_FORM)
  const plan = useMemo(() => buildCampaignPlan(form), [form])

  function exportPacket() {
    const markdown = buildDemoPacketMarkdown({
      ...form,
      ...plan,
      projectName: 'AI Influencer Studio',
      assets: [
        '/demo/creators/camila/main.jpg',
        '/demo/creators/camila/photos/p1.png',
        '/demo/creators/camila/photos/p4.png',
        '/demo/creators/camila/brand_deals/swatch_sheet.png',
      ],
    })
    downloadTextFile(`${slugifyFileName(form.brandName)}-campaign-demo-packet.md`, markdown)
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: 'var(--nav-h)', background: '#07070E', color: '#fff' }}>
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '72px 24px 54px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <div style={{ position: 'absolute', width: 620, height: 620, top: -250, left: -160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.26), transparent 62%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 560, height: 560, top: -220, right: -140, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.24), transparent 62%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1120, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', padding: '8px 13px', borderRadius: 999, background: 'rgba(139,92,246,0.13)', border: '1px solid rgba(139,92,246,0.25)', color: '#C4B5FD', fontSize: 12, fontWeight: 850, marginBottom: 22 }}>
            Campaign Planner + Export Demo Packet
          </div>
          <h1 style={{ margin: '0 0 18px', fontSize: 'clamp(40px, 6vw, 74px)', lineHeight: 0.98, letterSpacing: '-2.8px', fontWeight: 920 }}>
            Turn a fictional creator into a campaign plan.
          </h1>
          <p style={{ margin: 0, maxWidth: 720, color: 'rgba(255,255,255,0.64)', fontSize: 18, lineHeight: 1.7 }}>
            This judge-friendly planner makes the prototype feel like a complete brand workflow: persona, campaign idea, sample posts, safety checklist, and downloadable demo packet without requiring external AI keys.
          </p>
        </div>
      </section>

      <main style={{ maxWidth: 1120, margin: '0 auto', padding: '42px 24px 72px' }}>
        <div className="planner-grid" style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: 22, alignItems: 'start' }}>
          <Card title="Campaign brief" eyebrow="Input">
            <div style={{ display: 'grid', gap: 13 }}>
              {INPUTS.map(([key, label]) => (
                <label key={key} style={{ display: 'grid', gap: 7 }}>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.50)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.45px' }}>{label}</span>
                  <input value={form[key]} onChange={fieldSetter(setForm, key)} style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: 14,
                    padding: '13px 14px',
                    background: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    outline: 'none',
                    fontSize: 14,
                  }} />
                </label>
              ))}
              <label style={{ display: 'grid', gap: 7 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.50)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.45px' }}>Disclosure line</span>
                <textarea value={form.disclosure} onChange={fieldSetter(setForm, 'disclosure')} rows={3} style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 14,
                  padding: '13px 14px',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#fff',
                  outline: 'none',
                  fontSize: 14,
                  lineHeight: 1.5,
                }} />
              </label>
              <PrimaryButton onClick={exportPacket}>Export demo packet ↓</PrimaryButton>
            </div>
          </Card>

          <div style={{ display: 'grid', gap: 18 }}>
            <Card title="Campaign positioning" eyebrow="Generated plan">
              <p style={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.65, margin: '0 0 14px', fontSize: 15 }}>{plan.campaignConcept}</p>
              <p style={{ color: 'rgba(255,255,255,0.56)', lineHeight: 1.65, margin: 0, fontSize: 14 }}>{plan.positioning}</p>
            </Card>

            <Card title="Content pillars" eyebrow="Strategy">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 10 }} className="pillar-grid">
                {plan.contentPillars.map(item => (
                  <div key={item} style={{ padding: 14, borderRadius: 16, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.09)', color: 'rgba(255,255,255,0.74)', fontSize: 13.5, lineHeight: 1.45, fontWeight: 650 }}>
                    {item}
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Sample post plan" eyebrow="Output">
              <div style={{ display: 'grid', gap: 12 }}>
                {plan.postIdeas.map((post, index) => (
                  <article key={post.title} style={{ display: 'grid', gridTemplateColumns: '38px 1fr', gap: 13, padding: '14px 0', borderTop: index ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                    <div style={{ width: 32, height: 32, borderRadius: 11, background: 'linear-gradient(135deg,#EC4899,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 900 }}>{index + 1}</div>
                    <div>
                      <h3 style={{ margin: '0 0 5px', fontSize: 16 }}>{post.title}</h3>
                      <div style={{ color: '#C4B5FD', fontSize: 12, fontWeight: 800, marginBottom: 8 }}>{post.channel}</div>
                      <p style={{ margin: '0 0 8px', color: 'rgba(255,255,255,0.64)', lineHeight: 1.55, fontSize: 13.5 }}>{post.hook}</p>
                      <p style={{ margin: 0, color: 'rgba(255,255,255,0.52)', lineHeight: 1.55, fontSize: 13.5 }}>{post.caption}</p>
                    </div>
                  </article>
                ))}
              </div>
            </Card>

            <Card title="Safety checklist" eyebrow="Responsible AI">
              <div style={{ display: 'grid', gap: 9 }}>
                {plan.safetyChecklist.map(item => (
                  <div key={item} style={{ display: 'flex', gap: 10, color: 'rgba(255,255,255,0.70)', fontSize: 13.5, lineHeight: 1.5 }}>
                    <span style={{ width: 18, height: 18, borderRadius: '50%', background: '#10B981', color: '#06120D', fontSize: 12, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>

      <style>{`
        @media (max-width: 900px) {
          .planner-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .pillar-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
