'use client'

import Link from 'next/link'
import { useState } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import SectionHeader from '../components/SectionHeader'
import WhatsAppIcon from '../components/WhatsAppIcon'

const PHONE = '5513988026188'

const PRODUCTS = [
  {
    id: 'pulsops',
    name: 'PulsOps',
    icon: '⚡',
    iconBg: 'var(--purple-bg)',
    badge: 'Automação',
    badgeClass: 'badge-purple',
    category: 'Produto próprio',
    tagline: 'Automação operacional via WhatsApp',
    desc: 'Para clínicas e farmácias: confirmação automática de consultas, lembretes, triagem e atendimento sem esforço manual.',
    features: ['WhatsApp + IA (n8n + Evolution API)', 'Confirmação e cancelamento automático', 'Conformidade com LGPD', 'Dashboard com métricas de atendimento'],
    externalUrl: 'https://pulsops.vercel.app/',
    internalPath: null,
  },
  {
    id: 'englishai',
    name: 'EnglishAI',
    icon: '🎓',
    iconBg: 'var(--amber-bg)',
    badge: 'EdTech',
    badgeClass: 'badge-amber',
    category: 'Produto próprio',
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
    category: 'Produto próprio',
    tagline: 'Gestão de embarques marítimos',
    desc: 'Para freight forwarders e operadores logísticos: tracking em tempo real, dashboard operacional, mapa de frota e RBAC completo.',
    features: ['Shipment Dashboard com 110+ embarques', 'Fleet Map em tempo real', 'Tracking público por booking', 'RBAC com 4 níveis'],
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
    category: 'Produto próprio',
    tagline: 'Gestão completa de condomínios',
    desc: 'Sistema multi-tenant para síndicos e administradoras: moradores, financeiro, reservas, vagas, assembleias e auditoria.',
    features: ['Multi-condomínio com isolamento por tenant', 'Financeiro com Pix/boleto via Asaas', 'Portal por perfil', 'Auditoria completa de ações'],
    externalUrl: null,
    internalPath: '/condohub',
  },
  {
    id: 'dev',
    name: 'Sites & Aplicações',
    icon: '🛠',
    iconBg: 'var(--green-bg)',
    badge: 'Dev sob medida',
    badgeClass: 'badge-green',
    category: 'Serviço sob medida',
    tagline: 'Do briefing ao ar em tempo recorde',
    desc: 'Landing pages, sites institucionais e aplicações web completas. Stack moderna, processo transparente e suporte pós-entrega.',
    features: ['Landing pages a partir de R$ 800', 'Sites institucionais com CMS', 'Aplicações web completas', '30 dias de suporte incluso'],
    externalUrl: null,
    internalPath: '/servicos-dev',
  },
]

const productItems = PRODUCTS.filter((item) => item.category === 'Produto próprio')
const serviceItems = PRODUCTS.filter((item) => item.category === 'Serviço sob medida')

