import { useState, useEffect } from 'react'
import './Header.css'
import { USER_INFO, TIMING } from '../constants'
import packageJson from '../../package.json'

const Header: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), TIMING.clockInterval)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="header">
      <div className="header-frame">
        <div className="corner top-left"></div>
        <div className="corner top-right"></div>
        <div className="corner bottom-left"></div>
        <div className="corner bottom-right"></div>
        
        <div className="header-content">
          <div className="header-left">
            <span className="label">USER:</span>
            <span className="value">{USER_INFO.username}</span>
          </div>
          
          <div className="header-center">
            <span className="label">STATUS:</span>
            <span className="value status-active">{USER_INFO.status}</span>
          </div>
          
          <div className="header-right">
            <span className="label">HOST:</span>
            <span className="value">{USER_INFO.host}v{packageJson.version}</span>
          </div>
        </div>

        <div className="header-sub">
          <div className="time-display">
            {time.toLocaleTimeString('en-US', { hour12: false })}
          </div>
          <div className="user-badge" onClick={() => window.open(USER_INFO.linkedin, '_blank')}>
            <span className="badge-icon">⟩</span>
            <span className="badge-text">{USER_INFO.displayName}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
