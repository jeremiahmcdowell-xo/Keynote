import { motion } from 'framer-motion'
import styles from './About.module.css'

const tools = ['React', 'TypeScript', 'Node.js', 'Figma', 'Next.js', 'PostgreSQL', 'Framer', 'Tailwind', 'GraphQL', 'Swift']

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.label}>About Me</span>
            <h2 className={styles.title}>Building at the intersection of design &amp; code.</h2>
            <p className={styles.body}>
              I'm Jeremiah — a full-stack developer and product designer based wherever the work takes me.
              I care deeply about the craft of building software: the feel of an interaction,
              the clarity of an interface, and the quality of the code underneath.
            </p>
            <p className={styles.body}>
              I work with startups and established teams to ship products that are both technically
              solid and a pleasure to use. Whether that's a greenfield app or a system that needs
              untangling, I'm most useful when design and engineering need to speak the same language.
            </p>

            <div className={styles.toolsWrap}>
              <div className={styles.toolsLabel}>Tools &amp; Technologies</div>
              <div className={styles.tools}>
                {tools.map((t, i) => (
                  <motion.span
                    key={t}
                    className={styles.tool}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className={styles.cardCol}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.glassCard}>
              <div className={styles.cardInner}>
                <div className={styles.avatarRing}>
                  <div className={styles.avatar}>JC</div>
                </div>
                <div className={styles.cardName}>Jeremiah M. Codwell</div>
                <div className={styles.cardTitle}>Full-Stack Developer &amp; Designer</div>

                <div className={styles.cardDivider} />

                <div className={styles.statRow}>
                  <div className={styles.stat}>
                    <div className={styles.statNum}>5</div>
                    <div className={styles.statLbl}>Years</div>
                  </div>
                  <div className={styles.statSep} />
                  <div className={styles.stat}>
                    <div className={styles.statNum}>24+</div>
                    <div className={styles.statLbl}>Projects</div>
                  </div>
                  <div className={styles.statSep} />
                  <div className={styles.stat}>
                    <div className={styles.statNum}>12</div>
                    <div className={styles.statLbl}>Clients</div>
                  </div>
                </div>

                <div className={styles.cardDivider} />

                <div className={styles.focusAreas}>
                  {['Product Design', 'Front-End Dev', 'Brand &amp; Identity', 'API Architecture'].map(area => (
                    <div key={area} className={styles.focusItem}>
                      <span className={styles.focusDot} />
                      <span dangerouslySetInnerHTML={{ __html: area }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