export default function Home() {
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const selectedNames = PRODUCTS.filter((item) => selected.has(item.id)).map((item) => item.name)

  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const sendSelected = () => {
    const msg = `Olá, Kauê! Tenho interesse em: ${selectedNames.join(', ')}. Pode me contar mais?`
    openWhatsApp(msg)
  }

  return (
    <div className="page-shell">
      <Nav />

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker">
                <span className="badge badge-blue">Santos, SP · Desenvolvimento & Produtos Digitais</span>
                <span className="chip">Produtos SaaS próprios + execução sob medida</span>
              </div>

              <h1 className="hero-title">
                Tecnologia que <span style={{ color: 'var(--accent)' }}>resolve de verdade</span>
              </h1>

              <p className="hero-body">
                Produtos SaaS prontos, automação inteligente e desenvolvimento sob medida para negócios que precisam operar melhor, vender melhor e parecer mais profissionais em cada ponto de contato.
              </p>

              <div className="hero-actions">
                <button
                  className="btn btn-wha"
                  onClick={() => openWhatsApp('Olá, Kauê! Quero saber mais sobre seus produtos e serviços.')}
                >
                  <WhatsAppIcon /> Falar no WhatsApp
                </button>
                <Link href="/servicos-dev" className="btn btn-ghost">
                  Ver serviços de dev
                </Link>
              </div>

              <div className="stat-grid">
                {[
                  { value: '4', label: 'produtos próprios em destaque', highlight: true },
                  { value: '1', label: 'frente de serviço sob medida' },
                  { value: '30d', label: 'suporte incluso em projetos' },
                ].map((stat) => (
                  <div key={stat.label} className={`stat-card${stat.highlight ? ' highlight' : ''}`}>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="hero-panel surface-card">
              <div className="section-header" style={{ marginBottom: '1rem' }}>
                <p className="section-eyebrow">Para quem este site serve</p>
                <h2 className="section-title" style={{ fontSize: '1.65rem' }}>Escolha entre produto pronto ou solução sob medida</h2>
              </div>

              <div className="hero-points">
                <div className="hero-point">
                  <span>✓</span>
                  <span><strong style={{ color: 'var(--text-primary)' }}>Produtos próprios</strong> para operação, gestão e automação com proposta já validada.</span>
                </div>
                <div className="hero-point">
                  <span>✓</span>
                  <span><strong style={{ color: 'var(--text-primary)' }}>Desenvolvimento sob medida</strong> para site, landing page ou aplicação web quando o projeto pede algo específico.</span>
                </div>
                <div className="hero-point">
                  <span>✓</span>
                  <span><strong style={{ color: 'var(--text-primary)' }}>Contato direto</strong> no WhatsApp, sem formulários longos e sem etapa comercial engessada.</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="produtos">
          <div className="container">
            <SectionHeader
              eyebrow="O que você pode contratar"
              title="Produtos próprios e serviços sob medida, agora mais separados e claros"
              description="Selecione o que faz sentido para o seu momento. Você pode combinar produtos com uma entrega personalizada e falar direto comigo depois."
            />

            <div className="choice-layout">
              <div className="product-grid">
                {[...productItems, ...serviceItems].map((product) => {
                  const isSelected = selected.has(product.id)

                  return (
                    <article
                      key={product.id}
                      className={`product-card${isSelected ? ' selected' : ''}`}
                      onClick={() => toggle(product.id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          toggle(product.id)
                        }
                      }}
                      aria-pressed={isSelected}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                          <div
                            className="product-card-icon"
                            style={{ background: product.iconBg, flexShrink: 0 }}
                          >
                            {product.icon}
                          </div>
                          <div>
                            <div className="product-card-title">{product.name}</div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.3rem' }}>
                              <span className={`badge ${product.badgeClass}`}>{product.badge}</span>
                              <span className="chip">{product.category}</span>
                            </div>
                          </div>
                        </div>

                        <div
                          aria-hidden="true"
                          style={{
                            width: '22px',
                            height: '22px',
                            minWidth: '22px',
                            borderRadius: '50%',
                            border: isSelected ? 'none' : '1.5px solid var(--border-strong)',
                            background: isSelected ? 'var(--accent)' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                          }}
                        >
                          {isSelected ? '✓' : ''}
                        </div>
                      </div>

                      <div>
                        <p style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.35rem' }}>{product.tagline}</p>
                        <p className="product-card-desc">{product.desc}</p>
                      </div>

                      <ul style={{ listStyle: 'none', display: 'grid', gap: '0.4rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border)' }}>
                        {product.features.map((feature) => (
                          <li key={feature} className="list-check" style={{ fontSize: '0.8rem' }}>
                            <span style={{ color: 'var(--accent)' }}>•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="product-card-footer" onClick={(event) => event.stopPropagation()}>
                        <div className="product-card-links">
                          {product.externalUrl ? (
                            <a href={product.externalUrl} target="_blank" rel="noreferrer" className="product-card-link">
                              ↗ Visitar site
                            </a>
                          ) : null}
                          {product.internalPath ? (
                            <Link href={product.internalPath} className="product-card-link">
                              Ver detalhes →
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>

              <aside className="panel sticky-summary summary-card">
                <div>
                  <span className="badge badge-green" style={{ marginBottom: '0.9rem' }}>
                    Sua seleção
                  </span>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.45rem' }}>Monte a conversa certa no primeiro contato</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                    Selecione um ou mais itens para eu já entender onde faz mais sentido te ajudar.
                  </p>
                </div>

                <div className="summary-list">
                  {selectedNames.length > 0 ? (
                    selectedNames.map((name) => <span key={name} className="summary-item">{name}</span>)
                  ) : (
                    <span className="chip">Nenhum item selecionado ainda</span>
                  )}
                </div>

                <div className="list-checks">
                  <div className="list-check">
                    <span>1.</span>
                    <span>Produtos próprios para quem quer ver algo mais tangível e próximo de uma demo.</span>
                  </div>
                  <div className="list-check">
                    <span>2.</span>
                    <span>Serviços sob medida para quando o site ou sistema precisa nascer com a sua regra de negócio.</span>
                  </div>
                </div>

                <button className="btn btn-wha" onClick={sendSelected} disabled={selectedNames.length === 0}>
                  <WhatsAppIcon /> Falar sobre isso
                </button>
              </aside>
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container split-grid">
            <div className="panel">
              <SectionHeader
                eyebrow="Produtos próprios"
                title="Para quem prefere começar por algo já estruturado"
                description="CondoHub e FreightFlow têm páginas próprias com telas, escopo, funcionalidade e CTA direto. PulsOps e EnglishAI seguem como produtos externos."
              />
              <div className="chip-list">
                <span className="chip">CondoHub para gestão condominial</span>
                <span className="chip">FreightFlow para logística marítima</span>
                <span className="chip">PulsOps para automação no WhatsApp</span>
                <span className="chip">EnglishAI para educação com IA</span>
              </div>
            </div>

            <div className="panel">
              <SectionHeader
                eyebrow="Serviço sob medida"
                title="Para quem precisa de projeto novo ou evolução contínua"
                description="Landing pages, sites institucionais e aplicações web com processo direto, prazo claro e manutenção opcional depois da entrega."
              />
              <Link href="/servicos-dev" className="btn btn-accent">
                Ver serviços de desenvolvimento
              </Link>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="cta-section">
            <h2>Tem um projeto em mente?</h2>
            <p>Me conta no WhatsApp. A ideia aqui é te ajudar a sair de vitrine estática para presença digital com proposta clara e execução sólida.</p>
            <button
              className="btn btn-wha"
              onClick={() => openWhatsApp('Olá, Kauê! Tenho um projeto que quero discutir com você.')}
            >
              <WhatsAppIcon size={16} /> Iniciar conversa
            </button>
          </div>
        </div>
      </main>

      <Footer />

      {selected.size > 0 ? (
        <div className="sel-bar">
          <div className="sel-bar-inner">
            <div className="sel-bar-info">
              <div className="sel-bar-count">
                {selected.size} {selected.size === 1 ? 'item selecionado' : 'itens selecionados'}
              </div>
              <div className="sel-bar-names">{selectedNames.join(' · ')}</div>
            </div>
            <button className="btn btn-wha" onClick={sendSelected}>
              <WhatsAppIcon /> Falar sobre isso
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
