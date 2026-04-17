'use client'
import { useState } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const PHONE = '5513988026188'

const WhaIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const PRODUCTS = [
  {
    id: 'pulsops',
    name: 'PulsOps',
    icon: '⚡',
    iconBg: 'var(--purple-bg)',
    badge: 'Automação',
    badgeClass: 'badge-purple',
    tagline: 'Automação operacional via WhatsApp',
    desc: 'Para clínicas e farmácias: confirmação automática de consultas, lembretes, triagem e atendimento sem esforço manual.',
    features: ['WhatsApp + IA (n8n + Evolution API)', 'Confirmação e cancelamento automático', 'Conformidade com LGPD', 'Dashboard com métricas de atendimento'],
    externalUrl: 'https://pulsops.vercel.app/',
    internalPath: null,
  },
  {
    id: 'dev',
    name: 'Sites & Aplicações',
    icon: '🛠',
    iconBg: 'var(--green-bg)',
    badge: 'Dev sob medida',
    badgeClass: 'badge-green',
    tagline: 'Do briefing ao ar em tempo recorde',
    desc: 'Landing pages, sites institucionais e aplicações web completas. Stack moderna, processo transparente e suporte pós-entrega.',
    features: ['Landing pages a partir de R$ 800', 'Sites institucionais com CMS', 'Aplicações web completas', '30 dias de suporte incluso'],
    externalUrl: null,
    internalPath: '/servicos-dev',
  },
  {
    id: 'englishai',
    name: 'EnglishAI',
    icon: '🎓',
    iconBg: 'var(--amber-bg)',
    badge: 'EdTech',
    badgeClass: 'badge-amber',
    tagline: 'Inglês do A1 ao C1 com IA como tutor',
    desc: 'Trilhas personalizadas para Cotidiano, Trabalho e Tecnologia. Exercícios adaptativos, tutor de conversação 24h e plano gratuito.',
    features: ['Progressão A1→C1 estruturada', 'Tutor de conversação com IA 24h', 'Correção de escrita em tempo real', 'Plano gratuito disponível'],
    externalUrl: 'https://www.english-ai.com.br',
    internalPath: null,
  },
  {
    id: 'freightflow',
    name: 'FreightFlow',
    icon: '🚢',
    iconBg: 'var(--accent-bg)',
    badge: 'SaaS · LogTech',
    badgeClass: 'badge-blue',
    tagline: 'Gestão de embarques marítimos',
    desc: 'Para freight forwarders e operadores logísticos: tracking em tempo real, dashboard operacional, mapa de frota e RBAC completo.',
    features: ['Shipment Dashboard com 110+ embarques', 'Fleet Map em tempo real', 'Tracking público por booking', 'RBAC com 4 níveis (Admin/Operator/Viewer/Client)'],
    externalUrl: null,
    internalPath: '/freightflow',
  },
  {
    id: 'condohub',
    name: 'CondoHub',
    icon: '🏢',
    iconBg: 'var(--pink-bg)',
    badge: 'SaaS · PropTech',
    badgeClass: 'badge-pink',
    tagline: 'Gestão completa de condomínios',
    desc: 'Sistema multi-tenant para síndicos e administradoras: moradores, financeiro, reservas, vagas, assembleias e auditoria.',
    features: ['Multi-condomínio com isolamento por tenant', 'Financeiro com Pix/boleto via Asaas', 'Portal por perfil (síndico, morador, portaria)', 'Auditoria completa de todas as ações'],
    externalUrl: null,
    internalPath: '/condohub',
  },
]

export default function Home() {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const selectedNames = PRODUCTS.filter(p => selected.has(p.id)).map(p => p.name)

  const sendWha = () => {
    const msg = `Olá, Kauê! Tenho interesse em: ${selectedNames.join(', ')}. Pode me contar mais?`
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ padding: '5rem 0 4rem', borderBottom: '1px solid var(--border)', background: 'var(--bg-card)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-blue" style={{ marginBottom: '1.25rem' }}>Santos, SP · Desenvolvimento & Produtos Digitais</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>
            Tecnologia que<br />
            <span style={{ color: 'var(--accent)' }}>resolve de verdade</span>
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: 1.65 }}>
            Produtos SaaS prontos, automação inteligente e desenvolvimento sob medida para o seu negócio crescer com eficiência.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-wha" onClick={() => window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent('Olá, Kauê! Quero saber mais sobre seus produtos e serviços.')}`, '_blank')}>
              <WhaIcon /> Falar no WhatsApp
            </button>
            <Link href="/servicos-dev" className="btn btn-ghost">
              Ver serviços de dev →
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section" id="produtos">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              Selecione o que você precisa
            </p>
            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>
              Produtos & Serviços
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
            {PRODUCTS.map(product => {
              const isSel = selected.has(product.id)
              return (
                <div
                  key={product.id}
                  onClick={() => toggle(product.id)}
                  style={{
                    background: isSel ? 'var(--accent-bg)' : 'var(--bg-card)',
                    border: isSel ? '2px solid var(--accent)' : '1px solid var(--border)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
                    position: 'relative',
                  }}
                >
                  {/* Check */}
                  <div style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: isSel ? 'none' : '1.5px solid var(--border-strong)',
                    background: isSel ? 'var(--accent)' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {isSel && <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: product.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                      {product.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem' }}>{product.name}</div>
                      <span className={`badge ${product.badgeClass}`} style={{ fontSize: '10px', padding: '2px 8px', marginTop: '2px' }}>{product.badge}</span>
                    </div>
                  </div>

                  <div>
                    <div style={{ fontWeight: 500, fontSize: '0.85rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>{product.tagline}</div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{product.desc}</p>
                  </div>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px', paddingTop: '0.75rem', borderTop: '1px solid var(--border)' }}>
                    {product.features.map((f, i) => (
                      <li key={i} style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                        <span style={{ display: 'block', width: '4px', height: '4px', minWidth: '4px', borderRadius: '50%', background: 'var(--text-muted)', marginTop: '6px' }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* External/Internal link */}
                  <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem' }} onClick={e => e.stopPropagation()}>
                    {product.externalUrl && (
                      <a href={product.externalUrl} target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        ↗ Visitar site
                      </a>
                    )}
                    {product.internalPath && (
                      <Link href={product.internalPath} style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 500 }}>
                        Ver detalhes →
                      </Link>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="container">
        <div className="cta-section">
          <h2>Tem um projeto em mente?</h2>
          <p>Me conta no WhatsApp. Respondo rápido e sem enrolação.</p>
          <button className="btn btn-wha" onClick={() => window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent('Olá, Kauê! Tenho um projeto que quero discutir com você.')}`, '_blank')}>
            <WhaIcon size={16} /> Iniciar conversa
          </button>
        </div>
      </div>

      <Footer />

      {/* SELECTION BAR */}
      {selected.size > 0 && (
        <div className="sel-bar">
          <div className="sel-bar-inner">
            <div className="sel-bar-info">
              <div className="sel-bar-count">{selected.size} {selected.size === 1 ? 'serviço selecionado' : 'serviços selecionados'}</div>
              <div className="sel-bar-names">{selectedNames.join(' · ')}</div>
            </div>
            <button className="btn btn-wha" onClick={sendWha}>
              <WhaIcon /> Falar sobre isso
            </button>
          </div>
        </div>
      )}
    </>
  )
}
