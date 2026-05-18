import { motion } from 'framer-motion'
import { FaGlobe, FaLock, FaUsers, FaLightbulb } from 'react-icons/fa'
import styles from './Vision.module.css'

const pillars = [
  {
    icon: <FaGlobe size={18} />,
    title: 'Accessible to Everyone',
    body: 'Software locked behind paywalls or proprietary walls doesn\'t reach the people who need it most. Open source removes that barrier.',
  },
  {
    icon: <FaLock size={18} />,
    title: 'Transparent by Default',
    body: 'When code is open, people can audit it, trust it, and improve it. Black boxes breed dependency. Open code breeds understanding.',
  },
  {
    icon: <FaUsers size={18} />,
    title: 'Built by Communities',
    body: 'The best software is built when many minds contribute. Collective intelligence beats any single team working behind closed doors.',
  },
  {
    icon: <FaLightbulb size={18} />,
    title: 'Driven by Purpose',
    body: 'I want to build tools that solve real problems — not just things that are technically interesting or profitable.',
  },
]

export default function Vision() {
  return (
    <section className={styles.section} id="vision">
      <div className="section-inner">
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          Vision
        </motion.div>

        <div className={styles.top}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.title}>
              Open source for<br />the greater good.
            </h2>
            <p className={styles.subtitle}>
              I believe the most meaningful software is free — free to use, free to inspect,
              free to build on. This isn't idealism. It's just how I think good things get made.
            </p>
          </motion.div>

          <motion.div
            className={styles.manifesto}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              "I'm 16. I can't vote, can't run a company, can't change policy.
              But I can write code. And code, when it's open, can do a lot.
              That's why everything I build is open source — because the leverage
              of a single developer multiplies when anyone can use and improve the work."
            </p>
            <span className={styles.sig}>— Jeremiah</span>
          </motion.div>
        </div>

        <motion.div
          className={styles.pillars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {pillars.map(p => (
            <motion.div
              key={p.title}
              className={styles.pillar}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.pillarIcon}>{p.icon}</div>
              <h3 className={styles.pillarTitle}>{p.title}</h3>
              <p className={styles.pillarBody}>{p.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
