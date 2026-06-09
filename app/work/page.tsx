import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../data/projects'

export const metadata: Metadata = {
  title: 'Work — Kauê Lima',
  description:
    'Full-stack portfolio: SaaS products from zero to production. Real projects, real users, real decisions.',
  openGraph: {
    title: 'Work — Kauê Lima · Full Stack Developer',
    description: 'Six SaaS projects with full-stack ownership — from architecture to deploy.',
  },
}

const STACK_GROUPS = [
  {
    category: 'Frontend',
    items: ['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'Axios'],
  },
  {
    category: 'Backend',
    items: ['Java 21', 'Spring Boot 3.3', 'Spring Security', 'JPA / Hibernate', 'Flyway', 'Node.js'],
  },
  {
    category: 'Infrastructure',
    items: ['PostgreSQL', 'Neon', 'Railway', 'Vercel', 'Docker', 'Redis', 'RabbitMQ'],
  },
  {
    category: 'Tools',
    items: ['GitHub Actions', 'Testcontainers', 'JUnit 5', 'Mercado Pago', 'Supabase', 'n8n'],
  },
]

export default function WorkPage() {
  return (
    <div className="page-shell">
      <Nav />

      <main>
        {/* ── HEADER ── */}
        <section
          style={{
            padding: '5rem 0 3rem',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <div className="container">
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-accent)',
                marginBottom: '0.75rem',
              }}
            >
              Selected Work
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1,
                marginBottom: '1rem',
              }}
            >
              Real products.
              <br />
              <span style={{ color: 'var(--color-accent)' }}>Real decisions.</span>
            </h1>
            <p
              style={{
                color: 'var(--color-muted)',
                fontSize: '1.05rem',
                maxWidth: '56ch',
                lineHeight: 1.7,
              }}
            >
              Six SaaS projects with full-stack ownership — from database schema design to production deploy.
              Each one solving a real problem for real users.
            </p>
          </div>
        </section>

        {/* ── PROJECT GRID ── */}
        <section className="section">
          <div className="container">
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  title={project.title}
                  description={project.tagline}
                  type={project.type}
                  stack={project.stack.flatMap((g) => g.items).slice(0, 5)}
                  url={project.liveUrl}
                  status={project.status}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT STRIP ── */}
        <section style={{ padding: '0 0 5rem' }}>
          <div className="container">
            <div className="about-strip">
              <div className="about-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/screenshots/kaue-proff.png" alt="Kauê Lima" />
              </div>

              <div>
                <div className="about-name">Kauê Lima</div>
                <p className="about-bio">
                  Senior developer with 15+ years of logistics operations at CMA CGM Group.
                  I ship full-stack products solo — from database schema to production deploy.
                  Currently open to remote roles in Europe and North America.
                </p>
              </div>

              <div className="about-links">
                <a
                  href="https://github.com/kauessz"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                  style={{ minHeight: '40px', fontSize: '0.82rem' }}
                >
                  GitHub ↗
                </a>
                <a
                  href="https://linkedin.com/in/kaue-lima01"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                  style={{ minHeight: '40px', fontSize: '0.82rem' }}
                >
                  LinkedIn ↗
                </a>
                <a
                  href="mailto:ssz.kaue@gmail.com"
                  className="btn btn-accent"
                  style={{ minHeight: '40px', fontSize: '0.82rem' }}
                >
                  Email me
                </a>
                <a
                  href="/CV/CV-Kaue-Lima-EN.pdf"
                  download="CV-Kaue-Lima-EN.pdf"
                  className="cv-btn"
                >
                  ↓ CV (EN)
                </a>
                <a
                  href="/CV/CV-Kaue-Lima-PT.pdf"
                  download="CV-Kaue-Lima-PT.pdf"
                  className="cv-btn"
                >
                  ↓ CV (PT)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── STACK SECTION ── */}
        <section
          style={{
            padding: '4rem 0 5rem',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <div className="container">
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-accent)',
                marginBottom: '0.75rem',
              }}
            >
              Stack
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginBottom: '0.5rem',
              }}
            >
              What I work with
            </h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
              The tools I reach for when building production systems.
            </p>

            <div className="stack-groups">
              {STACK_GROUPS.map((group) => (
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
        </section>
      </main>

      <Footer />
    </div>
  )
}
