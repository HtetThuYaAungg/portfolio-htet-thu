import { useEffect, useState } from 'react'
import './App.css'
import MatrixRain from './components/MatrixRain'
import Header from './components/Header'
import About from './components/About'
import Terminal from './components/Terminal'
import {
  CONTACT_INFO,
  BOOT_MESSAGES,
  FOOTER_MESSAGE,
  SERVER_RACK_UNITS,
  TIMING,
} from './constants'

function App() {
  const [loaded, setLoaded] = useState<boolean>(false)
  const [bootSequence, setBootSequence] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setBootSequence(false)
      setLoaded(true)
    }, TIMING.bootDuration)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      <MatrixRain />
      
      {bootSequence && (
        <div className="boot-screen">
          <div className="boot-text">
            {BOOT_MESSAGES.slice(0, -1).map((message, index) => (
              <span key={index} className="boot-line">{message}</span>
            ))}
            <span className="boot-line blink">{BOOT_MESSAGES[BOOT_MESSAGES.length - 1]}</span>
          </div>
        </div>
      )}

      <div className={`main-container ${loaded ? 'loaded' : ''}`}>
        <Header />
        
        <div className="content-wrapper">
          <div className="left-panel">
            <Terminal />
          </div>
          
          <div className="center-panel">
            <About />
          </div>
          
          <div className="right-panel">
            <div className="contact-info-panel">
              <div className="info-header">CONTACT_INFO</div>
              {CONTACT_INFO.map((item, index) => (
                <div 
                  key={index} 
                  className="contact-item" 
                  onClick={() => window.open(item.href, '_blank')}
                >
                  <span className="contact-icon">{item.icon}</span>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="server-visual">
              <div className="server-rack">
                {[...Array(SERVER_RACK_UNITS)].map((_, i) => (
                  <div key={i} className="server-unit">
                    <div className="server-lights">
                      <span className={`light ${i % 3 === 0 ? 'active' : ''}`}></span>
                      <span className={`light ${i % 2 === 0 ? 'active' : ''}`}></span>
                      <span className="light active"></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-bar">
          <div className="glow-bar"></div>
        </div>

        <div className="footer-terminal">
          <div className="terminal-output">
            <span className="timestamp">[{new Date().toISOString()}]</span>
            <span className="log-text"> {FOOTER_MESSAGE}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
