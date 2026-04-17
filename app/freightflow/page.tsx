'use client'
import { useState } from 'react'
import Image from 'next/image'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const PHONE = '5513988026188'

const WhaIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const SCREENS = [
  { id: 'tracking-public', label: 'Tracking público', url: 'freightflow.app/track', file: 'ff-tracking-public.png', desc: 'Qualquer pessoa pode rastrear uma carga pelo número de booking — sem login.' },
  { id: 'login', label: 'Login', url: 'freightflow.app/login', file: 'ff-login.png', desc: 'Acesso seguro ao dashboard operacional com autenticação JWT.' },
  { id: 'dashboard', label: 'Shipment Dashboard', url: 'freightflow.app/dashboard', file: 'ff-dashboard.png', desc: '110+ embarques reais com filtros por carrier, origem, vessel, status e risco.' },
  { id: 'tracking-detail', label: 'Tracking detalhado', url: 'freightflow.app/track/MEDU1234567', file: 'ff-tracking-detail.png', desc: 'Timeline completa do embarque: Gate In, Loaded, Departed, Transshipment, ETA.' },
  { id: 'customers', label: 'Customers', url: 'freightflow.app/customers', file: 'ff-customers.png', desc: 'Gestão de clientes (freight forwarders e importadores) com CNPJ e contato.' },
  { id: 'users', label: 'User Management', url: 'freightflow.app/users', file: 'ff-users.png', desc: 'Controle de acesso com 4 roles: Admin, Operator, Viewer e Client.' },
  { id: 'fleetmap', label: 'Fleet Map', url: 'freightflow.app/fleet-map', file: 'ff-fleetmap.png', desc: 'Mapa interativo com 26 navios rastreados e posição AIS em tempo real.' },
]

const FEATURES = [
  { icon: '📦', title: 'Shipment Dashboard', desc: '110+ embarques reais com booking, container, rota, ETA, Incoterm, docs, customs e risk.' },
  { icon: '🗺️', title: 'Fleet Map', desc: 'Mapa interativo (Leaflet) com posição de navios, filtro por carrier e status AIS.' },
  { icon: '🔍', title: 'Tracking público', desc: 'Página pública de rastreamento por booking number — sem necessidade de login.' },
  { icon: '📊', title: 'Timeline de eventos', desc: 'Gate In, Loaded, Departed, Transshipment, Arrived — com localização e timestamp.' },
  { icon: '🔐', title: 'RBAC 4 níveis', desc: 'Admin, Operator, Viewer e Client com permissões granulares por recurso.' },
  { icon: '🏢', title: 'Multi-tenant', desc: 'Cada empresa tem seus embarques isolados. Clientes acessam apenas seus próprios dados.' },
  { icon: '⚡', title: 'API REST completa', desc: 'Java 21 + Spring Boot 3.3 com OpenAPI 3 documentado, JWT auth e 59+ testes passando.' },
  { icon: '🔔', title: 'Alertas de risco', desc: 'Classificação de risco LOW/MEDIUM/HIGH por embarque com destaque visual no dashboard.' },
]

const ROADMAP = [
  {
    phase: 1, label: 'Concluído', color: 'var(--green)', bg: 'var(--green-bg)',
    title: 'Core operacional',
    desc: 'Base completa para gestão e rastreamento de embarques marítimos.',
    items: ['Shipment Dashboard', 'Tracking público por booking', 'Fleet Map (Leaflet + AIS)', 'RBAC Admin/Operator/Viewer/Client', 'Multi-tenant por empresa', 'Timeline de eventos', 'Customers & Users', '59+ testes JUnit 5 + Testcontainers', 'CI/CD GitHub Actions + Railway'],
  },
  {
    phase: 2, label: 'Em andamento', color: 'var(--accent)', bg: 'var(--accent-bg)',
    title: 'Notificações & Alertas',
    desc: 'Sistema de alertas proativos para eventos críticos de embarque.',
    items: ['Webhook para eventos', 'E-mail/WhatsApp em atrasos', 'Alertas de SLA', 'Dashboard de risco consolidado'],
  },
  {
    phase: 3, label: 'Planejado', color: 'var(--amber)', bg: 'var(--amber-bg)',
    title: 'Documentação & Integração',
    desc: 'Gestão de documentos e integração com sistemas de freight forwarding.',
    items: ['Upload de documentos (BL, CI, PL)', 'Checklist de docs por embarque', 'Integração EDI carriers', 'Portal do cliente white-label'],
  },
  {
    phase: 4, label: 'Futuro', color: 'var(--text-muted)', bg: 'var(--bg-subtle)',
    title: 'IA & Previsibilidade',
    desc: 'Machine learning para previsão de atrasos e otimização de rotas.',
    items: ['Previsão de ETA com ML', 'Score de confiabilidade por carrier', 'Análise de risco por rota', 'Relatórios automáticos'],
  },
]

const TECH = ['Java 21', 'Spring Boot 3.3', 'Maven', 'PostgreSQL 16', 'Spring Data JPA', 'Flyway', 'Spring Security + JWT', 'SpringDoc OpenAPI 3', 'Redis', 'RabbitMQ', 'JUnit 5', 'Testcontainers', 'Next.js 15', 'TypeScript', 'Docker', 'GitHub Actions', 'Railway']

