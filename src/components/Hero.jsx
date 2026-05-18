import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <motion.div
        className={styles.content}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className={styles.badge}>
          <span className={styles.dot} />
          Available for work
        </motion.div>

        <motion.h1 variants={item} className={styles.name}>
          <span className={styles.handle}>@jeremiahmcodwell</span>
        </motion.h1>

        <motion.p variants={item} className={styles.tagline}>
          Designer &amp; Developer crafting experiences<br />
          that feel as good as they look.
        </motion.p>

        <motion.div variants={item} className={styles.actions}>
          <a
            href="#work"
            className={styles.btnPrimary}
            onClick={e => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className={styles.btnGlass}
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.floatingCard}
        initial={{ opacity: 0, x: 60, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <FloatingStats />
      </motion.div>
    </section>
  )
}

function FloatingStats() {
  const stats = [
    { label: 'Projects', value: '24+' },
    { label: 'Clients', value: '12' },
    { label: 'Years Exp.', value: '5' },
  ]
  return (
    <div className={styles.statsCard}>
      <div className={styles.statsHeader}>
        <div className={styles.statsAvatar}>JC</div>
        <div>
          <div className={styles.statsName}>Jeremiah Codwell</div>
          <div className={styles.statsRole}>Full-Stack · Design</div>
        </div>
      </div>
      <div className={styles.statsDivider} />
      <div className={styles.statsGrid}>
        {stats.map(s => (
          <div key={s.label} className={styles.statItem}>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
      <div className={styles.skillPills}>
        {['React', 'Design', 'Node.js', 'TypeScript'].map(s => (
          <span key={s} className={styles.pill}>{s}</span>
        ))}
      </div>
    </div>
  )
}
