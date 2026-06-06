'use client'

import Link from 'next/link'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { useLocale } from '../lib/i18n'

const STACK = [
  'Next.js', 'React', 'TypeScript', 'Java 21', 'Spring Boot',
  'PostgreSQL', 'Docker', 'Supabase', 'Neon', 'Railway',
  'Vercel', 'n8n', 'Redis', 'RabbitMQ',
]

export default function Home() {
  const { t } = useLocale()

  return (
    <div className="page-shell">
      <Nav />

      <main>
        {/* ── HERO ── */}
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="hero-greeting">{t('hero.greeting')}</p>

              <h1 className="hero-title">
                {t('hero.title')}
                <span className="hero-title-accent">.</span>
              </h1>

              <p className="hero-body">{t('hero.subtitle')}</p>

              <div className="hero-actions">
                <Link href="/work" className="btn btn-accent">
                  {t('hero.cta_work')} →
                </Link>
                <Link href="/products" className="btn btn-ghost">
                  {t('hero.cta_products')}
                </Link>
              </div>
            </div>

            <div className="hero-image-wrap">
              <div className="hero-image-shape">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/screenshots/kaue-proff.png" alt="Kauê Lima" />
              </div>
            </div>
          </div>
        </section>

        {/* ── STACK STRIP ── */}
        <div className="container">
          <div className="stack-strip">
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-muted)',
                marginRight: '0.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Stack
            </span>
            {STACK.map((tech) => (
              <span key={tech} className="stack-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── SPLIT SECTION ── */}
        <section className="section">
          <div className="container">
            <div className="split-grid">
              {/* For recruiters */}
              <div className="panel panel-accent">
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-accent)',
                    marginBottom: '1rem',
                  }}
                >
                  For recruiters
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
                  Tech portfolio & case studies
                </h2>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Real products, real decisions, real code. Six SaaS projects with full-stack ownership — from architecture to deploy.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {['GitHub', 'Case Studies', 'Stack Detail', 'CV Download'].map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
                <Link href="/work" className="btn btn-accent">
                  View portfolio →
                </Link>
              </div>

              {/* For clients */}
              <div className="panel">
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-muted)',
                    marginBottom: '1rem',
                  }}
                >
                  For clients
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
                  SaaS products & services
                </h2>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Ready-to-use products for operations, logistics, education, and automation. Direct contact, no lengthy sales process.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {['Jersey Control', 'Racquet Arena', 'EnglishAI', 'PulsOps'].map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Link href="/products" className="btn btn-ghost">
                    Browse products →
                  </Link>
                  <a
                    href="https://wa.me/5513988026188?text=Olá, Kauê! Quero saber mais sobre seus produtos."
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-wha"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
