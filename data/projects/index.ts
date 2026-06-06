import type { ProjectStatus } from '../../components/ProjectCard'
import condohub from './condohub'
import englishAI from './english-ai'
import freightflow from './freightflow'
import jerseyControl from './jersey-control'
import pulsops from './pulsops'
import racquetArena from './racquet-arena'

export interface ProjectData {
  slug: string
  title: string
  tagline: string
  type: string
  status: ProjectStatus
  liveUrl?: string
  githubUrl?: string
  problem: string
  whatIBuilt: string[]
  technicalDecisions: {
    decision: string
    reason: string
  }[]
  challenges: {
    challenge: string
    solution: string
  }[]
  stack: {
    category: string
    items: string[]
  }[]
  screenshots: string[]
}

export const projects: ProjectData[] = [
  racquetArena,
  jerseyControl,
  freightflow,
  condohub,
  englishAI,
  pulsops,
]

export function getProjectData(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug)
}
