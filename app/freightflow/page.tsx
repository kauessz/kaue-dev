'use client'

import { useState } from 'react'
import Footer from '../../components/Footer'
import LightboxGallery from '../../components/LightboxGallery'
import Nav from '../../components/Nav'
import SectionHeader from '../../components/SectionHeader'
import WhatsAppIcon from '../../components/WhatsAppIcon'

const PHONE = '5513988026188'

const SCREENS = [
  { id: 'tracking-public', label: 'Tracking público', url: 'freightflow.app/track', file: 'ff-tracking-public.png', desc: 'Página pública de rastreamento por booking, sem necessidade de login.' },
  { id: 'login', label: 'Login', url: 'freightflow.app/login', file: 'ff-login.png', desc: 'Acesso seguro ao dashboard operacional com autenticação JWT.' },
  { id: 'dashboard', label: 'Shipment Dashboard', url: 'freightflow.app/dashboard', file: 'ff-dashboard.png', desc: 'Operação com filtros por carrier, origem, vessel, status e risco.' },
  { id: 'tracking-detail', label: 'Tracking detalhado', url: 'freightflow.app/track/MEDU1234567', file: 'ff-tracking-detail.png', desc: 'Timeline completa do embarque com eventos logísticos e ETA.' },
  { id: 'customers', label: 'Customers', url: 'freightflow.app/customers', file: 'ff-customers.png', desc: 'Gestão de clientes e empresas com dados operacionais centrais.' },
  { id: 'users', label: 'User Management', url: 'freightflow.app/users', file: 'ff-users.png', desc: 'Controle de acesso com roles por tipo de usuário.' },
  { id: 'fleetmap', label: 'Fleet Map', url: 'freightflow.app/fleet-map', file: 'ff-fleetmap.png', desc: 'Mapa interativo com navios rastreados e posição AIS em tempo real.' },
]

const FEATURES = [
  { icon: '📦', title: 'Shipment Dashboard', desc: 'Dashboard operacional com embarques, ETA, rota, docs, customs e risco.' },
  { icon: '🗺️', title: 'Fleet Map', desc: 'Mapa interativo com posição de navios, filtro por carrier e status AIS.' },
  { icon: '🔍', title: 'Tracking público', desc: 'Página pública de rastreamento por booking para clientes e parceiros.' },
  { icon: '📊', title: 'Timeline de eventos', desc: 'Gate In, Loaded, Departed, Transshipment e Arrived com contexto de cada etapa.' },
  { icon: '🔐', title: 'RBAC 4 níveis', desc: 'Admin, Operator, Viewer e Client com acesso mais seguro por recurso.' },
  { icon: '🏢', title: 'Multi-tenant', desc: 'Cada empresa acessa somente seus próprios embarques e dados operacionais.' },
  { icon: '⚡', title: 'API REST completa', desc: 'Backend com autenticação JWT, OpenAPI e base técnica pronta para evolução.' },
  { icon: '🔔', title: 'Alertas de risco', desc: 'Classificação visual para embarques com atenção operacional maior.' },
]

const ROADMAP = [
  {
    phase: 1, label: 'Concluído', color: 'var(--green)', bg: 'var(--green-bg)',
    title: 'Core operacional',
    desc: 'Base completa para gestão e rastreamento de embarques marítimos.',
    items: ['Shipment Dashboard', 'Tracking público por booking', 'Fleet Map com AIS', 'RBAC Admin, Operator, Viewer e Client', 'Multi-tenant por empresa', 'Timeline de eventos', 'Customers e Users', '59+ testes JUnit 5 + Testcontainers', 'CI/CD com GitHub Actions + Railway'],
  },
  {
    phase: 2, label: 'Em andamento', color: 'var(--accent)', bg: 'var(--accent-bg)',
    title: 'Notificações e alertas',
    desc: 'Sistema de alertas proativos para eventos críticos de embarque.',
    items: ['Webhook para eventos', 'E-mail e WhatsApp em atrasos', 'Alertas de SLA', 'Dashboard de risco consolidado'],
  },
  {
    phase: 3, label: 'Planejado', color: 'var(--amber)', bg: 'var(--amber-bg)',
    title: 'Documentação e integração',
    desc: 'Gestão de documentos e integrações com sistemas de freight forwarding.',
    items: ['Upload de documentos', 'Checklist por embarque', 'Integração EDI carriers', 'Portal do cliente white-label'],
  },
]

const TECH = ['Java 21', 'Spring Boot 3.3', 'PostgreSQL 16', 'Redis', 'RabbitMQ', 'JUnit 5', 'Testcontainers', 'Next.js 15', 'TypeScript', 'Docker', 'GitHub Actions', 'Railway']

