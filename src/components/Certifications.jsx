import { motion } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt, FaClock } from 'react-icons/fa'
import styles from './Certifications.module.css'

const certs = [
  {
    name: 'Coming Soon',
    issuer: 'Uploading certifications shortly',
    date: '',
    status: 'pending',
    url: null,
  },
]

const upcoming = [
  'AWS Cloud Practitioner',
  'Google UX Design Certificate',
  'Meta Front-End Developer',
  'freeCodeCamp — JavaScript Algorithms',
]

export default function Certifications() {
  return (
    <section className={styles.section} id="certifications">
      <div className="section-inner">
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.div>

        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.title}>Credentials &amp; Learning</h2>
            <p className={styles.subtitle}>
              Certifications I've earned and am working toward.
              Assets uploading soon.
            </p>
          </motion.div>
        </div>

        <div className={styles.grid}>
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              className={`${styles.certCard} ${cert.status === 'pending' ? styles.pending : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
            >
              <div className={styles.certTop}>
                <div className={styles.certIcon}>
                  {cert.status === 'pending'
                    ? <FaClock size={16} />
                    : <FaCertificate size={16} />
                  }
                </div>
                {cert.url && (
                  <a href={cert.url} target="_blank" rel="noreferrer" className={styles.certLink}>
                    <FaExternalLinkAlt size={11} />
                  </a>
                )}
              </div>
              <div className={styles.certName}>{cert.name}</div>
              <div className={styles.certIssuer}>{cert.issuer}</div>
              {cert.date && <div className={styles.certDate}>{cert.date}</div>}
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.upcoming}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className={styles.upcomingTitle}>
            <FaClock size={12} />
            Working toward
          </div>
          <div className={styles.upcomingList}>
            {upcoming.map(u => (
              <span key={u} className={styles.upcomingItem}>{u}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
