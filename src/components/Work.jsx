import { motion } from 'framer-motion'
import styles from './Work.module.css'

const projects = [
  {
    title: 'Pulse Dashboard',
    desc: 'Real-time analytics platform with live data visualization and custom reporting tools.',
    tags: ['React', 'D3.js', 'Node.js'],
    year: '2024',
    color: '#6366f1',
  },
  {
    title: 'Fauna Commerce',
    desc: 'Full-stack e-commerce experience with a focus on conversion-optimized UI patterns.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    year: '2024',
    color: '#a855f7',
  },
  {
    title: 'Aether iOS App',
    desc: 'Minimalist productivity app built in React Native with iCloud sync and widgets.',
    tags: ['React Native', 'Swift', 'CloudKit'],
    year: '2023',
    color: '#06b6d4',
  },
  {
    title: 'Studio Brand System',
    desc: 'Complete visual identity and design system for a boutique creative agency.',
    tags: ['Figma', 'Design', 'Motion'],
    year: '2023',
    color: '#f59e0b',
  },
  {
    title: 'Relay API',
    desc: 'Developer-first REST and GraphQL API with a clean documentation site and SDKs.',
    tags: ['Node.js', 'GraphQL', 'TypeScript'],
    year: '2023',
    color: '#10b981',
  },
  {
    title: 'Nomad Web App',
    desc: 'Travel planning platform with map-based itinerary building and budget tracking.',
    tags: ['Vue.js', 'Mapbox', 'Firebase'],
    year: '2022',
    color: '#ec4899',
  },
]

const sectionVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
}

export default function Work() {
  return (
    <section className={styles.section} id="work">
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.label}>Selected Work</span>
          <h2 className={styles.title}>Things I've Built</h2>
          <p className={styles.subtitle}>A collection of projects across product design, engineering, and brand.</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div className={styles.cardTop}>
                <div className={styles.colorDot} style={{ background: project.color, boxShadow: `0 0 16px ${project.color}55` }} />
                <span className={styles.year}>{project.year}</span>
              </div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.desc}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.cardArrow}>
                <span>View project</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
