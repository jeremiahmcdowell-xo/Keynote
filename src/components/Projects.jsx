import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa'
import styles from './Projects.module.css'

const projects = [
  {
    name: 'Project Alpha',
    desc: 'An open-source tool built to solve a real problem. Details and assets uploading soon.',
    tags: ['Open Source', 'React', 'Node.js'],
    stars: null,
    status: 'In Progress',
    github: 'https://github.com',
    live: null,
  },
  {
    name: 'Project Beta',
    desc: 'Open-source utility for developers. Repo and demo going live soon.',
    tags: ['TypeScript', 'API', 'Open Source'],
    stars: null,
    status: 'In Progress',
    github: 'https://github.com',
    live: null,
  },
  {
    name: 'Project Gamma',
    desc: 'A community tool currently in development. Stay tuned.',
    tags: ['Web App', 'Design', 'Community'],
    stars: null,
    status: 'Planning',
    github: null,
    live: null,
  },
]

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className="section-inner">
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.div>

        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.title}>Things I'm Building</h2>
            <p className={styles.subtitle}>
              Real projects, all open source. Assets and details uploading soon —
              check back or follow on GitHub.
            </p>
          </motion.div>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className={styles.githubLink}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaGithub size={14} /> View all on GitHub
          </motion.a>
        </div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
        >
          {projects.map(p => (
            <motion.div
              key={p.name}
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.cardTop}>
                <span className={`${styles.status} ${p.status === 'Planning' ? styles.statusPlanning : styles.statusProgress}`}>
                  {p.status}
                </span>
                <div className={styles.cardLinks}>
                  {p.stars !== null && (
                    <span className={styles.stars}><FaStar size={11} /> {p.stars}</span>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label="GitHub">
                      <FaGithub size={14} />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label="Live demo">
                      <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className={styles.cardName}>{p.name}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>

              <div className={styles.tags}>
                {p.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span>More projects coming — assets uploading soon.</span>
          <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.ctaLink}>
            <FaGithub size={13} /> Watch on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
