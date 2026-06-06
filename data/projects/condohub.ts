import type { ProjectData } from './index'

const condohub: ProjectData = {
  slug: 'condohub',
  title: 'CondoHub',
  tagline: 'Multi-tenant condo management platform with 8 roles, full financial module, and audit trail.',
  type: 'SaaS · PropTech',
  status: 'portfolio',
  problem:
    'Condominium managers in Brazil use outdated software or spreadsheets for resident management, financial control, and common area booking. Existing tools lack role-based portals, modern UX, and integration with payment gateways like Asaas.',
  whatIBuilt: [
    '8 distinct roles: Super Admin, Síndico, Subsíndico, Zelador, Morador, Visitante, Conselheiro, Administradora',
    'Per-role portal with tailored views and actions via @PreAuthorize',
    'Financial module with Pix and boleto via Asaas gateway',
    'Common area booking system with conflict detection',
    'Parking spot lottery with configurable rules',
    'Assembly module with digital voting',
    'Full audit trail — every action logged with actor, timestamp, and diff',
    'Multi-condo support with tenant isolation at data layer',
    'Flyway migrations for schema versioning',
  ],
  technicalDecisions: [
    {
      decision: 'Spring Security with @PreAuthorize for fine-grained RBAC',
      reason:
        'With 8 roles and complex permission matrices, annotation-based authorization keeps permission logic co-located with business logic. SpEL expressions in @PreAuthorize allow role + ownership checks in a single annotation.',
    },
  ],
  challenges: [
    {
      challenge: 'Tenant isolation without a schema-per-tenant approach',
      solution:
        'Added a `condo_id` discriminator column to all tenant-scoped tables with a Hibernate filter applied globally via AOP. Every repository query automatically scopes to the authenticated user\'s condo, making cross-tenant data leaks architecturally impossible.',
    },
  ],
  stack: [
    { category: 'Backend', items: ['Java 21', 'Spring Boot 3.3', 'Spring Security', 'JPA', 'Flyway'] },
    { category: 'Frontend', items: ['React', 'TypeScript'] },
    { category: 'Infrastructure', items: ['Railway', 'PostgreSQL'] },
    { category: 'Integrations', items: ['Asaas (Pix + Boleto)'] },
  ],
  screenshots: [
    '/screenshots/condohub/condohub-dashboard.png',
    '/screenshots/condohub/condohub-moradores.png',
    '/screenshots/condohub/condohub-financeiro.png',
    '/screenshots/condohub/condohub-reservas.png',
    '/screenshots/condohub/condohub-assembleias.png',
    '/screenshots/condohub/condohub-vagas.png',
    '/screenshots/condohub/condohub-os.png',
    '/screenshots/condohub/condohub-auditoria.png',
    '/screenshots/condohub/condohub-login.png',
  ],
}

export default condohub
