import { useEffect, useState } from 'react'
import './Hero.css'

const roles = ['a Designer.', 'a Developer.', 'a Coder.', 'a Creator.']

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState('typing') // typing | pause | erasing

  useEffect(() => {
    const current = roles[index]
    let timeout

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setPhase('pause'), 1400)
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('erasing'), 300)
    } else if (phase === 'erasing') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 45)
      } else {
        setIndex((i) => (i + 1) % roles.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, phase, index])

  return (
    <section id="about" className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">Hello,👋</p>
        <h1 className="hero-title">
          I'm <span className="hero-name">Maithily</span>
        </h1>
        <h2 className="hero-role">
          I'm <span className="hero-typewriter">{displayed}</span>
          <span className="cursor" aria-hidden="true" />
        </h2>
        <p className="hero-desc">
          I craft beautiful interfaces, write clean code, and bring ideas to life
          through thoughtful design and engineering.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="blob" />
        <div className="floating-card card1">
          <span>✦</span> Design
        </div>
        <div className="floating-card card2">
          <span>⟨/⟩</span> Code
        </div>
        <div className="floating-card card3">
          <span>◈</span> Create
        </div>
      </div>
    </section>
  )
}
