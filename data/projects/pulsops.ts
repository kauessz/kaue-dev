import type { ProjectData } from './index'

const pulsops: ProjectData = {
  slug: 'pulsops',
  title: 'PulsOps',
  tagline: 'WhatsApp operational automation for clinics and pharmacies — appointment confirmation, reminders, and AI triage.',
  type: 'Automation · SaaS',
  status: 'mvp',
  problem:
    'Clinics and pharmacies spend hours manually confirming appointments, sending reminders, and answering repetitive WhatsApp messages. No-show rates are high because follow-up is inconsistent. Staff time is wasted on tasks that can be fully automated.',
  whatIBuilt: [
    'Automatic appointment confirmation flow via WhatsApp (Evolution API)',
    'Configurable reminder sequences: 24h before, 2h before, 1h after missed',
    'AI triage with Claude API — categorizes incoming messages (reschedule, cancellation, inquiry) and routes them',
    'n8n workflow orchestration for all automation sequences',
    'Supabase multi-tenant backend with per-clinic configuration',
    'LGPD-compliant opt-in/opt-out flow for all communication',
    'Admin dashboard with conversation history and metrics',
  ],
  technicalDecisions: [
    {
      decision: 'n8n as the workflow orchestrator',
      reason:
        'n8n gives visual workflow editing that non-technical clinic staff can adjust (timing, message templates) without code changes. It handles retry logic, error branches, and scheduling natively.',
    },
    {
      decision: 'Claude API for message classification',
      reason:
        'Incoming messages are ambiguous — a patient texting "amanhã não vai dar" could mean reschedule or cancel. Claude\'s understanding of Brazilian Portuguese nuance classifies intent correctly and routes to the right response flow.',
    },
  ],
  challenges: [
    {
      challenge: 'LGPD compliance for automated messaging',
      solution:
        'Built a double opt-in flow: first contact asks for consent, stores timestamp and IP in Supabase with RLS. All subsequent automated messages include a one-tap opt-out. Opted-out numbers are permanently blocked from automation at the Evolution API layer.',
    },
  ],
  stack: [
    { category: 'Automation', items: ['n8n', 'Evolution API (WhatsApp)'] },
    { category: 'AI', items: ['Claude API (Anthropic)'] },
    { category: 'Backend', items: ['Supabase', 'PostgreSQL', 'Row Level Security'] },
    { category: 'Infrastructure', items: ['Vercel', 'Railway'] },
  ],
  screenshots: [],
}

export default pulsops
