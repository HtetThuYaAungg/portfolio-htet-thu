import { useState, useEffect } from 'react'
import './Terminal.css'
import { CAREER_ENTRIES, TIMING, type CareerEntry } from '../constants'

interface TerminalProps {
  onSelectCareer: (careerId: string) => void
  selectedCareerId: string | null
}

const Terminal: React.FC<TerminalProps> = ({ onSelectCareer, selectedCareerId }) => {
  const [introDone, setIntroDone] = useState(false)
  const [visibleCareerIndex, setVisibleCareerIndex] = useState(-1)

  useEffect(() => {
    const t = setTimeout(() => setIntroDone(true), TIMING.terminalStartDelay)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!introDone) return
    const showNext = () => {
      setVisibleCareerIndex((i) => (i < CAREER_ENTRIES.length - 1 ? i + 1 : i))
    }
    const interval = setInterval(showNext, TIMING.terminalLineDelay)
    return () => clearInterval(interval)
  }, [introDone])

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <span className="terminal-title">SYSTEM_LOG</span>
      </div>
      <div className="terminal-body">
        <div className="terminal-line comment">// Career History v1.0</div>
        <div className="terminal-line command">$ cat history.log</div>
        <div className="terminal-line divider">────────────────────</div>

        {CAREER_ENTRIES.map((career: CareerEntry, index: number) => (
          <div
            key={career.id}
            className={`terminal-career-block ${
              index <= visibleCareerIndex ? "visible" : ""
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="terminal-line date">[{career.dateRange}]</div>
            <div className="terminal-line output">&gt; {career.role}</div>
            <div className="terminal-line output"> @ {career.company}</div>
            <button
              type="button"
              className={`terminal-details-btn ${selectedCareerId === career.id ? 'active' : ''}`}
              onClick={() => onSelectCareer(career.id)}
            >
              [details]
            </button>
              <div className="terminal-line divider">────────────────────</div>
          </div>
        ))}

        <div className="terminal-line command">$ echo $STATUS</div>
        <div className="terminal-line success">OPEN TO WORK</div>
        <div className="terminal-cursor">
          <span className="cursor-symbol">▌</span>
        </div>
      </div>
    </div>
  );
}

export default Terminal
