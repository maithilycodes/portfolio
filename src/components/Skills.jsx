import { useEffect, useRef } from 'react'
import './Skills.css'

const skills = [
  { category: 'Design', icon: '🎨', items: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems', 'Typography'] },
  { category: 'Frontend', icon: '⟨/⟩', items: ['React', 'JavaScript', 'TypeScript', 'HTML & CSS', 'Vite'] },
  { category: 'Backend', icon: '⚙️', items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL'] },
  { category: 'Tools', icon: '🛠️', items: ['Git & GitHub', 'VS Code', 'Postman', 'Vercel', 'Linux'] },
]

export default function Skills() {
  const gridRef = useRef(null)

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.skill-card')
    if (!cards) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section skills-section">
      <div className="section-inner">
        <p className="section-label">What I Know</p>
        <h2 className="section-title">Skills & Tools</h2>
        <p className="section-sub">Technologies and tools I work with every day.</p>

        <div className="skills-grid" ref={gridRef}>
          {skills.map((group, i) => (
            <div
              key={group.category}
              className="skill-card"
              style={{ '--delay': `${i * 0.1}s` }}
            >
              <div className="skill-icon">{group.icon}</div>
              <h3 className="skill-category">{group.category}</h3>
              <ul className="skill-list">
                {group.items.map((item, j) => (
                  <li
                    key={item}
                    className="skill-item"
                    style={{ '--item-delay': `${i * 0.1 + j * 0.07}s` }}
                  >
                    <span className="skill-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
