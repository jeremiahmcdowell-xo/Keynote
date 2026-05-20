import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt, FaClock, FaTimes, FaExpand } from 'react-icons/fa'
import styles from './Certifications.module.css'

const certs = [
  {
    name: 'Certified',
    issuer: 'Click to view certificate',
    date: '2025',
    status: 'earned',
    image: `${import.meta.env.BASE_URL}images/cert.png`,
    url: null,
  },
]

const upcoming = [
  'DevOps Engineer',
  'Google UX Design Certificate',
  'CS50',
  'CS50P',
]

export default function Certifications() {
  const [lightbox, setLightbox] = useState(null)

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
              Certifications earned and what I'm working toward next.
            </p>
          </motion.div>
        </div>

        {/* Earned certs */}
        <div className={styles.certGrid}>
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              className={styles.certCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              onClick={() => cert.image && setLightbox(cert)}
            >
              {cert.image && (
                <div className={styles.certImgWrap}>
                  <img src={cert.image} alt={cert.name} className={styles.certImg} />
                  <div className={styles.certImgOverlay}>
                    <FaExpand size={16} />
                  </div>
                </div>
              )}
              <div className={styles.certBody}>
                <div className={styles.certTop}>
                  <div className={styles.certIcon}>
                    <FaCertificate size={14} />
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.certLink}
                      onClick={e => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt size={11} />
                    </a>
                  )}
                </div>
                <div className={styles.certName}>{cert.name}</div>
                <div className={styles.certIssuer}>{cert.issuer}</div>
                {cert.date && <div className={styles.certDate}>{cert.date}</div>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Working toward */}
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className={styles.lightboxBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
            >
              <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>
                <FaTimes size={14} />
              </button>
              <img src={lightbox.image} alt={lightbox.name} className={styles.lightboxImg} />
              <div className={styles.lightboxCaption}>
                <span className={styles.lightboxName}>{lightbox.name}</span>
                {lightbox.date && <span className={styles.lightboxDate}>{lightbox.date}</span>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
