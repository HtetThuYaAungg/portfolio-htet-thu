import './About.css'
import { SKILLS, ABOUT_PARAGRAPHS } from '../constants'

const About: React.FC = () => {
  return (
    <section className="about section-panel">
      <div className="section-header">
        <span className="section-title">ABOUT</span>
        <div className="section-line"></div>
      </div>
      
      <div className="about-content">
        {ABOUT_PARAGRAPHS.map((paragraph, index) => (
          <p key={index} className="about-text">
            <span className="cursor-blink">&gt;</span> {paragraph.prefix}{' '}
            {paragraph.highlights.map((highlight, hIndex) => (
              <span key={hIndex}>
                <span className="highlight">{highlight}</span>
                {hIndex < paragraph.highlights.length - 1 && ', '}
                {hIndex === paragraph.highlights.length - 2 && 'and '}
              </span>
            ))}
            {' '}{paragraph.suffix}
          </p>
        ))}
        
        <div className="skills-grid">
          {SKILLS.map((category, index) => (
            <div key={index} className="skill-category">
              <h4>{category.title}</h4>
              <ul>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