export default function FreightFlowPage() {
  const [activeScreen, setActiveScreen] = useState('dashboard')
  const current = SCREENS.find(s => s.id === activeScreen)!

  const wha = () => {
    const msg = 'Olá, Kauê! Tenho interesse no FreightFlow para gestão de embarques. Pode me contar mais?'
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ padding: '5rem 0 4rem', borderBottom: '1px solid var(--border)', background: 'var(--bg-card)' }}>
        <div className="container">
          <div className="product-hero-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'var(--accent-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>🚢</div>
                <span className="badge badge-blue">SaaS · LogTech</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: '1rem' }}>
                Gestão de embarques<br />
                <span style={{ color: 'var(--accent)' }}>marítimos em tempo real</span>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem', maxWidth: '440px' }}>
                Para freight forwarders e operadores logísticos: acompanhe embarques, monitore navios no mapa e ofereça tracking público aos seus clientes.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  { num: '110+', label: 'Embarques reais' },
                  { num: '26', label: 'Navios rastreados' },
                  { num: '59+', label: 'Testes passando' },
                ].map((stat, i) => (
                  <div key={i} style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', borderRadius: 'var(--radius-md)', padding: '0.85rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent)' }}>{stat.num}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-wha" onClick={wha}>
                  <WhaIcon /> Quero o FreightFlow
                </button>
              </div>
            </div>

            <div>
              <div style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['dashboard', 'fleetmap', 'tracking-detail', 'tracking-public'].map(id => (
                  <button key={id} className={`ss-tab ${activeScreen === id ? 'active' : ''}`} onClick={() => setActiveScreen(id)}>
                    {SCREENS.find(s => s.id === id)?.label}
                  </button>
                ))}
              </div>
              <div className="screenshot-frame">
                <div className="screenshot-bar">
                  <div className="dot" /><div className="dot" /><div className="dot" />
                  <div className="url-bar">{current.url}</div>
                </div>
                <Image
                  src={`/screenshots/${current.file}`}
                  alt={`FreightFlow - ${current.label}`}
                  width={1200}
                  height={750}
                  style={{ borderRadius: 'var(--radius-md)', width: '100%', height: 'auto', border: '1px solid var(--border)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL SCREENS */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Conheça o sistema</p>
            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>Todas as telas</h2>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {SCREENS.map(s => (
              <button key={s.id} className={`ss-tab ${activeScreen === s.id ? 'active' : ''}`} onClick={() => setActiveScreen(s.id)}>
                {s.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', alignItems: 'start' }}>
            <div className="screenshot-frame">
              <div className="screenshot-bar">
                <div className="dot" /><div className="dot" /><div className="dot" />
                <div className="url-bar">{current.url}</div>
              </div>
              <Image
                src={`/screenshots/${current.file}`}
                alt={`FreightFlow - ${current.label}`}
                width={1200}
                height={750}
                style={{ borderRadius: 'var(--radius-md)', width: '100%', height: 'auto', border: '1px solid var(--border)' }}
              />
            </div>

            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{current.label}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem', fontSize: '0.9rem' }}>{current.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {SCREENS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setActiveScreen(s.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '0.65rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: s.id === activeScreen ? '1px solid var(--accent)' : '1px solid var(--border)',
                      background: s.id === activeScreen ? 'var(--accent-bg)' : 'var(--bg-card)',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ fontSize: '0.82rem', fontWeight: s.id === activeScreen ? 600 : 400, color: s.id === activeScreen ? 'var(--accent)' : 'var(--text-primary)', flex: 1 }}>
                      {s.label}
                    </span>
                    {s.id === activeScreen && <span style={{ fontSize: '0.7rem', color: 'var(--accent)' }}>→</span>}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>O que está incluso</p>
            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>Funcionalidades</h2>
          </div>
          <div className="feature-grid">
            {FEATURES.map((f, i) => (
              <div key={i} className="feature-item">
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-title">{f.title}</div>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Construído com</p>
            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>Stack técnico</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {TECH.map((t, i) => (
              <span key={i} style={{ fontSize: '0.78rem', padding: '5px 12px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '100px', color: 'var(--text-secondary)' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Onde estamos</p>
            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>Roadmap</h2>
          </div>
          <div className="process-steps">
            {ROADMAP.map((phase, i) => (
              <div key={i} className="roadmap-item">
                <div className="roadmap-phase">
                  <div className="roadmap-num" style={{ background: phase.bg, color: phase.color }}>{phase.phase}</div>
                  {i < ROADMAP.length - 1 && <div className="roadmap-line" />}
                </div>
                <div className="roadmap-content" style={{ paddingBottom: '1rem', flex: 1 }}>
                  <div className="roadmap-tag" style={{ color: phase.color }}>{phase.label}</div>
                  <div className="roadmap-title">{phase.title}</div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{phase.desc}</p>
                  <div className="roadmap-items-list">
                    {phase.items.map((item, j) => <span key={j} className="roadmap-chip">{item}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="container">
        <div className="cta-section">
          <h2>Interessado no FreightFlow?</h2>
          <p>Se você é freight forwarder ou operador logístico, vamos conversar sobre como o FreightFlow pode melhorar sua operação.</p>
          <button className="btn btn-wha" onClick={wha}>
            <WhaIcon /> Quero uma demo
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}
