import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import styles from './Navbar.module.css'

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Vision', id: 'vision' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      const sections = links.map(l => document.getElementById(l.id)).filter(Boolean)
      let current = 'home'
      for (const section of sections) {
        if (window.scrollY >= section.offsetTop - 140) {
          current = section.id
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a
          href="#home"
          className={styles.logo}
          onClick={e => scrollTo(e, 'home')}
        >
          <span className={styles.at}>@</span>jeremiahmcdowell
        </a>

        <div className={styles.center}>
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${styles.link} ${active === link.id ? styles.linkActive : ''}`}
              onClick={e => scrollTo(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.right}>
          <button
            className={styles.toggleBtn}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {theme === 'dark'
                ? <FaMoon size={14} />
                : <FaSun size={14} />
              }
            </motion.div>
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes size={15} /> : <FaBars size={15} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={`${styles.mobileLink} ${active === link.id ? styles.mobileLinkActive : ''}`}
                onClick={e => scrollTo(e, link.id)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
