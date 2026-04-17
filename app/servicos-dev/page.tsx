'use client'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const PHONE = '5513988026188'

const WhaIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

function sendWha(msg: string) {
  if (typeof window !== 'undefined') {
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank')
  }
}

const PROCESS = [
  {
    num: 1,
    title: 'Briefing & escopo',
    desc: 'Conversa no WhatsApp ou videochamada para entender o que você precisa, o público, e o que o projeto precisa entregar. Sem formulários, sem burocracia.',
    time: '1–2 dias',
  },
  {
    num: 2,
    title: 'Proposta & aprovação',
    desc: 'Documento com escopo detalhado, prazo, preço e tecnologias. Você aprova via WhatsApp. Sem surpresas depois.',
    time: '1 dia',
  },
  {
    num: 3,
    title: 'Desenvolvimento com acompanhamento',
    desc: 'Entregas parciais em etapas. Você acompanha o progresso, testa e dá feedback antes da entrega final. Comunicação direta, sem intermediários.',
    time: '5–21 dias úteis',
  },
  {
    num: 4,
    title: 'Deploy & entrega',
    desc: 'Publicação no ar com domínio próprio, CI/CD configurado, DNS apontado e documentação básica de uso. Você recebe tudo funcionando.',
    time: '1–2 dias',
  },
  {
    num: 5,
    title: 'Suporte pós-entrega',
    desc: '30 dias de suporte incluso para ajustes, dúvidas e correções após a entrega. Para projetos maiores, há planos de retainer mensal.',
    time: '30 dias incluso',
  },
]

const PRICING = [
  {
    name: 'Landing Page',
    price: 'R$ 800',
    suffix: 'a partir de',
    desc: 'Página única responsiva com foco em conversão. Ideal para produto, serviço ou evento.',
    items: [
      'Design personalizado para sua marca',
      'Formulário de contato funcional',
      'SEO básico (meta tags, OG, sitemap)',
      'Deploy em Vercel + domínio próprio',
      'Responsivo (mobile-first)',
      '30 dias de suporte incluso',
    ],
    featured: false,
  },
  {
    name: 'Site Institucional',
    price: 'R$ 2.200',
    suffix: 'a partir de',
    desc: 'Até 5 páginas com painel CMS para você editar textos e imagens sem precisar de desenvolvedor.',
    items: [
      'Tudo da Landing Page',
      'Até 5 páginas (Home, Sobre, Serviços, Blog, Contato)',
      'CMS para edição de conteúdo sem código',
      'Blog opcional com categorias',
      'Google Analytics integrado',
      'Performance otimizada (Core Web Vitals)',
    ],
    featured: true,
  },
  {
    name: 'Aplicação Web',
    price: 'R$ 4.500',
    suffix: 'a partir de',
    desc: 'Sistema completo com autenticação, banco de dados, painel administrativo e API documentada.',
    items: [
      'Backend API REST (Java/Spring Boot ou Node)',
      'Frontend React/Next.js',
      'Autenticação JWT + controle de perfis',
      'Banco de dados PostgreSQL',
      'API documentada (OpenAPI/Swagger)',
      'CI/CD + Railway/Vercel',
    ],
    featured: false,
  },
]

const RETAINER = [
  {
    name: 'Básico',
    price: 'R$ 350',
    suffix: '/mês',
    desc: 'Para sites estáticos com poucos ajustes.',
    items: [
      'Até 3h de ajustes/mês',
      'Atualização de textos e imagens',
      'Monitoramento de uptime',
      'Resposta em até 48h',
    ],
  },
  {
    name: 'Standard',
    price: 'R$ 750',
    suffix: '/mês',
    desc: 'Para sites dinâmicos e aplicações em produção.',
    items: [
      'Até 8h de ajustes/mês',
      'Novas funcionalidades pequenas',
      'Atualização de dependências',
      'Backup semanal',
      'Resposta em até 24h',
    ],
    featured: true,
  },
  {
    name: 'Full',
    price: 'R$ 1.500',
    suffix: '/mês',
    desc: 'Para aplicações críticas com evolução contínua.',
    items: [
      'Até 20h de ajustes/mês',
      'Novas features e módulos',
      'Monitoramento 24/7',
      'Prioridade no atendimento',
      'Reunião mensal de alinhamento',
    ],
  },
]

