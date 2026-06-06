import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Footer from '../../../components/Footer'
import Nav from '../../../components/Nav'
import { getAllSlugs, getProjectData } from '../../../data/projects'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectData(slug)
  if (!project) return {}

  return {
    title: `${project.title} — Kauê Lima`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Kauê Lima`,
      description: project.tagline,
      images: project.screenshots[0] ? [project.screenshots[0]] : [],
    },
  }
}

const statusLabel: Record<string, string> = {
  live: 'Live',
  mvp: 'MVP',
  portfolio: 'Portfolio project',
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectData(slug)

  if (!project) notFound()

  return (
    <div className="page-shell">
      <Nav />

      <main>
        {/* ── HERO ── */}
        <section className="case-hero">
          <div className="container">
            <div className="case-meta">
              <span className={`status-badge status-${project.status}`}>
                {statusLabel[project.status]}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--color-accent)',
                }}
              >
                {project.type}
              </span>
            </div>

            <h1 className="case-title">{project.title}</h1>
            <p className="case-tagline">{project.tagline}</p>

            <div className="case-links">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-accent"
                >
                  Visit site ↗
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  GitHub ↗
                </a>
              )}
              <a href="/work" className="btn btn-ghost">
                ← All projects
              </a>
            </div>
          </div>
        </section>

        <div className="container">
          {/* ── SCREENSHOTS ── */}
          {project.screenshots.length > 0 && (
            <div className="case-section">
              <div className="screenshots-grid">
                {project.screenshots.map((src) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt={`${project.title} screenshot`}
                    className="screenshot-img"
                  />
                ))}
              </div>
            </div>
          )}

          {/* ── THE PROBLEM ── */}
          <div className="case-section">
            <div className="case-section-label">The problem</div>
            <h2 className="case-section-title">Why this exists</h2>
            <p className="case-text">{project.problem}</p>
          </div>

          {/* ── WHAT I BUILT ── */}
          <div className="case-section">
            <div className="case-section-label">What I built</div>
            <h2 className="case-section-title">Features & scope</h2>
            <ul className="case-bullets" style={{ marginTop: '1rem' }}>
              {project.whatIBuilt.map((item, i) => (
                <li key={i} className="case-bullet">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── TECHNICAL DECISIONS ── */}
          {project.technicalDecisions.length > 0 && (
            <div className="case-section">
              <div className="case-section-label">Architecture</div>
              <h2 className="case-section-title">Technical decisions</h2>
              <div className="decisions-grid">
                {project.technicalDecisions.map((item, i) => (
                  <div key={i} className="decision-item">
                    <div className="decision-label">{item.decision}</div>
                    <p className="decision-text">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── CHALLENGES ── */}
          {project.challenges.length > 0 && (
            <div className="case-section">
              <div className="case-section-label">Engineering</div>
              <h2 className="case-section-title">Challenges & solutions</h2>
              <div className="challenges-list">
                {project.challenges.map((item, i) => (
                  <div key={i} className="challenge-item">
                    <div>
                      <div className="challenge-label">Challenge</div>
                      <p className="challenge-text">{item.challenge}</p>
                    </div>
                    <div className="challenge-solution">
                      <div className="challenge-label">Solution</div>
                      <p className="challenge-text">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── STACK ── */}
          <div className="case-section">
            <div className="case-section-label">Stack</div>
            <h2 className="case-section-title">Technologies used</h2>
            <div className="stack-groups" style={{ marginTop: '1.5rem' }}>
              {project.stack.map((group) => (
                <div key={group.category}>
                  <div className="stack-group-title">{group.category}</div>
                  <div className="stack-group-items">
                    {group.items.map((item) => (
                      <span key={item} className="stack-group-item">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div
            className="case-section"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              marginBottom: '4rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-accent)',
                marginBottom: '0.75rem',
              }}
            >
              Let&apos;s work together
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: '0.75rem',
              }}
            >
              Open to remote roles & freelance
            </h2>
            <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem', maxWidth: '52ch' }}>
              I&apos;m available for full-time remote positions in Europe and North America, and for
              freelance projects. Let&apos;s talk.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="mailto:kauecls@gmail.com" className="btn btn-accent">
                Email me
              </a>
              <a
                href="https://linkedin.com/in/kauecls"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                LinkedIn ↗
              </a>
              <a href="/work" className="btn btn-ghost">
                ← All projects
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
