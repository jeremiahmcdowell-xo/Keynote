import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPaperPlane, FaCheck, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import styles from './Contact.module.css'

const socials = [
  { icon: <FaGithub size={15} />, href: 'https://github.com/KpnWorld', label: 'GitHub' },
  { icon: <FaTwitter size={15} />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <FaLinkedin size={15} />, href: 'https://linkedin.com', label: 'LinkedIn' },
]

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)

  const set = (k, v) => setFields(f => ({ ...f, [k]: v }))

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${fields.name}`)
    const body = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`
    )
    window.location.href = `mailto:jeremiahmcdowell874@gmail.com,og.devworld@gmail.com,og.gameworld@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setFields({ name: '', email: '', message: '' })
    }, 3000)
  }

  const valid = fields.name.trim() && fields.email.trim() && fields.message.trim()

  return (
    <section className={styles.section} id="contact">
      <div className="section-inner">
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.div>

        <div className={styles.layout}>
          {/* Left — heading + socials */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.title}>Let's work<br />together.</h2>
            <p className={styles.subtitle}>
              Got a project, idea, or just want to connect? Send me a message and I'll
              get back to you.
            </p>
            <div className={styles.socials}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialBtn}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={`${styles.field} ${focused === 'name' ? styles.fieldFocused : ''}`}>
                  <label className={styles.fieldLabel}>Name</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Jeremiah"
                    value={fields.name}
                    onChange={e => set('name', e.target.value)}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
                <div className={`${styles.field} ${focused === 'email' ? styles.fieldFocused : ''}`}>
                  <label className={styles.fieldLabel}>Email</label>
                  <input
                    type="email"
                    className={styles.input}
                    placeholder="you@example.com"
                    value={fields.email}
                    onChange={e => set('email', e.target.value)}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
              </div>

              <div className={`${styles.field} ${focused === 'message' ? styles.fieldFocused : ''}`}>
                <label className={styles.fieldLabel}>Message</label>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="Hey, I'd love to collaborate on..."
                  value={fields.message}
                  onChange={e => set('message', e.target.value)}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  rows={5}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className={`${styles.submitBtn} ${sent ? styles.sentBtn : ''}`}
                disabled={!valid || sent}
                whileHover={valid && !sent ? { scale: 1.02 } : {}}
                whileTap={valid && !sent ? { scale: 0.97 } : {}}
              >
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.span
                      key="sent"
                      className={styles.btnInner}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaCheck size={13} /> Sent!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      className={styles.btnInner}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaPaperPlane size={13} /> Send message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
