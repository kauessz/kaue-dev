'use client'

import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import SectionHeader from '../../components/SectionHeader'
import WhatsAppIcon from '../../components/WhatsAppIcon'

const PHONE = '5513988026188'

function openWhatsApp(message: string) {
  if (typeof window !== 'undefined') {
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank')
  }
}

const PROCESS = [
  {
    num: 1,
    title: 'Briefing e escopo',
    desc: 'Conversa no WhatsApp ou videochamada para entender o que precisa ser entregue, para quem e com qual prioridade.',
    time: '1 a 2 dias',
  },
  {
    num: 2,
    title: 'Proposta e aprovação',
    desc: 'Documento com escopo, prazo, investimento e tecnologia. Você aprova com clareza do que entra no projeto.',
    time: '1 dia',
  },
  {
    num: 3,
    title: 'Desenvolvimento com acompanhamento',
    desc: 'Entregas parciais em etapas para você validar cedo, sem sumiço no meio do caminho.',
    time: '5 a 21 dias úteis',
  },
  {
    num: 4,
    title: 'Deploy e entrega',
    desc: 'Publicação no ar com domínio, deploy, ajustes finais e documentação básica de uso.',
    time: '1 a 2 dias',
  },
  {
    num: 5,
    title: 'Suporte pós-entrega',
    desc: '30 dias de suporte incluso para ajustes, dúvidas e correções após a entrega.',
    time: '30 dias inclusos',
  },
]

const PRICING = [
  {
    name: 'Landing Page',
    price: 'R$ 800',
    suffix: 'a partir de',
    desc: 'Página única responsiva com foco em conversão para produto, serviço ou campanha.',
    items: ['Design alinhado à sua marca', 'Formulário de contato funcional', 'SEO básico', 'Deploy em Vercel + domínio próprio', 'Mobile-first de verdade', '30 dias de suporte incluso'],
    featured: false,
  },
  {
    name: 'Site Institucional',
    price: 'R$ 2.200',
    suffix: 'a partir de',
    desc: 'Até 5 páginas com CMS para editar textos e imagens sem depender de desenvolvedor.',
    items: ['Tudo da Landing Page', 'Até 5 páginas', 'CMS para conteúdo sem código', 'Blog opcional', 'Google Analytics integrado', 'Performance otimizada'],
    featured: true,
  },
  {
    name: 'Aplicação Web',
    price: 'R$ 4.500',
    suffix: 'a partir de',
    desc: 'Sistema completo com autenticação, banco de dados, painel administrativo e API documentada.',
    items: ['Backend API REST', 'Frontend React/Next.js', 'Autenticação JWT e perfis', 'PostgreSQL', 'OpenAPI/Swagger', 'CI/CD + Railway/Vercel'],
    featured: false,
  },
]

const RETAINER = [
  {
    name: 'Básico',
    price: 'R$ 350',
    suffix: '/mês',
    desc: 'Para sites estáticos com poucos ajustes e rotina simples.',
    items: ['Até 3h de ajustes/mês', 'Atualização de textos e imagens', 'Monitoramento de uptime', 'Resposta em até 48h'],
  },
  {
    name: 'Standard',
    price: 'R$ 750',
    suffix: '/mês',
    desc: 'Para sites dinâmicos e aplicações em produção que precisam evoluir.',
    items: ['Até 8h de ajustes/mês', 'Novas funcionalidades pequenas', 'Atualização de dependências', 'Backup semanal', 'Resposta em até 24h'],
    featured: true,
  },
  {
    name: 'Full',
    price: 'R$ 1.500',
    suffix: '/mês',
    desc: 'Para aplicações críticas com prioridade e evolução contínua.',
    items: ['Até 20h de ajustes/mês', 'Novas features e módulos', 'Monitoramento 24/7', 'Prioridade no atendimento', 'Reunião mensal de alinhamento'],
  },
]

