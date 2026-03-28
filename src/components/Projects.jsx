import './Projects.css'

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'A personal portfolio built with React and Vite, featuring smooth animations and a clean design system.',
    tags: ['React', 'Vite', 'CSS'],
    emoji: '🌐',
    link: '#',
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-inner">
        <p className="section-label">My Work</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub">A selection of things I've built and designed.</p>

        <div className="projects-grid">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="project-card">
              <div className="project-emoji">{p.emoji}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <span className="project-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
