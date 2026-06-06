import type { Metadata } from 'next'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

export const metadata: Metadata = {
  title: 'Products — Kauê Lima',
  description: 'SaaS products and digital tools built by Kauê Lima — from maritime logistics to beach tennis tournament management.',
}

const PRODUCTS = [
  {
    id: 'racquet-arena',
    name: 'Racquet Arena',
    badge: 'SaaS · Sports',
    badgeColor: 'var(--color-accent)',
    tagline: 'Tournament management for beach tennis & racket sports',
    features: [
      'Athlete dashboard with geolocation tournament search',
      'Full organizer control: draws, financials, substitutions',
      'Automatic bracket generation with BYE support',
      'Mercado Pago split payment marketplace',
    ],
    url: 'https://www.racquetarena.com',
  },
  {
    id: 'jersey-control',
    name: 'Jersey Control',
    badge: 'SaaS · E-commerce',
    badgeColor: 'var(--color-accent-2)',
    tagline: 'Order management for imported jersey resellers',
    features: [
      'Public catalog with cart and Pix checkout',
      'Public order tracking by code via WhatsApp',
      'Admin with batches, CSV export, and financial dashboard',
      'Multi-instance: each client gets their own deployment',
    ],
    url: 'https://www.jerseycontrol.com.br',
  },
  {
    id: 'english-ai',
    name: 'EnglishAI',
    badge: 'EdTech · SaaS',
    badgeColor: 'var(--amber)',
    tagline: 'AI-powered English learning from A1 to C1',
    features: [
      'Structured CEFR-aligned progression across 3 tracks',
      'Adaptive exercises based on performance history',
      '24h AI conversation tutor in English',
      'Free tier available',
    ],
    url: 'https://www.english-ai.com.br',
  },
  {
    id: 'pulsops',
    name: 'PulsOps',
    badge: 'Automation · SaaS',
    badgeColor: 'var(--purple)',
    tagline: 'WhatsApp operational automation for clinics and pharmacies',
    features: [
      'Automatic appointment confirmation and reminders',
      'AI message triage with Claude — reschedule, cancel, inquiry',
      'LGPD-compliant opt-in/opt-out flow',
      'Admin dashboard with conversation history and metrics',
    ],
    url: 'https://pulsops.vercel.app',
  },
  {
    id: 'freightflow',
    name: 'FreightFlow',
    badge: 'SaaS · LogTech',
    badgeColor: 'var(--color-accent-2)',
    tagline: 'Maritime shipment management for freight forwarders',
    features: [
      'Fleet map with real vessel positions',
      'Shipment tracking dashboard with 110+ real entries',
      'RBAC with 4 roles: Admin, Operator, Client, Viewer',
      'Cargo event processing via RabbitMQ',
    ],
    url: null,
    internalPath: '/freightflow',
  },
  {
    id: 'condohub',
    name: 'CondoHub',
    badge: 'SaaS · PropTech',
    badgeColor: 'var(--pink)',
    tagline: 'Multi-tenant condo management platform',
    features: [
      '8 roles with per-role portals and permissions',
      'Financial module with Pix/boleto via Asaas',
      'Booking, parking lottery, and digital assembly voting',
      'Full audit trail on every action',
    ],
    url: null,
    internalPath: '/condohub',
  },
]

export default function ProductsPage() {
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
              Products
            </p>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                marginBottom: '1rem',
              }}
            >
              Built, shipped,
              <br />
              <span style={{ color: 'var(--color-accent)' }}>running in production.</span>
            </h1>
            <p
              style={{
                color: 'var(--color-muted)',
                fontSize: '1.05rem',
                maxWidth: '52ch',
                lineHeight: 1.7,
              }}
            >
              SaaS products and tools I&apos;ve built and maintain. Some are available for you to use
              today — others are portfolio demonstrations.
            </p>
          </div>
        </section>

        {/* ── PRODUCT GRID ── */}
        <section className="section">
          <div className="container">
            <div className="products-grid">
              {PRODUCTS.map((product) => (
                <article key={product.id} className="product-showcase-card">
                  <div className="product-showcase-body">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <h2 className="product-showcase-name">{product.name}</h2>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: product.badgeColor,
                          border: `1px solid ${product.badgeColor}`,
                          borderRadius: '4px',
                          padding: '2px 8px',
                          opacity: 0.85,
                        }}
                      >
                        {product.badge}
                      </span>
                    </div>

                    <p className="product-showcase-tagline">{product.tagline}</p>

                    <ul className="product-showcase-features">
                      {product.features.map((f) => (
                        <li key={f} className="product-showcase-feature">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="product-showcase-footer">
                    {product.url ? (
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-accent"
                        style={{ minHeight: '40px', fontSize: '0.85rem' }}
                      >
                        Visit product →
                      </a>
                    ) : product.internalPath ? (
                      <a
                        href={product.internalPath}
                        className="btn btn-ghost"
                        style={{ minHeight: '40px', fontSize: '0.85rem' }}
                      >
                        View details →
                      </a>
                    ) : (
                      <a
                        href="mailto:ssz.kaue@gmail.com"
                        className="btn btn-ghost"
                        style={{ minHeight: '40px', fontSize: '0.85rem' }}
                      >
                        Get in touch →
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA ── */}
        <section style={{ padding: '0 0 5rem' }}>
          <div className="container">
            <div
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(2rem, 4vw, 3rem)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem',
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    marginBottom: '0.5rem',
                  }}
                >
                  Interested in a product?
                </h2>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>
                  Let&apos;s talk about how any of these could work for your business.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/5513988026188?text=Olá, Kauê! Tenho interesse em um dos seus produtos."
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-wha"
                >
                  WhatsApp
                </a>
                <a href="mailto:ssz.kaue@gmail.com" className="btn btn-ghost">
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