const TECHS = [
  { label: 'Frontend', items: ['Next.js 15', 'React 18', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'] },
  { label: 'Backend', items: ['Java 21 + Spring Boot 3', 'Node.js + Fastify', 'PostgreSQL', 'Redis', 'Docker'] },
  { label: 'Infra & Deploy', items: ['Vercel', 'Railway', 'GitHub Actions (CI/CD)', 'Cloudflare DNS'] },
  { label: 'CMS & Extras', items: ['Sanity CMS', 'Contentful', 'Supabase', 'Stripe / Asaas'] },
]

export default function ServicosDev() {
  const whaOrcamento = () => sendWha('Olá, Kauê! Quero solicitar um orçamento de desenvolvimento. Pode me ajudar?')
  const whaRetainer = () => sendWha('Olá, Kauê! Tenho interesse em um plano de manutenção mensal para meu projeto. Qual seria a opção mais adequada?')

  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ padding: '5rem 0 4rem', borderBottom: '1px solid var(--border)', background: 'var(--bg-card)' }}>
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <span className="badge badge-green" style={{ marginBottom: '1.25rem' }}>Desenvolvimento sob medida</span>
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.1 }}>
              Do briefing ao ar<br />
              <span style={{ color: 'var(--green)' }}>em tempo recorde</span>
            </h1>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem', maxWidth: '520px' }}>
              Processo transparente, prazos reais e entrega que funciona. Sem surpresas no meio do caminho e sem "tá mas e o dinheiro" no final.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button className="btn btn-wha" onClick={whaOrcamento}>
                <WhaIcon /> Quero um orçamento
              </button>
              <a href="#processo" className="btn btn-ghost">Ver processo →</a>
            </div>
          </div>

          {/* Quick stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginTop: '3.5rem', maxWidth: '680px' }}>
            {[
              { num: '15+', label: 'Anos em logística' },
              { num: '5+', label: 'Projetos entregues' },
              { num: '30d', label: 'Suporte incluso' },
              { num: '100%', label: 'Entrega no prazo' },
            ].map((stat, i) => (
              <div key={i} style={{ padding: '1rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800 }}>{stat.num}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="processo">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Como funciona</p>
            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>Processo de trabalho</h2>
          </div>
          <div style={{ maxWidth: '640px' }}>
            <div className="process-steps">
              {PROCESS.map((step) => (
                <div key={step.num} className="process-step">
                  <div className="step-num">{step.num}</div>
                  <div>
                    <div className="step-title">{step.title}</div>
                    <p className="step-desc">{step.desc}</p>
                    <span className="step-time">{step.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="precos" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Investimento</p>
            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>Precificação</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Valores base. Projetos com escopo específico recebem proposta personalizada.
            </p>
          </div>
          <div className="pricing-grid">
            {PRICING.map((plan, i) => (
              <div key={i} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>Mais pedido</span>}
                <div className="pricing-name">{plan.name}</div>
                <div className="pricing-price">
                  {plan.price} <small>{plan.suffix}</small>
                </div>
                <p className="pricing-desc">{plan.desc}</p>
                <div className="pricing-items">
                  {plan.items.map((item, j) => (
                    <div key={j} className="pricing-item">{item}</div>
                  ))}
                </div>
                <button
                  className={`btn ${plan.featured ? 'btn-accent' : 'btn-ghost'}`}
                  style={{ marginTop: '1rem', justifyContent: 'center' }}
                  onClick={() => sendWha(`Olá, Kauê! Tenho interesse no plano ${plan.name} (${plan.price}). Pode me dar mais detalhes?`)}
                >
                  Solicitar orçamento
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CMS EXPLANATION */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>CMS? O que é isso?</p>
              <h2 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: '1rem' }}>
                Você edita o site<br />sem precisar de mim
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1rem', fontSize: '0.9rem' }}>
                CMS (Content Management System) é um painel simples onde você edita o conteúdo do seu site — textos, imagens, posts do blog — sem precisar mexer em código ou chamar um desenvolvedor.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                Pensa como um Google Docs para o seu site: você acessa, edita, salva e o site atualiza automaticamente. Uso ferramentas como Sanity ou Contentful, que são intuitivas e em português.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { icon: '✏️', text: 'Edite textos e imagens sem código' },
                  { icon: '📝', text: 'Publique posts no blog pela interface' },
                  { icon: '🔐', text: 'Acesso protegido com login próprio' },
                  { icon: '📱', text: 'Funciona no celular também' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <span>{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Mock CMS screen */}
            <div className="screenshot-frame">
              <div className="screenshot-bar">
                <div className="dot" /><div className="dot" /><div className="dot" />
                <div className="url-bar">seusite.sanity.studio</div>
              </div>
              <div style={{ background: '#f9fafb', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', padding: '1rem' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: 500 }}>PAINEL DE CONTEÚDO</div>
                {[
                  { label: 'Título da página', value: 'Bem-vindo à Minha Empresa', type: 'text' },
                  { label: 'Subtítulo', value: 'Soluções para o seu negócio crescer', type: 'text' },
                  { label: 'Texto principal', value: 'Somos especialistas em...', type: 'textarea' },
                ].map((field, i) => (
                  <div key={i} style={{ marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{field.label}</div>
                    <div style={{
                      background: '#fff',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.5rem 0.75rem',
                      fontSize: '0.78rem',
                      color: 'var(--text-primary)',
                      minHeight: field.type === 'textarea' ? '60px' : 'auto',
                    }}>
                      {field.value}
                    </div>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem' }}>
                  <div style={{ padding: '5px 14px', background: '#e5e7eb', borderRadius: '100px', fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Cancelar</div>
                  <div style={{ padding: '5px 14px', background: 'var(--accent)', borderRadius: '100px', fontSize: '0.72rem', color: '#fff' }}>Publicar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RETAINER */}
      <section className="section" id="manutencao" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Após a entrega</p>
            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>Planos de manutenção</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Para quem quer evolução contínua sem precisar abrir projeto novo a cada ajuste.
            </p>
          </div>

          <div className="retainer-note">
            💡 <strong>Por que contratar manutenção?</strong> Sites e aplicações precisam de atualizações de segurança, ajustes de conteúdo e pequenas melhorias frequentes. Com um plano mensal, você tem acesso direto ao desenvolvedor sem precisar esperar orçamento novo a cada vez.
          </div>

          <div className="pricing-grid" style={{ marginTop: '1.5rem' }}>
            {RETAINER.map((plan, i) => (
              <div key={i} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>Recomendado</span>}
                <div className="pricing-name">{plan.name}</div>
                <div className="pricing-price">
                  {plan.price} <small>{plan.suffix}</small>
                </div>
                <p className="pricing-desc">{plan.desc}</p>
                <div className="pricing-items">
                  {plan.items.map((item, j) => (
                    <div key={j} className="pricing-item">{item}</div>
                  ))}
                </div>
                <button
                  className={`btn ${plan.featured ? 'btn-accent' : 'btn-ghost'}`}
                  style={{ marginTop: '1rem', justifyContent: 'center' }}
                  onClick={() => sendWha(`Olá, Kauê! Tenho interesse no plano de manutenção ${plan.name} (${plan.price}/mês). Pode me dar mais detalhes?`)}
                >
                  Contratar plano
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Com o que trabalho</p>
            <h2 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>Tecnologias</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {TECHS.map((group, i) => (
              <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '1rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>{group.label}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {group.items.map((item, j) => (
                    <span key={j} style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>· {item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="container">
        <div className="cta-section">
          <h2>Pronto para começar?</h2>
          <p>Me conta o que você precisa no WhatsApp. Respondo rápido, sem formulário, sem enrolação.</p>
          <button
            className="btn btn-wha"
            style={{ cursor: 'pointer', fontSize: '0.95rem' }}
            onClick={whaOrcamento}
          >
            <WhaIcon /> Quero um orçamento
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}
