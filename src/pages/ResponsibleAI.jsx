import { useNavigate } from 'react-router-dom'

const PRINCIPLES = [
  {
    title: 'Fictional-first creation',
    text: 'AI Influencer Studio is intended for fictional virtual creators and brand-safe characters, not real-person impersonation.',
  },
  {
    title: 'Consent over copying',
    text: 'Reference images should only be used when the user owns the asset or has permission to use it for creative direction.',
  },
  {
    title: 'Clear AI disclosure',
    text: 'Generated creators and campaign assets should be labelled as AI-generated whenever they are used publicly.',
  },
  {
    title: 'Human review before publishing',
    text: 'The system helps create drafts and visuals, but a human should review identity, brand, safety, and factual claims before posting.',
  },
]

const ALLOWED = [
  'Create original fictional virtual influencers for brand storytelling.',
  'Generate campaign concepts, social visuals, and creator-style mockups.',
  'Use owned or permitted reference assets to guide style, pose, outfit, or brand direction.',
  'Export demo-ready campaign packages for review and iteration.',
]

const NOT_ALLOWED = [
  'Impersonating real people, celebrities, classmates, customers, or public figures without consent.',
  'Creating minors or sexualized underage-looking characters.',
  'Publishing AI-generated creators as real humans without disclosure.',
  'Using generated content for deceptive political, medical, financial, or identity-based claims.',
]

const CHECKLIST = [
  'Is the creator fictional and clearly not presented as a real person?',
  'Are all reference images owned, licensed, or used with permission?',
  'Is the campaign copy free from misleading claims?',
  'Is AI-generated content disclosed where the audience may reasonably assume it is real?',
  'Has a human reviewed the final output before publishing?',
]

function Card({ children, tone = 'default' }) {
  const border = tone === 'danger' ? 'rgba(248,113,113,0.28)' : tone === 'safe' ? 'rgba(52,211,153,0.25)' : 'rgba(255,255,255,0.10)'
  const bg = tone === 'danger' ? 'rgba(248,113,113,0.06)' : tone === 'safe' ? 'rgba(52,211,153,0.06)' : 'rgba(255,255,255,0.06)'
  return (
    <div style={{
      background: bg,
      border: `1px solid ${border}`,
      borderRadius: 22,
      padding: 24,
      backdropFilter: 'blur(14px)',
      boxShadow: '0 24px 80px rgba(0,0,0,0.22)',
    }}>
      {children}
    </div>
  )
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div style={{ maxWidth: 760, marginBottom: 28 }}>
      <div style={{
        fontSize: 12,
        fontWeight: 850,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#C4B5FD',
        marginBottom: 10,
      }}>{eyebrow}</div>
      <h2 style={{ fontSize: 'clamp(32px,5vw,54px)', lineHeight: 1.02, letterSpacing: '-1.8px', margin: '0 0 12px', color: '#fff' }}>{title}</h2>
      {text && <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.58)', margin: 0 }}>{text}</p>}
    </div>
  )
}

