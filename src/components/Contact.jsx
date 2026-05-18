import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.label}>Contact</span>
          <h2 className={styles.title}>Let's Build Something Together</h2>
          <p className={styles.subtitle}>Have a project in mind? I'd love to hear about it.</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.formCard}>
            {sent ? (
              <motion.div
                className={styles.successState}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.successIcon}>✓</div>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out — I'll get back to you soon.</p>
                <button className={styles.resetBtn} onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}>
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.fieldRow}>
                  <Field label="Name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                </div>
                <Field label="Message" name="message" type="textarea" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required />
                <button type="submit" className={styles.submitBtn}>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>

          <div className={styles.infoCol}>
            <InfoCard
              icon="✉️"
              label="Email"
              value="hey@jeremiahmcodwell.com"
              href="mailto:hey@jeremiahmcodwell.com"
            />
            <InfoCard
              icon="🐙"
              label="GitHub"
              value="@jeremiahmcodwell"
              href="https://github.com"
            />
            <InfoCard
              icon="🔗"
              label="LinkedIn"
              value="jeremiahmcodwell"
              href="https://linkedin.com"
            />
            <div className={styles.availCard}>
              <div className={styles.availDot} />
              <div>
                <div className={styles.availTitle}>Open to new projects</div>
                <div className={styles.availSub}>Typically responds within 24 hours</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Field({ label, name, type, value, onChange, placeholder, required }) {
  return (
    <div className={styles.field}>
      <label className={styles.fieldLabel}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          rows={5}
        />
      ) : (
        <input
          type={type}
          name={name}
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  )
}

function InfoCard({ icon, label, value, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.infoCard}>
      <span className={styles.infoIcon}>{icon}</span>
      <div>
        <div className={styles.infoLabel}>{label}</div>
        <div className={styles.infoValue}>{value}</div>
      </div>
      <svg className={styles.infoArrow} width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 2h10v10M2 12L12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  )
}
