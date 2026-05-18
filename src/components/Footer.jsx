import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa'
import styles from './Footer.module.css'

const socials = [
  { icon: <FaGithub size={15} />, href: 'https://github.com', label: 'GitHub' },
  { icon: <FaTwitter size={15} />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <FaLinkedin size={15} />, href: 'https://linkedin.com', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`section-inner ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.logo}><span className={styles.at}>@</span>jeremiahmcodwell</span>
          <span className={styles.copy}>
            Built with <FaHeart size={10} className={styles.heart} /> — {new Date().getFullYear()}
          </span>
        </div>
        <div className={styles.socials}>
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label={s.label}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
