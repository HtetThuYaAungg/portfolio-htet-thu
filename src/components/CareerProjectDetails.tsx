import './CareerProjectDetails.css'
import { CAREER_ENTRIES, type CareerEntry } from '../constants'

interface CareerProjectDetailsProps {
  careerId: string
  onBack: () => void
}

const URL_REGEX = /https?:\/\/[^\s)]+/g

function shortLinkLabel(url: string): string {
  try {
    const u = url.toLowerCase()
    if (u.includes('play.google.com')) return 'Play Store'
    if (u.includes('apps.apple.com')) return 'App Store'
    const host = new URL(url).hostname.replace(/^www\./, '')
    return host.split('.')[0] || 'Link'
  } catch {
    return 'Link'
  }
}

function renderWithLinks(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  const re = new RegExp(URL_REGEX.source, 'g')
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }
    const url = match[0]
    nodes.push(
      <a
        key={match.index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bullet-link"
      >
        {shortLinkLabel(url)}
      </a>
    )
    lastIndex = match.index + url.length
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }
  return nodes.length ? nodes : [text]
}

function highlightBullet(text: string): React.ReactNode {
  const separator = text.includes(' – ') ? ' – ' : text.includes(' : ') ? ' : ' : null
  if (!separator) return <>{renderWithLinks(text)}</>
  const [label, rest] = text.split(separator, 2)
  return (
    <>
      <span className="bullet-highlight">{label}</span>
      {separator}
      {renderWithLinks(rest)}
    </>
  )
}

const CareerProjectDetails: React.FC<CareerProjectDetailsProps> = ({ careerId, onBack }) => {
  const career = CAREER_ENTRIES.find((e: CareerEntry) => e.id === careerId)
  if (!career) return null

  return (
    <section className="about section-panel career-details">
      <div className="section-header">
        <button type="button" className="details-back" onClick={onBack} aria-label="Back to About">
          ← BACK
        </button>
        <span className="section-title">PROJECT_DETAILS</span>
        <div className="section-line"></div>
      </div>

      <div className="career-meta">
        <p className="career-role">
          <span className="cursor-blink">&gt;</span> {career.fullRole}
        </p>
        <p className="career-company">@ {career.company}</p>
        <p className="career-date">{career.dateRange}</p>
      </div>

      <div className="projects-list">
        {career.projects.map((project, index) => (
          <div key={index} className="project-block">
            <h4 className="project-name">{project.name}</h4>
            <p className="project-desc">{project.description}</p>
            {project.bullets.length > 0 && (
              <ul className="project-bullets">
                {project.bullets.map((bullet, bIndex) => (
                  <li key={bIndex}>{highlightBullet(bullet)}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default CareerProjectDetails
