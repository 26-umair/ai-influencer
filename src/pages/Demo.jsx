import { useNavigate } from 'react-router-dom'

const SAMPLE_IMAGES = [
  '/camila/main.jpg',
  '/camila/photos/p1.png',
  '/camila/photos/p4.png',
  '/camila/photos/p8.png',
  '/camila/brand_deals/swatch_original.png',
  '/camila/brand_deals/swatch_sheet.png',
]

const SAFETY_CHECKS = [
  'Fictional creator only — no real-person impersonation',
  '18+ creator profile enforced for demo use',
  'AI-generated disclosure recommended for campaign assets',
  'Brand-safe campaign language, no sensitive or deceptive claims',
]

const DEMO_STEPS = [
  {
    title: 'Build the persona',
    text: 'A small brand defines a fictional creator with niche, tone, story, audience, and visual direction.',
  },
  {
    title: 'Generate a consistent look',
    text: 'The system turns the brief into reusable creator visuals and stores the selected identity in the workspace.',
  },
  {
    title: 'Plan campaign content',
    text: 'The same creator can be reused for product shoots, campaign concepts, post ideas, and brand deal assets.',
  },
  {
    title: 'Review safety signals',
    text: 'Before submission or publishing, the workflow highlights responsible AI rules and disclosure expectations.',
  },
]

function Stat({ label, value }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.11)',
      borderRadius: 18,
      padding: '18px 20px',
      backdropFilter: 'blur(14px)',
    }}>
      <div style={{ fontSize: 28, fontWeight: 850, letterSpacing: '-0.9px', color: '#fff', marginBottom: 3 }}>{value}</div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.55px' }}>{label}</div>
    </div>
  )
}

function Pill({ children }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '7px 12px',
      borderRadius: 999,
      background: 'rgba(139,92,246,0.12)',
      border: '1px solid rgba(139,92,246,0.24)',
      color: '#C4B5FD',
      fontSize: 12,
      fontWeight: 750,
    }}>{children}</span>
  )
}

