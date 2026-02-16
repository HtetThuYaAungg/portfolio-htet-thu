import { useEffect, useState, useMemo, useCallback, useRef } from 'react'
import './App.css'
import MatrixRain from './components/MatrixRain'
import Header from './components/Header'
import About from './components/About'
import CareerProjectDetails from './components/CareerProjectDetails'
import Terminal from './components/Terminal'
import {
  CONTACT_INFO,
  EDUCATION,
  BOOT_MESSAGES,
  FOOTER_MESSAGE,
  SERVER_RACK_UNITS,
  TIMING,
  INACTIVITY_DELAY,
} from './constants'
import { getRandomTheme, applyTheme, ColorTheme, RAINBOW_THEME } from './themes'


function App() {
  const [loaded, setLoaded] = useState<boolean>(false)
  const [bootSequence, setBootSequence] = useState<boolean>(true)
  const [isInactive, setIsInactive] = useState<boolean>(false)
  const [selectedCareerId, setSelectedCareerId] = useState<string | null>(null)
  
  const baseTheme: ColorTheme = useMemo(() => getRandomTheme(), [])
    const currentTheme = isInactive ? RAINBOW_THEME : baseTheme
  
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const centerPanelRef = useRef<HTMLDivElement>(null)
  const leftPanelRef = useRef<HTMLDivElement>(null)

  const handleBackFromDetails = useCallback(() => {
    setSelectedCareerId(null)
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) {
      requestAnimationFrame(() => {
        leftPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [])

  const handleUserActivity = useCallback(() => {
    if (isInactive) {
      setIsInactive(false)
    }
    
    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current)
    }
    
    inactivityTimer.current = setTimeout(() => {
      setIsInactive(true)
    }, INACTIVITY_DELAY)
  }, [isInactive])

  useEffect(() => {
    applyTheme(currentTheme)
  }, [currentTheme])

  useEffect(() => {
    if (!selectedCareerId || !centerPanelRef.current) return
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) {
      centerPanelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [selectedCareerId])

  useEffect(() => {
    const timer = setTimeout(() => {
      setBootSequence(false)
      setLoaded(true)
    }, TIMING.bootDuration)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'click']
        inactivityTimer.current = setTimeout(() => {
      setIsInactive(true)
    }, INACTIVITY_DELAY)
    
    events.forEach(event => {
      window.addEventListener(event, handleUserActivity)
    })
    
    return () => {
      events.forEach(event => {
        window.removeEventListener(event, handleUserActivity)
      })
      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current)
      }
    }
  }, [handleUserActivity])

  return (
    <div className="app">
      <MatrixRain theme={currentTheme} />
      
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
          <div className="left-panel" ref={leftPanelRef}>
            <Terminal
              onSelectCareer={(id) => setSelectedCareerId(id)}
              selectedCareerId={selectedCareerId}
            />
          </div>
          
          <div className="center-panel" ref={centerPanelRef}>
            {selectedCareerId ? (
              <CareerProjectDetails
                careerId={selectedCareerId}
                onBack={handleBackFromDetails}
              />
            ) : (
              <About />
            )}
          </div>
          
          <div className="right-panel">
            <div className="education-panel">
              <div className="info-header">EDUCATION</div>
              {EDUCATION.map((item, index) => (
                <div key={index} className="education-item">
                  <span className="education-date">[{item.dateRange}]</span>
                  <span className="education-school">{item.school}</span>
                  <span className="education-degree">{item.degree}</span>
                </div>
              ))}
            </div>
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
            {/* <div className="server-visual">
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
            </div> */}
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
