import type { ProjectData } from './index'

const freightflow: ProjectData = {
  slug: 'freightflow',
  title: 'FreightFlow',
  tagline: 'Maritime shipment management API with fleet map, RBAC, and 110+ real shipments. Built for freight forwarders.',
  type: 'SaaS · LogTech',
  status: 'portfolio',
  problem:
    'Freight forwarders managing maritime shipments typically rely on Excel sheets and email chains. There\'s no unified system that tracks voyages, vessels, ports, and cargo events in one place — with multi-role access for operators, clients, and administrators.',
  whatIBuilt: [
    'Full REST API for shipments, voyages, vessels, ports, and cargo events',
    'RBAC with 4 roles: ADMIN, OPERATOR, CLIENT, VIEWER',
    'Fleet Map with react-leaflet-cluster showing real vessel positions',
    'Dashboard with 110+ real shipments imported from CMA CGM operational data',
    'Async messaging via RabbitMQ for cargo event processing',
    'Redis caching for vessel position queries',
    '59+ automated tests with JUnit 5, Mockito, and Testcontainers',
    'CI/CD pipeline with GitHub Actions and Railway deployment',
  ],
  technicalDecisions: [
    {
      decision: 'RabbitMQ for cargo event processing',
      reason:
        'Cargo events (departure, arrival, customs, delivery) can burst during peak port operations. RabbitMQ decouples event ingestion from processing, preventing API timeouts and enabling retry logic without blocking the main request flow.',
    },
    {
      decision: 'Testcontainers for integration tests',
      reason:
        'In-memory databases hide production bugs related to PostgreSQL-specific behavior (JSON types, window functions, constraint timing). Testcontainers spins a real Postgres container per test suite, catching issues that H2 would miss.',
    },
  ],
  challenges: [
    {
      challenge: 'Importing 110+ real shipments without clean data',
      solution:
        'Built an import pipeline with validation, deduplication, and port UNLOCODE normalization. Missing ports were created on the fly with estimated coordinates based on UNLOCODE country-region codes.',
    },
  ],
  stack: [
    { category: 'Backend', items: ['Java 21', 'Spring Boot 3.3', 'Spring Security + JWT', 'JPA', 'Flyway'] },
    { category: 'Messaging', items: ['RabbitMQ', 'Redis'] },
    { category: 'Testing', items: ['JUnit 5', 'Mockito', 'Testcontainers', 'JaCoCo'] },
    { category: 'Frontend', items: ['React', 'TypeScript', 'react-leaflet-cluster'] },
    { category: 'Infrastructure', items: ['Docker', 'Railway', 'GitHub Actions'] },
  ],
  screenshots: [
    '/screenshots/freightflow/ff-dashboard.png',
    '/screenshots/freightflow/ff-fleetmap.png',
    '/screenshots/freightflow/ff-tracking-detail.png',
    '/screenshots/freightflow/ff-tracking-public.png',
    '/screenshots/freightflow/ff-customers.png',
    '/screenshots/freightflow/ff-users.png',
    '/screenshots/freightflow/ff-login.png',
  ],
}

export default freightflow
