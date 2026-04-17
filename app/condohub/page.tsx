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
  { id: 'login', label: 'Login', url: 'condohub.app/login', file: 'condohub-login.png', desc: 'Tela de acesso seguro com autenticação JWT' },
  { id: 'dashboard', label: 'Dashboard', url: 'condohub.app/dashboard', file: 'condohub-dashboard.png', desc: 'Visão geral de todos os condomínios gerenciados' },
  { id: 'moradores', label: 'Moradores', url: 'condohub.app/moradores', file: 'condohub-moradores.png', desc: 'Gestão completa de moradores por unidade e bloco' },
  { id: 'reservas', label: 'Reservas', url: 'condohub.app/reservas', file: 'condohub-reservas.png', desc: 'Agendamento de áreas comuns com aprovação configurável' },
  { id: 'os', label: 'Ordens de Serviço', url: 'condohub.app/os', file: 'condohub-os.png', desc: 'Chamados de manutenção com SLA e prioridade' },
  { id: 'vagas', label: 'Vagas', url: 'condohub.app/vagas', file: 'condohub-vagas.png', desc: 'Sorteio e gestão de vagas de estacionamento' },
  { id: 'assembleias', label: 'Assembleias', url: 'condohub.app/assembleias', file: 'condohub-assembleias.png', desc: 'Reuniões digitais com pauta e votação integradas' },
  { id: 'financeiro', label: 'Financeiro', url: 'condohub.app/financeiro', file: 'condohub-financeiro.png', desc: 'Cobranças, inadimplência, gráficos e histórico financeiro' },
  { id: 'auditoria', label: 'Auditoria', url: 'condohub.app/auditoria', file: 'condohub-auditoria.png', desc: 'Log completo de todas as ações por módulo e usuário' },
]

const FEATURES = [
  { icon: '🏗️', title: 'Multi-tenant', desc: 'Cada condomínio é isolado. Um síndico só vê o que é dele. Administradoras gerenciam múltiplos condomínios numa conta.' },
  { icon: '👥', title: '6 perfis de acesso', desc: 'Super Admin, Administrador, Síndico, Zelador, Morador e Portaria — cada um com permissões precisas.' },
  { icon: '💰', title: 'Financeiro completo', desc: 'Cobranças recorrentes, registro de pagamentos, gráficos de inadimplência por bloco e evolução mensal.' },
  { icon: '📅', title: 'Reservas inteligentes', desc: 'Áreas comuns com política configurável: horário, duração máxima, aprovação automática ou manual.' },
  { icon: '🔧', title: 'Ordens de Serviço', desc: 'Abertura, acompanhamento e encerramento de chamados com SLA e prioridade (Alta, Média, Baixa).' },
  { icon: '🅿️', title: 'Sorteio de vagas', desc: 'Sorteio justo de vagas de estacionamento com registro de vigência e histórico de atribuições.' },
  { icon: '🗳️', title: 'Assembleias', desc: 'Criação de pautas, abertura de sessão, votação digital e encerramento — tudo registrado.' },
  { icon: '📋', title: 'Auditoria completa', desc: 'Linha do tempo de todas as ações: quem fez, o que fez, quando e em qual condomínio.' },
]

const ROADMAP = [
  {
    phase: 1, label: 'Concluído', color: 'var(--green)', bg: 'var(--green-bg)',
    title: 'Core do sistema',
    desc: 'Base sólida com autenticação, multi-tenant, RBAC e módulos principais.',
    items: ['Login JWT + RBAC 6 perfis', 'Multi-tenant com isolamento', 'Dashboard de condomínios', 'Moradores & Unidades', 'Visitantes & Portaria', 'Reservas de áreas comuns', 'Ordens de Serviço', 'Vagas com sorteio', 'Assembleias & votação', 'Auditoria completa'],
  },
  {
    phase: 2, label: 'Em andamento', color: 'var(--accent)', bg: 'var(--accent-bg)',
    title: 'Financeiro & Pagamentos',
    desc: 'Módulo financeiro completo com integração Asaas para boleto e Pix.',
    items: ['Cobranças recorrentes', 'Integração Asaas (Pix/boleto)', 'Relatórios financeiros PDF', 'Notificações de vencimento', 'Portal do morador'],
  },
  {
    phase: 3, label: 'Planejado', color: 'var(--amber)', bg: 'var(--amber-bg)',
    title: 'Comunicação & Notificações',
    desc: 'Canal de comunicação entre síndico e moradores com notificações push.',
    items: ['Mural de avisos', 'Notificações por e-mail/push', 'Comunicados por bloco/unidade', 'App mobile (React Native)', 'Enquetes para moradores'],
  },
  {
    phase: 4, label: 'Futuro', color: 'var(--text-muted)', bg: 'var(--bg-subtle)',
    title: 'IA & Automação',
    desc: 'Inteligência artificial para gestão preditiva e automação de processos.',
    items: ['Previsão de inadimplência', 'Chatbot para moradores', 'Relatórios automáticos', 'Integração com câmeras', 'Reconhecimento facial na portaria'],
  },
]

export default function CondoHubPage() {
  const [activeScreen, setActiveScreen] = useState('dashboard')
  const current = SCREENS.find(s => s.id === activeScreen)!

  const wha = () => {
    const msg = 'Olá, Kauê! Tenho interesse no CondoHub para gestão do meu condomínio. Pode me contar mais?'
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
                <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'var(--pink-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>🏢</div>
                <span className="badge badge-pink">SaaS · PropTech</span>
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: '1rem' }}>
                Gestão completa<br />
                <span style={{ color: 'var(--pink)' }}>de condomínios</span>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem', maxWidth: '440px' }}>
                Sistema multi-tenant para síndicos e administradoras. Moradores, financeiro, reservas, vagas, assembleias e auditoria em um só lugar.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button className="btn btn-wha" onClick={wha}>
                  <WhaIcon /> Quero o CondoHub
                </button>
              </div>
            </div>

            {/* Live screenshot */}
            <div>
              <div style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['login', 'dashboard', 'financeiro', 'auditoria'].map(id => (
                  <button key={id} className={`ss-tab ${activeScreen === id ? 'active' : ''}`} onClick={() => setActiveScreen(id)}>
                    {SCREENS.find(s => s.id === id)?.label}
                  </button>
                ))}
              </div>
              <div className="screenshot-frame">
                <div className="screenshot-bar">
                  <div className="dot" />
                  <div className="dot" />
                  <div className="dot" />
                  <div className="url-bar">{current.url}</div>
                </div>
                <Image
                  src={`/screenshots/${current.file}`}
                  alt={`CondoHub - ${current.label}`}
                  width={900}
                  height={600}
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
                alt={`CondoHub - ${current.label}`}
                width={1200}
                height={800}
                style={{ borderRadius: 'var(--radius-md)', width: '100%', height: 'auto', border: '1px solid var(--border)' }}
              />
            </div>

            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{current.label}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem', fontSize: '0.9rem' }}>{current.desc}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {SCREENS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setActiveScreen(s.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '0.7rem 1rem',
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

      {/* ROADMAP */}
      <section className="section">
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
          <h2>Pronto para modernizar seu condomínio?</h2>
          <p>Me chama no WhatsApp e conversamos sobre como implementar o CondoHub no seu condomínio.</p>
          <button className="btn btn-wha" onClick={wha}>
            <WhaIcon /> Quero o CondoHub
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}