const TECHS = [
  { label: 'Frontend', items: ['Next.js 15', 'React 18', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'] },
  { label: 'Backend', items: ['Java 21 + Spring Boot 3', 'Node.js + Fastify', 'PostgreSQL', 'Redis', 'Docker'] },
  { label: 'Infra e Deploy', items: ['Vercel', 'Railway', 'GitHub Actions', 'Cloudflare DNS'] },
  { label: 'CMS e Extras', items: ['Sanity CMS', 'Contentful', 'Supabase', 'Stripe / Asaas'] },
]

export default function ServicosDev() {
  return (
    <div className="page-shell">
      <Nav />

      <main>
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker">
                <span className="badge badge-green">Desenvolvimento sob medida</span>
                <span className="chip">Sites, landing pages e aplicações web</span>
              </div>

              <h1 className="hero-title">
                Do briefing ao ar <span style={{ color: 'var(--green)' }}>em tempo recorde</span>
              </h1>

              <p className="hero-body">
                Processo transparente, prazo realista e entrega que funciona. A ideia aqui não é só publicar um site, e sim apresentar melhor o seu negócio e reduzir atrito na sua operação.
              </p>

              <div className="hero-actions">
                <button
                  className="btn btn-wha"
                  onClick={() => openWhatsApp('Olá, Kauê! Quero solicitar um orçamento de desenvolvimento. Pode me ajudar?')}
                >
                  <WhatsAppIcon /> Quero um orçamento
                </button>
                <a href="#processo" className="btn btn-ghost">Ver processo</a>
              </div>

              <div className="stat-grid">
                {[
                  { value: '15+', label: 'anos em logística e operação' },
                  { value: '5+', label: 'projetos entregues', highlight: true },
                  { value: '30d', label: 'suporte pós-entrega incluso' },
                ].map((stat) => (
                  <div key={stat.label} className={`stat-card${stat.highlight ? ' highlight' : ''}`}>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="hero-panel surface-card">
              <SectionHeader
                eyebrow="O que você resolve aqui"
                title="Mais clareza para vender, explicar e operar"
                description="Se o desafio é parecer mais profissional, converter melhor ou tirar um fluxo do papel, a frente de desenvolvimento entra justamente aí."
              />
              <div className="list-checks">
                <div className="list-check"><span>✓</span><span><strong>Landing pages</strong> para campanhas, validação de oferta e presença comercial.</span></div>
                <div className="list-check"><span>✓</span><span><strong>Sites institucionais com CMS</strong> para quem quer autonomia de conteúdo.</span></div>
                <div className="list-check"><span>✓</span><span><strong>Aplicações web</strong> quando o projeto precisa de regra de negócio, login, dashboard e integrações.</span></div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="processo">
          <div className="container split-grid">
            <div>
              <SectionHeader
                eyebrow="Como funciona"
                title="Processo direto, com menos atrito e mais previsibilidade"
                description="Sem formulário gigante, sem escopo nebuloso e sem deixar feedback para o fim. O fluxo foi mantido, mas agora a página explica melhor como a contratação acontece."
              />

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

            <aside className="panel">
              <SectionHeader
                eyebrow="Como eu trabalho"
                title="Contato direto e entrega incremental"
                description="A proposta continua a mesma, mas a forma de apresentar ficou mais próxima de um serviço profissional e menos de uma lista solta de promessas."
              />
              <div className="chip-list">
                <span className="chip">Escopo claro</span>
                <span className="chip">Acompanhamento por etapas</span>
                <span className="chip">Deploy configurado</span>
                <span className="chip">30 dias de suporte</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="section section-alt" id="precos">
          <div className="container">
            <SectionHeader
              eyebrow="Investimento"
              title="Faixas de entrada para orientar a conversa"
              description="Mantive os valores base e reestruturei a leitura para ficar mais comparável entre planos, sem parecer tabela engessada."
            />
            <div className="pricing-grid">
              {PRICING.map((plan) => (
                <div key={plan.name} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                  {plan.featured ? <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>Mais pedido</span> : null}
                  <div className="pricing-name">{plan.name}</div>
                  <div className="pricing-price">
                    {plan.price} <small>{plan.suffix}</small>
                  </div>
                  <p className="pricing-desc">{plan.desc}</p>
                  <div className="pricing-items">
                    {plan.items.map((item) => (
                      <div key={item} className="pricing-item">{item}</div>
                    ))}
                  </div>
                  <button
                    className={`btn ${plan.featured ? 'btn-accent' : 'btn-ghost'}`}
                    style={{ marginTop: '1rem', width: '100%' }}
                    onClick={() => openWhatsApp(`Olá, Kauê! Tenho interesse no plano ${plan.name} (${plan.price}). Pode me dar mais detalhes?`)}
                  >
                    Solicitar orçamento
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-grid">
            <div className="panel">
              <SectionHeader
                eyebrow="CMS sem mistério"
                title="Você edita o site sem depender de desenvolvedor"
                description="CMS é um painel onde você atualiza textos, imagens e posts do blog sem mexer em código. Mantive a explicação original, mas com uma leitura mais limpa."
              />

              <div className="list-checks">
                <div className="list-check"><span>✏️</span><span>Edite textos e imagens sem código.</span></div>
                <div className="list-check"><span>📝</span><span>Publique posts no blog pela interface.</span></div>
                <div className="list-check"><span>🔐</span><span>Acesso protegido com login próprio.</span></div>
                <div className="list-check"><span>📱</span><span>Experiência usável também no celular.</span></div>
              </div>
            </div>

            <div className="screenshot-frame">
              <div className="screenshot-bar">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
                <div className="url-bar">seusite.sanity.studio</div>
              </div>
              <div className="panel" style={{ background: '#f9fafb', boxShadow: 'none' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: 600 }}>
                  PAINEL DE CONTEÚDO
                </div>
                {[
                  { label: 'Título da página', value: 'Bem-vindo à Minha Empresa' },
                  { label: 'Subtítulo', value: 'Soluções para o seu negócio crescer' },
                  { label: 'Texto principal', value: 'Somos especialistas em...' },
                ].map((field) => (
                  <div key={field.label} style={{ marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {field.label}
                    </div>
                    <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '0.6rem 0.75rem', fontSize: '0.82rem' }}>
                      {field.value}
                    </div>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  <div className="chip">Cancelar</div>
                  <div className="chip" style={{ background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' }}>Publicar</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="manutencao">
          <div className="container">
            <SectionHeader
              eyebrow="Após a entrega"
              title="Planos de manutenção para quem quer continuidade"
              description="Reorganizei esta parte para explicar melhor por que manutenção existe e como cada plano se encaixa em um tipo de projeto."
            />

            <div className="retainer-note">
              <strong>Por que contratar manutenção?</strong> Sites e aplicações precisam de atualizações de segurança, ajustes de conteúdo e pequenas melhorias frequentes. Com um plano mensal, você fala direto com quem já conhece o projeto.
            </div>

            <div className="pricing-grid" style={{ marginTop: '1.5rem' }}>
              {RETAINER.map((plan) => (
                <div key={plan.name} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                  {plan.featured ? <span className="badge badge-blue" style={{ marginBottom: '0.5rem' }}>Recomendado</span> : null}
                  <div className="pricing-name">{plan.name}</div>
                  <div className="pricing-price">
                    {plan.price} <small>{plan.suffix}</small>
                  </div>
                  <p className="pricing-desc">{plan.desc}</p>
                  <div className="pricing-items">
                    {plan.items.map((item) => (
                      <div key={item} className="pricing-item">{item}</div>
                    ))}
                  </div>
                  <button
                    className={`btn ${plan.featured ? 'btn-accent' : 'btn-ghost'}`}
                    style={{ marginTop: '1rem', width: '100%' }}
                    onClick={() => openWhatsApp(`Olá, Kauê! Tenho interesse no plano de manutenção ${plan.name} (${plan.price}/mês). Pode me dar mais detalhes?`)}
                  >
                    Contratar plano
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Com o que trabalho"
              title="Tecnologias organizadas por frente"
              description="A seção técnica foi mantida, mas com agrupamento visual mais consistente para leitura rápida."
            />
            <div className="pricing-grid">
              {TECHS.map((group) => (
                <div key={group.label} className="panel">
                  <div className="section-eyebrow" style={{ marginBottom: '0.7rem' }}>{group.label}</div>
                  <div className="list-checks">
                    {group.items.map((item) => (
                      <div key={item} className="list-check">
                        <span>•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="container">
          <div className="cta-section">
            <h2>Pronto para começar?</h2>
            <p>Me conta o que você precisa no WhatsApp. A ideia é sair da conversa com um caminho claro, não com mais incerteza.</p>
            <button
              className="btn btn-wha"
              onClick={() => openWhatsApp('Olá, Kauê! Quero solicitar um orçamento de desenvolvimento. Pode me ajudar?')}
            >
              <WhatsAppIcon /> Quero um orçamento
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
