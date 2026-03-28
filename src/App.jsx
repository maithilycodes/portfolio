import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
