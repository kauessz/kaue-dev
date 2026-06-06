import Link from 'next/link'

export type ProjectStatus = 'live' | 'mvp' | 'portfolio'

export interface ProjectCardProps {
  slug: string
  title: string
  description: string
  type: string
  stack: string[]
  url?: string
  status: ProjectStatus
  screenshotSrc?: string
}

const statusLabel: Record<ProjectStatus, string> = {
  live: 'Live',
  mvp: 'MVP',
  portfolio: 'Portfolio',
}

export default function ProjectCard({
  slug,
  title,
  description,
  type,
  stack,
  url,
  status,
}: ProjectCardProps) {
  return (
    <Link href={`/work/${slug}`} className="project-card">
      {url && (
        <span className="external-link-icon" aria-hidden="true">
          ↗
        </span>
      )}

      <div>
        <div className="project-card-type">{type}</div>
        <h3 className="project-card-title" style={{ marginTop: '0.35rem' }}>
          {title}
        </h3>
      </div>

      <p className="project-card-desc">{description}</p>

      <div className="project-card-stack">
        {stack.slice(0, 5).map((item) => (
          <span key={item} className="stack-item">
            {item}
          </span>
        ))}
      </div>

      <div className="project-card-footer">
        <span className={`status-badge status-${status}`}>{statusLabel[status]}</span>
        <span
          style={{ fontSize: '0.8rem', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}
        >
          view case →
        </span>
      </div>
    </Link>
  )
}