export default function FreightFlowPage() {
  const [activeScreen, setActiveScreen] = useState('dashboard')
  const current = SCREENS.find((screen) => screen.id === activeScreen) ?? SCREENS[0]

  const openWhatsApp = () => {
    const msg = 'Olá, Kauê! Tenho interesse no FreightFlow para gestão de embarques. Pode me contar mais?'
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="page-shell">
      <Nav />

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker">
                <span className="badge badge-blue">SaaS · LogTech</span>
                <span className="chip">Para freight forwarders e operadores logísticos</span>
              </div>

              <h1 className="hero-title">
                Gestão de embarques <span style={{ color: 'var(--accent)' }}>marítimos em tempo real</span>
              </h1>

              <p className="hero-body">
                Para operações que precisam acompanhar embarques, monitorar navios no mapa e oferecer tracking público com uma apresentação mais profissional e mais confortável no mobile.
              </p>

              <div className="hero-actions">
                <button className="btn btn-wha" onClick={openWhatsApp}>
                  <WhatsAppIcon /> Quero o FreightFlow
                </button>
              </div>

              <div className="stat-grid">
                {[
                  { value: '110+', label: 'embarques reais' },
                  { value: '26', label: 'navios rastreados', highlight: true },
                  { value: '59+', label: 'testes passando' },
                ].map((stat) => (
                  <div key={stat.label} className={`stat-card${stat.highlight ? ' highlight' : ''}`}>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <LightboxGallery
              items={SCREENS}
              activeId={activeScreen}
              onChange={setActiveScreen}
              productName="FreightFlow"
              quickIds={['dashboard', 'fleetmap', 'tracking-detail', 'tracking-public']}
            />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Conheça o sistema"
              title="Screenshots clicáveis e leitura mais confortável da operação"
              description="Mantive o conteúdo principal, mas a navegação entre telas ficou mais clara e as screenshots agora abrem ampliadas para análise em desktop e mobile."
            />

            <div className="screen-layout">
              <div>
                <LightboxGallery
                  items={SCREENS}
                  activeId={activeScreen}
                  onChange={setActiveScreen}
                  productName="FreightFlow"
                />
              </div>

              <aside className="panel">
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.55rem' }}>{current.label}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{current.desc}</p>

                <div className="screen-list">
                  {SCREENS.map((screen) => (
                    <button
                      key={screen.id}
                      type="button"
                      className={`screen-list-item ${screen.id === activeScreen ? 'active' : ''}`}
                      onClick={() => setActiveScreen(screen.id)}
                    >
                      <span style={{ flex: 1, fontWeight: screen.id === activeScreen ? 700 : 500 }}>
                        {screen.label}
                      </span>
                      {screen.id === activeScreen ? <span style={{ color: 'var(--accent)' }}>→</span> : null}
                    </button>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <SectionHeader
              eyebrow="O que está incluso"
              title="Funcionalidades e prova técnica mais bem equilibradas"
              description="A página continua mostrando o produto e a base técnica, mas agora com melhor ritmo visual e menos cara de vitrine estática."
            />

            <div className="feature-grid" style={{ marginBottom: '1.5rem' }}>
              {FEATURES.map((feature) => (
                <div key={feature.title} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-title">{feature.title}</div>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="panel">
              <SectionHeader
                eyebrow="Stack técnico"
                title="Base pronta para evolução"
                description="Sem exagerar no jargão, mas deixando claro que a solução já nasce com arquitetura e deploy de nível profissional."
              />
              <div className="chip-list">
                {TECH.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Onde estamos"
              title="Roadmap com foco em evolução comercial e operacional"
              description="A estrutura foi simplificada para ajudar o visitante a entender o estágio atual do produto sem perder densidade."
            />

            <div className="process-steps">
              {ROADMAP.map((phase, index) => (
                <div key={phase.phase} className="roadmap-item">
                  <div className="roadmap-phase">
                    <div className="roadmap-num" style={{ background: phase.bg, color: phase.color }}>
                      {phase.phase}
                    </div>
                    {index < ROADMAP.length - 1 ? <div className="roadmap-line" /> : null}
                  </div>
                  <div style={{ paddingBottom: '1rem', flex: 1 }}>
                    <div className="roadmap-tag" style={{ color: phase.color }}>{phase.label}</div>
                    <div className="roadmap-title">{phase.title}</div>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>{phase.desc}</p>
                    <div className="roadmap-items-list">
                      {phase.items.map((item) => (
                        <span key={item} className="roadmap-chip">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="container">
          <div className="cta-section">
            <h2>Interessado no FreightFlow?</h2>
            <p>Se você opera embarques marítimos e quer apresentar isso melhor para clientes e equipe, seguimos a conversa no WhatsApp.</p>
            <button className="btn btn-wha" onClick={openWhatsApp}>
              <WhatsAppIcon /> Quero uma demo
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
