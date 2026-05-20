import { useState, useEffect } from 'react'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Vision from './components/Vision'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <>
      <CursorGlow />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Home />
        <About />
        <Vision />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
