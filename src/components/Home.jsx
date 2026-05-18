import { motion } from 'framer-motion'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
import styles from './Home.module.css'

export default function Home() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.section} id="home">
      <div className={`section-inner ${styles.inner}`}>
        <motion.div
          className={styles.content}
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div
            className={styles.badge}
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } }}
          >
            <span className={styles.pulse} />
            Open to collaboration
          </motion.div>

          <motion.h1
            className={styles.heading}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
          >
            I'm Jeremiah.<br />
            <span className={styles.accent}>I build things</span><br />
            for the web.
          </motion.h1>

          <motion.p
            className={styles.sub}
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
          >
            16-year-old developer and open-source contributor. I care about building
            software that's actually useful — not just impressive on a resume.
          </motion.p>

          <motion.div
            className={styles.actions}
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } } }}
          >
            <button className={styles.btnPrimary} onClick={() => scrollTo('projects')}>
              See my work <FaArrowRight size={12} />
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className={styles.btnGhost}
            >
              <FaGithub size={14} /> GitHub
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.cardHeader}>
            <div className={styles.cardDots}>
              <span style={{ background: '#ff5f57' }} />
              <span style={{ background: '#febc2e' }} />
              <span style={{ background: '#28c840' }} />
            </div>
            <span className={styles.cardLabel}>about.js</span>
          </div>
          <pre className={styles.code}>{`const jeremiah = {
  age: 16,
  school: "High School",
  role: "Developer",
  focus: "Open Source",
  
  skills: [
    "React", "Node.js",
    "TypeScript", "Design"
  ],
  
  mission: "Build software
    for the greater good.",
    
  available: true,
}`}</pre>
        </motion.div>
      </div>
    </section>
  )
}