export default function Demo() {
  const navigate = useNavigate()

  return (
    <div style={{ minHeight: '100vh', paddingTop: 'var(--nav-h)', background: '#07070E', color: '#fff' }}>
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '78px 24px 64px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <div style={{ position: 'absolute', width: 680, height: 680, top: -260, left: -180, borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.28), transparent 62%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 620, height: 620, top: -220, right: -160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(96,165,250,0.18), transparent 62%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1120, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 24 }}>
            <Pill>Judge Demo Mode</Pill>
            <Pill>No API keys required</Pill>
            <Pill>Fictional creator workflow</Pill>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.05fr) minmax(320px,0.95fr)', gap: 38, alignItems: 'center' }} className="demo-hero-grid">
            <div>
              <h1 style={{
                fontSize: 'clamp(42px, 7vw, 82px)',
                lineHeight: 0.98,
                letterSpacing: '-3px',
                fontWeight: 900,
                margin: '0 0 22px',
              }}>
                Safe virtual creators for small brand campaigns.
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: 'rgba(255,255,255,0.62)', maxWidth: 620, margin: '0 0 30px' }}>
                This demo shows the submission story without requiring judges to connect Higgsfield, Claude, or any private API key. It explains the product flow, output quality, safety posture, and campaign use case in one guided screen.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button onClick={() => navigate('/create')} style={{
                  border: 'none',
                  borderRadius: 999,
                  padding: '14px 24px',
                  background: 'linear-gradient(135deg,#EC4899,#8B5CF6)',
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 800,
                  cursor: 'pointer',
                  boxShadow: '0 10px 32px rgba(139,92,246,0.35)',
                }}>Open creator builder →</button>
                <button onClick={() => navigate('/influencers')} style={{
                  border: '1px solid rgba(255,255,255,0.16)',
                  borderRadius: 999,
                  padding: '14px 24px',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 800,
                  cursor: 'pointer',
                }}>View saved influencers</button>
              </div>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.11)',
              borderRadius: 28,
              padding: 16,
              boxShadow: '0 28px 90px rgba(0,0,0,0.42)',
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {SAMPLE_IMAGES.slice(0, 4).map((src, i) => (
                  <img key={src} src={src} alt="Demo virtual creator asset" style={{
                    width: '100%',
                    aspectRatio: i === 0 ? '1/1.18' : '1/1',
                    objectFit: 'cover',
                    borderRadius: 18,
                    display: 'block',
                  }} />
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginTop: 42 }} className="demo-stats-grid">
            <Stat value="4" label="demo stages" />
            <Stat value="0" label="keys needed" />
            <Stat value="18+" label="safety rule" />
            <Stat value="1" label="brand kit" />
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '54px 24px 72px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 24 }} className="demo-main-grid">
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 24, padding: 24 }}>
            <div style={{ color: '#C4B5FD', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: 10 }}>Sample persona</div>
            <h2 style={{ fontSize: 34, lineHeight: 1.05, letterSpacing: '-1.2px', margin: '0 0 12px' }}>Camila — fictional wellness & fashion creator</h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,0.62)', marginBottom: 22 }}>
              A brand-safe virtual creator for lifestyle campaigns, product visuals, and social content experiments. This sample uses existing demo assets so judges can review the concept even before live generation is connected.
            </p>
            <div style={{ display: 'grid', gap: 10 }}>
              {[
                ['Audience', 'Gen Z and young millennial lifestyle buyers'],
                ['Niche', 'Fashion, wellness, streetwear, product storytelling'],
                ['Campaign angle', 'Everyday creator content for small brands'],
                ['Disclosure', 'Assets should be marked as AI-generated where used publicly'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 12, padding: '12px 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.42)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.4px' }}>{k}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)', fontWeight: 600 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gap: 16 }}>
            <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 24, padding: 24 }}>
              <div style={{ color: '#F9A8D4', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: 16 }}>Demo flow</div>
              <div style={{ display: 'grid', gap: 12 }}>
                {DEMO_STEPS.map((step, i) => (
                  <div key={step.title} style={{ display: 'grid', gridTemplateColumns: '38px 1fr', gap: 14, alignItems: 'start' }}>
                    <div style={{ width: 32, height: 32, borderRadius: 11, background: 'linear-gradient(135deg,#EC4899,#8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 900 }}>{i + 1}</div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 850, marginBottom: 4 }}>{step.title}</div>
                      <div style={{ fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.56)' }}>{step.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.22)', borderRadius: 24, padding: 24 }}>
              <div style={{ color: '#86EFAC', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: 14 }}>Responsible AI guardrails</div>
              <div style={{ display: 'grid', gap: 10 }}>
                {SAFETY_CHECKS.map(item => (
                  <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', color: 'rgba(255,255,255,0.72)', fontSize: 13.5, lineHeight: 1.5 }}>
                    <span style={{ width: 18, height: 18, borderRadius: '50%', background: '#10B981', color: '#06120D', fontSize: 12, fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 24, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 24, padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 18, alignItems: 'center', flexWrap: 'wrap', marginBottom: 18 }}>
            <div>
              <div style={{ color: '#C4B5FD', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: 7 }}>Campaign output preview</div>
              <h2 style={{ margin: 0, fontSize: 26, letterSpacing: '-0.8px' }}>From one fictional persona to a complete brand asset pack</h2>
            </div>
            <button onClick={() => navigate('/brand-deals')} style={{ border: '1px solid rgba(255,255,255,0.16)', borderRadius: 999, padding: '11px 18px', background: 'rgba(255,255,255,0.08)', color: '#fff', fontSize: 13, fontWeight: 800, cursor: 'pointer' }}>Open brand deals →</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 10 }} className="demo-output-grid">
            {SAMPLE_IMAGES.map(src => (
              <img key={src} src={src} alt="Campaign output asset" style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: 16, display: 'block' }} />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .demo-hero-grid,
          .demo-main-grid { grid-template-columns: 1fr !important; }
          .demo-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .demo-output-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .demo-stats-grid,
          .demo-output-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  )
}
