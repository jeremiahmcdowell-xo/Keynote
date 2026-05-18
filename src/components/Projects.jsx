import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaPython, FaJs, FaDiscord } from 'react-icons/fa'
import styles from './Projects.module.css'

const langIcon = {
  Python: <FaPython size={12} />,
  JavaScript: <FaJs size={12} />,
}

const langColor = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
}

const projects = [
  {
    name: 'Pushie',
    desc: 'A Python project in active development. Repo is live on GitHub.',
    tags: ['Python', 'Open Source'],
    language: 'Python',
    github: 'https://github.com/KpnWorld/Pushie',
    live: null,
    status: 'Active',
  },
  {
    name: 'Pawn',
    desc: 'Python project with a live deployment on Vercel.',
    tags: ['Python', 'Open Source'],
    language: 'Python',
    github: 'https://github.com/KpnWorld/Pawn',
    live: 'https://pawn-sand.vercel.app',
    status: 'Active',
  },
  {
    name: 'MusubiB',
    desc: 'Discord bot project. Join the community server to try it out.',
    tags: ['Discord Bot', 'Open Source'],
    language: null,
    github: 'https://github.com/KpnWorld/MusubiB',
    live: 'https://discord.gg/ZMEq3QbSCY',
    status: 'Active',
    liveLabel: 'Discord',
    liveIcon: <FaDiscord size={12} />,
  },
  {
    name: 'EB-Tutorial',
    desc: 'A step-by-step guide to building the basics of a good Discord Economy Bot.',
    tags: ['Python', 'Tutorial', 'Discord'],
    language: 'Python',
    github: 'https://github.com/KpnWorld/EB-Tutorial',
    live: null,
    status: 'Complete',
  },
  {
    name: 'EB-Production',
    desc: 'Production-ready Discord Economy Bot built in Python.',
    tags: ['Python', 'Discord Bot', 'Open Source'],
    language: 'Python',
    github: 'https://github.com/KpnWorld/EB-Production',
    live: null,
    status: 'Complete',
  },
  {
    name: 'dimex',
    desc: 'New project currently in early development.',
    tags: ['Open Source'],
    language: null,
    github: 'https://github.com/KpnWorld/dimex',
    live: null,
    status: 'In Progress',
  },
]

const statusStyle = {
  Active: styles.statusActive,
  Complete: styles.statusComplete,
  'In Progress': styles.statusProgress,
}

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
              Open-source work live on GitHub. Discord bots, Python tools, and more.
            </p>
          </motion.div>

          <motion.a
            href="https://github.com/KpnWorld"
            target="_blank"
            rel="noreferrer"
            className={styles.githubLink}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaGithub size={14} /> @KpnWorld
          </motion.a>
        </div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
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
                <span className={`${styles.status} ${statusStyle[p.status]}`}>
                  {p.status}
                </span>
                <div className={styles.cardLinks}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label="GitHub">
                      <FaGithub size={14} />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label={p.liveLabel || 'Live site'}>
                      {p.liveIcon || <FaExternalLinkAlt size={12} />}
                    </a>
                  )}
                </div>
              </div>

              <h3 className={styles.cardName}>{p.name}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>

              <div className={styles.cardBottom}>
                <div className={styles.tags}>
                  {p.tags.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
                {p.language && (
                  <div className={styles.lang}>
                    <span className={styles.langDot} style={{ background: langColor[p.language] }} />
                    {p.language}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="https://github.com/KpnWorld"
          target="_blank"
          rel="noreferrer"
          className={styles.cta}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <FaGithub size={15} />
          <span>See everything on GitHub — <strong>github.com/KpnWorld</strong></span>
          <FaExternalLinkAlt size={11} className={styles.ctaArrow} />
        </motion.a>
      </div>
    </section>
  )
}
