import type { ProjectData } from './index'

const racquetArena: ProjectData = {
  slug: 'racquet-arena',
  title: 'Racquet Arena',
  tagline: 'Tournament management SaaS for beach tennis and racket sports — athletes, organizers, and marketplace all in one.',
  type: 'SaaS · Sports',
  status: 'mvp',
  liveUrl: 'https://www.racquetarena.com',
  problem:
    'Organizing beach tennis tournaments in Brazil means juggling spreadsheets, WhatsApp groups, and manual Pix transfers. Athletes have no centralized way to find tournaments by location, skill level, or date. Organizers get buried in logistics and lose track of registrations, payments, and substitutions. The market leader (Letzplay) had poor UX and no geolocation-based search.',
  whatIBuilt: [
    'Athlete dashboard: open tournaments, pending registrations, match results, ranking',
    'Organizer dashboard: full tournament lifecycle — categories, draws, financials, coupons, staff, regulations',
    'Automatic bracket generation with BYE support for any number of athletes',
    'Geolocation search using Haversine formula — find tournaments by radius, city, state, skill level',
    'Rei/Rainha mode (rotating pairs): custom scoring logic and individual ranking within pair-based format',
    'Mercado Pago OAuth seller integration — automatic fee split between organizer and Arena platform',
    'Dual workspace: same user switches between athlete and organizer context without re-login',
    'Tournament publish checklist with mandatory-pending alerts before going public',
    'PWA-first design with mobile-native UX',
  ],
  technicalDecisions: [
    {
      decision: 'Mercado Pago Marketplace with OAuth seller flow',
      reason:
        'Split payments between organizer and platform need to happen atomically at checkout time. Marketplace model avoids manual transfers and gives organizers instant settlement without touching Arena\'s bank account.',
    },
    {
      decision: 'Haversine geolocation in PostgreSQL via Neon',
      reason:
        'Rather than a dedicated geo service, raw SQL with the Haversine formula handles proximity search within acceptable latency on Neon\'s serverless PostgreSQL. Keeps the stack simple without PostGIS.',
    },
    {
      decision: 'Dual-context workspace in a single JWT session',
      reason:
        'Most athletes are also organizers. Forcing re-login on context switch would kill retention. A single JWT with role claims and a Zustand store for active context avoids re-auth overhead.',
    },
  ],
  challenges: [
    {
      challenge: 'Bracket generation for non-power-of-2 participant counts',
      solution:
        'Implemented BYE seeding at bracket creation time. When participant count isn\'t a power of 2, the algorithm calculates the minimum BYEs needed and distributes them across seeds to maintain balance. Higher-seeded athletes get first-round BYEs.',
    },
    {
      challenge: 'Substitution flow mid-tournament',
      solution:
        'Built a substitution request lifecycle (pending → approved → applied) with match-aware validation. A sub can only be applied before the affected match starts, and the bracket is re-seeded if necessary. Organizer sees a diff of what changes before confirming.',
    },
    {
      challenge: 'Mercado Pago OAuth edge cases — seller re-auth and token refresh',
      solution:
        'Stored OAuth tokens per organizer workspace with encrypted refresh tokens in Railway Postgres. Background job checks expiry 24h ahead and silently refreshes. Checkout fallback routes to organizer\'s own Pix QR if OAuth token is invalid.',
    },
  ],
  stack: [
    { category: 'Frontend', items: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'Axios'] },
    { category: 'Backend', items: ['Java 21', 'Spring Boot 3.3', 'Spring Security + JWT', 'JPA / Hibernate'] },
    { category: 'Infrastructure', items: ['Neon PostgreSQL', 'Railway', 'Vercel'] },
    { category: 'Integrations', items: ['Mercado Pago Marketplace', 'OAuth 2.0 Seller Flow'] },
  ],
  screenshots: [
    '/screenshots/racquet-arena/01-dashboard-atleta.png',
    '/screenshots/racquet-arena/02-inscricoes-torneios-abertos.png',
    '/screenshots/racquet-arena/03-busca-torneios.png',
    '/screenshots/racquet-arena/04-busca-geolocalizacao.png',
    '/screenshots/racquet-arena/05-minhas-inscricoes.png',
    '/screenshots/racquet-arena/06-detalhe-inscricao.png',
    '/screenshots/racquet-arena/07-organizacoes.png',
    '/screenshots/racquet-arena/08-gerenciar-organizacao.png',
    '/screenshots/racquet-arena/09-organizacao-membros.png',
    '/screenshots/racquet-arena/10-organizacao-membros-2.png',
    '/screenshots/racquet-arena/11-workspace-ativo.png',
    '/screenshots/racquet-arena/12-gestao-torneio-resumo.png',
    '/screenshots/racquet-arena/13-financeiro-torneio.png',
    '/screenshots/racquet-arena/14-proximas-acoes-checklist.png',
    '/screenshots/racquet-arena/15-alertas-dados-torneio.png',
    '/screenshots/racquet-arena/16-localizacao-mapa.png',
    '/screenshots/racquet-arena/17-datas-informacoes.png',
    '/screenshots/racquet-arena/18-formato-banner.png',
    '/screenshots/racquet-arena/19-categorias-torneio.png',
    '/screenshots/racquet-arena/20-jogos-rei-rainha.png',
  ],
}

export default racquetArena