function ListCard({ title, items, tone }) {
  const icon = tone === 'danger' ? '×' : '✓'
  const color = tone === 'danger' ? '#FCA5A5' : '#86EFAC'
  return (
    <Card tone={tone}>
      <h3 style={{ fontSize: 20, letterSpacing: '-0.5px', margin: '0 0 16px', color: '#fff' }}>{title}</h3>
      <div style={{ display: 'grid', gap: 13 }}>
        {items.map(item => (
          <div key={item} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: 10, alignItems: 'flex-start' }}>
            <span style={{
              width: 22,
              height: 22,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: `${color}22`,
              color,
              fontSize: 14,
              fontWeight: 900,
            }}>{icon}</span>
            <span style={{ fontSize: 14.5, lineHeight: 1.58, color: 'rgba(255,255,255,0.70)' }}>{item}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default function ResponsibleAI() {
  const navigate = useNavigate()

  return (
    <div style={{ minHeight: '100vh', paddingTop: 'var(--nav-h)', background: '#07070E', color: '#fff' }}>
      <section style={{ position: 'relative', overflow: 'hidden', padding: '82px 24px 54px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ position: 'absolute', width: 720, height: 720, top: -300, right: -220, borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.32), transparent 62%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 560, height: 560, bottom: -300, left: -180, borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.20), transparent 65%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1120, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 9,
            padding: '8px 14px',
            borderRadius: 999,
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.72)',
            fontSize: 13,
            fontWeight: 750,
            marginBottom: 26,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#86EFAC', boxShadow: '0 0 0 5px rgba(134,239,172,0.12)' }} />
            Responsible AI Disclosure
          </div>

          <h1 style={{ fontSize: 'clamp(44px,8vw,86px)', maxWidth: 920, lineHeight: 0.98, letterSpacing: '-3px', margin: '0 0 24px', fontWeight: 900 }}>
            Built for fictional creators, not deception.
          </h1>
          <p style={{ maxWidth: 680, fontSize: 19, lineHeight: 1.75, color: 'rgba(255,255,255,0.62)', margin: '0 0 34px' }}>
            AI Influencer Studio helps brands and creators prototype virtual influencers safely. Every output should stay transparent, consent-aware, and reviewed by a human before it is published.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <button
              onClick={() => navigate('/demo')}
              style={{
                padding: '14px 22px',
                borderRadius: 999,
                border: 'none',
                background: 'linear-gradient(135deg,#EC4899,#8B5CF6)',
                color: '#fff',
                fontSize: 14,
                fontWeight: 850,
                cursor: 'pointer',
                boxShadow: '0 12px 32px rgba(139,92,246,0.32)',
              }}
            >Open Judge Demo →</button>
            <button
              onClick={() => navigate('/create')}
              style={{
                padding: '14px 22px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.16)',
                background: 'rgba(255,255,255,0.07)',
                color: '#fff',
                fontSize: 14,
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >Create Fictional Influencer</button>
          </div>
        </div>
      </section>

      <main style={{ maxWidth: 1120, margin: '0 auto', padding: '58px 24px 90px' }}>
        <section style={{ marginBottom: 62 }}>
          <SectionTitle
            eyebrow="Core principles"
            title="Safety rules built around the workflow"
            text="These principles define how the product should be used during demo, judging, and real-world brand prototyping."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 16 }}>
            {PRINCIPLES.map(p => (
              <Card key={p.title}>
                <div style={{ width: 38, height: 38, borderRadius: 12, background: 'linear-gradient(135deg,#EC4899,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 style={{ fontSize: 17, margin: '0 0 8px', color: '#fff', letterSpacing: '-0.35px' }}>{p.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, margin: 0, color: 'rgba(255,255,255,0.58)' }}>{p.text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 62 }}>
          <SectionTitle
            eyebrow="Usage boundaries"
            title="What the prototype supports — and what it should block"
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
            <ListCard title="Allowed use" items={ALLOWED} tone="safe" />
            <ListCard title="Not allowed" items={NOT_ALLOWED} tone="danger" />
          </div>
        </section>

        <section style={{ marginBottom: 62 }}>
          <SectionTitle
            eyebrow="Before publishing"
            title="Human review checklist"
            text="The app should be used as a creative assistant. Final publishing decisions remain with the user or brand owner."
          />
          <Card>
            <div style={{ display: 'grid', gap: 14 }}>
              {CHECKLIST.map((item, index) => (
                <div key={item} style={{ display: 'grid', gridTemplateColumns: '42px 1fr', gap: 14, alignItems: 'center' }}>
                  <div style={{ width: 34, height: 34, borderRadius: 12, background: 'rgba(139,92,246,0.14)', border: '1px solid rgba(139,92,246,0.28)', color: '#C4B5FD', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 900 }}>{String(index + 1).padStart(2, '0')}</div>
                  <div style={{ fontSize: 15.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.72)' }}>{item}</div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section>
          <SectionTitle
            eyebrow="Hackathon roadmap"
            title="Where Alibaba Cloud and Qwen fit next"
            text="The current prototype already has the product workflow. The next AI layer should make responsible decisions more visible and automated."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {[
              ['Persona safety scoring', 'Qwen can review creator briefs for impersonation, age, and sensitive-claim risks before generation.'],
              ['Campaign copy guardrails', 'Qwen can suggest safer wording, disclosure labels, and brand-safe captions in English and Urdu.'],
              ['Reviewable audit trail', 'Alibaba Cloud storage can preserve generated campaign packets, prompts, and safety checks for judges or teams.'],
            ].map(([title, text]) => (
              <Card key={title}>
                <h3 style={{ fontSize: 18, letterSpacing: '-0.4px', margin: '0 0 10px', color: '#fff' }}>{title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, margin: 0, color: 'rgba(255,255,255,0.58)' }}>{text}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
