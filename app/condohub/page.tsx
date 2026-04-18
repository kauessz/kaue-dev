'use client'

import { useState } from 'react'
import Footer from '../../components/Footer'
import LightboxGallery from '../../components/LightboxGallery'
import Nav from '../../components/Nav'
import SectionHeader from '../../components/SectionHeader'
import WhatsAppIcon from '../../components/WhatsAppIcon'

const PHONE = '5513988026188'

const SCREENS = [
  { id: 'login', label: 'Login', url: 'condohub.app/login', file: 'condohub-login.png', desc: 'Tela de acesso seguro com autenticação JWT.' },
  { id: 'dashboard', label: 'Dashboard', url: 'condohub.app/dashboard', file: 'condohub-dashboard.png', desc: 'Visão geral da operação e dos principais módulos do condomínio.' },
  { id: 'moradores', label: 'Moradores', url: 'condohub.app/moradores', file: 'condohub-moradores.png', desc: 'Gestão completa de moradores por unidade e bloco.' },
  { id: 'reservas', label: 'Reservas', url: 'condohub.app/reservas', file: 'condohub-reservas.png', desc: 'Agendamento de áreas comuns com regras e aprovação configurável.' },
  { id: 'os', label: 'Ordens de Serviço', url: 'condohub.app/os', file: 'condohub-os.png', desc: 'Chamados de manutenção com SLA, prioridade e acompanhamento.' },
  { id: 'vagas', label: 'Vagas', url: 'condohub.app/vagas', file: 'condohub-vagas.png', desc: 'Sorteio e gestão de vagas de estacionamento com histórico.' },
  { id: 'assembleias', label: 'Assembleias', url: 'condohub.app/assembleias', file: 'condohub-assembleias.png', desc: 'Reuniões digitais com pauta, votação e registro da sessão.' },
  { id: 'financeiro', label: 'Financeiro', url: 'condohub.app/financeiro', file: 'condohub-financeiro.png', desc: 'Cobranças, inadimplência, gráficos e histórico financeiro.' },
  { id: 'auditoria', label: 'Auditoria', url: 'condohub.app/auditoria', file: 'condohub-auditoria.png', desc: 'Log completo de todas as ações por módulo e usuário.' },
]

const FEATURES = [
  { icon: '🏗️', title: 'Multi-tenant', desc: 'Cada condomínio é isolado. Síndicos e administradoras enxergam só o que importa para sua operação.' },
  { icon: '👥', title: 'Perfis de acesso', desc: 'Super Admin, Administrador, Síndico, Zelador, Morador e Portaria com permissões claras.' },
  { icon: '💰', title: 'Financeiro completo', desc: 'Cobranças recorrentes, pagamentos, inadimplência por bloco e relatórios operacionais.' },
  { icon: '📅', title: 'Reservas inteligentes', desc: 'Áreas comuns com política configurável de horário, duração e aprovação.' },
  { icon: '🔧', title: 'Ordens de Serviço', desc: 'Abertura, acompanhamento e encerramento de chamados com SLA e prioridade.' },
  { icon: '🅿️', title: 'Sorteio de vagas', desc: 'Distribuição justa de vagas com vigência e histórico de atribuições.' },
  { icon: '🗳️', title: 'Assembleias', desc: 'Pautas, sessão, votação digital e encerramento em um fluxo consistente.' },
  { icon: '📋', title: 'Auditoria completa', desc: 'Linha do tempo das ações para rastreabilidade, governança e segurança.' },
]

const ROADMAP = [
  {
    phase: 1, label: 'Concluído', color: 'var(--green)', bg: 'var(--green-bg)',
    title: 'Core do sistema',
    desc: 'Base sólida com autenticação, multi-tenant, RBAC e módulos principais em operação.',
    items: ['Login JWT + RBAC 6 perfis', 'Multi-tenant com isolamento', 'Dashboard de condomínios', 'Moradores e unidades', 'Visitantes e portaria', 'Reservas de áreas comuns', 'Ordens de Serviço', 'Vagas com sorteio', 'Assembleias e votação', 'Auditoria completa'],
  },
  {
    phase: 2, label: 'Em andamento', color: 'var(--accent)', bg: 'var(--accent-bg)',
    title: 'Financeiro e pagamentos',
    desc: 'Módulo financeiro completo com integração Asaas para boleto e Pix.',
    items: ['Cobranças recorrentes', 'Integração Asaas', 'Relatórios financeiros PDF', 'Notificações de vencimento', 'Portal do morador'],
  },
  {
    phase: 3, label: 'Planejado', color: 'var(--amber)', bg: 'var(--amber-bg)',
    title: 'Comunicação e notificações',
    desc: 'Canal de comunicação entre síndico e moradores com notificações e mural.',
    items: ['Mural de avisos', 'Notificações por e-mail/push', 'Comunicados por bloco', 'App mobile', 'Enquetes para moradores'],
  },
]

export default function CondoHubPage() {
  const [activeScreen, setActiveScreen] = useState('dashboard')
  const current = SCREENS.find((screen) => screen.id === activeScreen) ?? SCREENS[0]

  const openWhatsApp = () => {
    const msg = 'Olá, Kauê! Tenho interesse no CondoHub para gestão do meu condomínio. Pode me contar mais?'
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
                <span className="badge badge-pink">SaaS · PropTech</span>
                <span className="chip">Para síndicos e administradoras</span>
              </div>

              <h1 className="hero-title">
                Gestão completa <span style={{ color: 'var(--pink)' }}>de condomínios</span>
              </h1>

              <p className="hero-body">
                Sistema multi-tenant para síndicos e administradoras com moradores, financeiro, reservas, vagas, assembleias e auditoria em uma experiência mais clara e operacional.
              </p>

              <div className="hero-actions">
                <button className="btn btn-wha" onClick={openWhatsApp}>
                  <WhatsAppIcon /> Quero o CondoHub
                </button>
              </div>

              <div className="stat-grid">
                {[
                  { value: '6', label: 'perfis de acesso' },
                  { value: '9', label: 'módulos mostrados nesta página', highlight: true },
                  { value: '1', label: 'operação centralizada por condomínio' },
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
              productName="CondoHub"
              quickIds={['login', 'dashboard', 'financeiro', 'auditoria']}
            />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Conheça o sistema"
              title="Telas que explicam o produto sem depender de zoom"
              description="A navegação entre screenshots ficou mais simples no mobile e agora cada imagem pode ser ampliada com lightbox para uma leitura confortável."
            />

            <div className="screen-layout">
              <div>
                <LightboxGallery
                  items={SCREENS}
                  activeId={activeScreen}
                  onChange={setActiveScreen}
                  productName="CondoHub"
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
              title="Funcionalidades com hierarquia melhor definida"
              description="Os módulos principais agora aparecem com o mesmo padrão visual e leitura mais previsível entre desktop e mobile."
            />
            <div className="feature-grid">
              {FEATURES.map((feature) => (
                <div key={feature.title} className="feature-item">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-title">{feature.title}</div>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Onde estamos"
              title="Roadmap com leitura mais fluida"
              description="Mantive a proposta original, mas organizei o progresso em uma sequência mais limpa e com chips mais consistentes."
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
            <h2>Pronto para modernizar seu condomínio?</h2>
            <p>Se fizer sentido, seguimos por WhatsApp com contexto claro do produto, escopo e próximos passos.</p>
            <button className="btn btn-wha" onClick={openWhatsApp}>
              <WhatsAppIcon /> Quero o CondoHub
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
