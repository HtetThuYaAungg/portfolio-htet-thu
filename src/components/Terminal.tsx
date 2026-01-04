import { useState, useEffect } from 'react'
import './Terminal.css'
import { TERMINAL_LINES, TIMING, type TerminalLine } from '../constants'

const Terminal: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([])

  useEffect(() => {
    const showLines = async () => {
      for (let i = 0; i < TERMINAL_LINES.length; i++) {
        await new Promise(resolve => setTimeout(resolve, TIMING.terminalLineDelay))
        setVisibleLines(prev => [...prev, TERMINAL_LINES[i]])
      }
    }
    
    const timer = setTimeout(showLines, TIMING.terminalStartDelay)
    return () => clearTimeout(timer)
  }, [])

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
        {visibleLines.map((line, index) => (
          <div 
            key={index} 
            className={`terminal-line ${line.type}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {line.text}
          </div>
        ))}
        <div className="terminal-cursor">
          <span className="cursor-symbol">▌</span>
        </div>
      </div>
    </div>
  )
}

export default Terminal
