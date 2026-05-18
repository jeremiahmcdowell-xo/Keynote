import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}><span className={styles.at}>@</span>jeremiahmcodwell</span>
          <span className={styles.copy}>© {new Date().getFullYear()} — All rights reserved</span>
        </div>
        <div className={styles.right}>
          <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.socialLink}>GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.socialLink}>LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.socialLink}>Twitter</a>
        </div>
      </div>
    </footer>
  )
}
