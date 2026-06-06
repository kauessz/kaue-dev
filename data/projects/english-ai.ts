import type { ProjectData } from './index'

const englishAI: ProjectData = {
  slug: 'english-ai',
  title: 'EnglishAI',
  tagline: 'AI-powered English learning platform from A1 to C1 — adaptive exercises, 24h tutor, and structured progression.',
  type: 'EdTech · SaaS',
  status: 'live',
  liveUrl: 'https://www.english-ai.com.br',
  problem:
    'Brazilian learners have access to apps like Duolingo but lack structured, CEFR-aligned progression with real AI conversation practice. Existing AI tutors don\'t track skill gaps or adapt difficulty based on performance history.',
  whatIBuilt: [
    'Structured A1 → C1 learning path with CEFR-aligned content across 3 tracks: Daily Life, Work, Technology',
    'Adaptive exercise engine — difficulty adjusts based on recent performance',
    '24h AI conversation tutor with context-aware prompts per level',
    'Real-time writing correction with explanation of grammar and style issues',
    'Streak and progress tracking with Supabase-backed persistence',
    'Stripe integration for Premium plan with feature gating',
    'Free tier with generous limits to drive organic growth',
  ],
  technicalDecisions: [
    {
      decision: 'Gemini API for conversation tutor and writing correction',
      reason:
        'Gemini\'s context window handles long conversation history without truncation, which is critical for maintaining coherent tutor sessions across multiple exchanges within a level.',
    },
  ],
  challenges: [
    {
      challenge: 'Adaptive difficulty without labeled training data',
      solution:
        'Used an Elo-inspired rating system: each exercise has a difficulty rating, and the student has a proficiency rating per skill. After each answer, both ratings adjust via the same update rule used in chess ranking. No ML model needed.',
    },
  ],
  stack: [
    { category: 'Frontend', items: ['Next.js 15', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Supabase', 'PostgreSQL', 'Row Level Security'] },
    { category: 'AI', items: ['Gemini API'] },
    { category: 'Payments', items: ['Stripe'] },
    { category: 'Infrastructure', items: ['Vercel'] },
  ],
  screenshots: [],
}

export default englishAI
