import type { ProjectData } from './index'

const jerseyControl: ProjectData = {
  slug: 'jersey-control',
  title: 'Jersey Control',
  tagline: 'Multi-instance SaaS for managing imported jersey orders — each client gets their own branded deployment.',
  type: 'SaaS · E-commerce',
  status: 'live',
  liveUrl: 'https://www.jerseycontrol.com.br',
  problem:
    'Resellers of imported Thai jerseys were managing orders via WhatsApp and spreadsheets. Tracking which jerseys were ordered per customer, grouping them into batches for the supplier, handling Pix payments, and generating the supplier CSV was fully manual. No existing e-commerce platform was built for this import-batch-delivery workflow.',
  whatIBuilt: [
    'Public catalog with Yupoo image links, shopping cart, and full checkout flow',
    'CPF validation and ViaCEP address autocomplete at checkout',
    'Pix payment proof upload via Vercel Blob with admin review queue',
    'Public order tracking by order code — accessible via WhatsApp lookup link',
    'Admin: full order management, batch grouping, catalog, customer records, pricing rules, coupons, financials',
    'Financial dashboard with SVG charts — monthly revenue, average ticket, overdue amounts',
    'Batch management with CSV export formatted for Thai supplier',
    'WhatsApp notification history with push via VAPID',
    'Onboarding wizard, per-instance PLAN env var for feature gating',
    'Themed oklch colors via culori — each instance has custom brand identity',
    'DMARC + Resend for transactional email from client\'s own domain',
  ],
  technicalDecisions: [
    {
      decision: 'Multi-instance via GitHub fork + Vercel + Neon per client',
      reason:
        'Each reseller has different branding, pricing, and catalog. A multi-tenant architecture would add isolation complexity without benefit — these are independent businesses. Fork + env-var config gives full isolation with minimal ops overhead at Vercel\'s free tier.',
    },
    {
      decision: 'Vercel Blob for Pix proof uploads',
      reason:
        'Payment proofs are temporary files reviewed once then archived. Blob storage at the edge avoids running a file server, keeps cost near zero, and integrates natively with the Next.js serverless functions handling the upload.',
    },
    {
      decision: 'SVG-native financial charts instead of a charting library',
      reason:
        'The financial dashboard has three specific charts. A full charting library (Recharts, Chart.js) would add 50KB+ to the bundle for three components. Hand-written SVG paths keep the dashboard at minimal bundle size with full design control.',
    },
  ],
  challenges: [
    {
      challenge: 'Batch export format compatibility with Thai supplier',
      solution:
        'Built a configurable CSV export pipeline where field names, order, and encoding can be adjusted per supplier via admin settings. The export groups items by jersey model, size, and color — in the exact column layout the supplier\'s system requires.',
    },
    {
      challenge: 'Theming for different client brand identities',
      solution:
        'Used the culori library to compute full oklch color scales from a single brand hue. Each instance sets one env var (`BRAND_HUE`) and the CSS custom property cascade generates backgrounds, surfaces, borders, and accents automatically.',
    },
    {
      challenge: 'Order tracking without requiring customer login',
      solution:
        'Generated a short alphanumeric order code at checkout that\'s sent via WhatsApp. The public tracking page does a server-side lookup by code, showing current status, items, and ETA without exposing personal data or requiring authentication.',
    },
  ],
  stack: [
    { category: 'Frontend', items: ['Next.js 15', 'TypeScript', 'Drizzle ORM', 'culori'] },
    { category: 'Infrastructure', items: ['Neon PostgreSQL', 'Vercel', 'Vercel Blob'] },
    { category: 'Integrations', items: ['Resend', 'ViaCEP', 'VAPID Push', 'Yupoo'] },
  ],
  screenshots: [
    '/screenshots/jersey-control/01-landing-hero.png',
    '/screenshots/jersey-control/02-como-funciona.png',
    '/screenshots/jersey-control/03-acompanhar-pedido.png',
    '/screenshots/jersey-control/04-fazer-pedido.png',
    '/screenshots/jersey-control/05-personalizacoes.png',
    '/screenshots/jersey-control/06-pagamento-cupom.png',
    '/screenshots/jersey-control/07-endereco-entrega.png',
    '/screenshots/jersey-control/08-aceite-envio.png',
    '/screenshots/jersey-control/09-admin-dashboard.png',
    '/screenshots/jersey-control/10-admin-catalogo.png',
    '/screenshots/jersey-control/11-admin-financeiro.png',
  ],
}

export default jerseyControl
