import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaRocket, FaHeart } from 'react-icons/fa'
import styles from './About.module.css'

const traits = [
  { icon: <FaCode size={15} />, label: 'Developer', desc: 'Full-stack with React, Node.js and TypeScript' },
  { icon: <FaPalette size={15} />, label: 'Designer', desc: 'Obsessed with interfaces that feel right' },
  { icon: <FaRocket size={15} />, label: 'Builder', desc: 'Ship fast, iterate, learn from real users' },
  { icon: <FaHeart size={15} />, label: 'Open Source', desc: 'Code should benefit everyone, not just companies' },
]

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className="section-inner">
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.title}>
              16 years old.<br />Building anyway.
            </h2>
            <p className={styles.body}>
              I'm a high school student who taught himself to code because I couldn't stop thinking
              about how software gets made. What started with YouTube tutorials turned into late nights
              building things that actually work.
            </p>
            <p className={styles.body}>
              I don't have a CS degree or years of experience — what I have is a genuine drive
              to understand how things work and a bias toward shipping over talking about shipping.
            </p>
            <p className={styles.body}>
              Right now I'm focused on open-source projects, learning in public,
              and finding people who care about building good software as much as I do.
            </p>

            <div className={styles.quick}>
              <div className={styles.quickItem}>
                <span className={styles.quickLabel}>Age</span>
                <span className={styles.quickVal}>16</span>
              </div>
              <div className={styles.quickDivider} />
              <div className={styles.quickItem}>
                <span className={styles.quickLabel}>Status</span>
                <span className={styles.quickVal}>High School</span>
              </div>
              <div className={styles.quickDivider} />
              <div className={styles.quickItem}>
                <span className={styles.quickLabel}>Based in</span>
                <span className={styles.quickVal}>USA</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            {traits.map((t, i) => (
              <motion.div
                key={t.label}
                className={styles.traitCard}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
              >
                <div className={styles.traitIcon}>{t.icon}</div>
                <div>
                  <div className={styles.traitLabel}>{t.label}</div>
                  <div className={styles.traitDesc}>{t.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
