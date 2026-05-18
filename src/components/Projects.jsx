import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaDiscord, FaStar, FaCodeBranch, FaCircle } from 'react-icons/fa'
import styles from './Projects.module.css'

const GITHUB_USER = 'KpnWorld'

const langColor = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
}

function RepoCard({ repo, index }) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className={styles.card}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
      }}
      whileHover={{ y: -5 }}
    >
      <div className={styles.cardTop}>
        <div className={styles.repoName}>
          <FaGithub size={13} className={styles.repoIcon} />
          {repo.name}
        </div>
        <div className={styles.cardLinks}>
          {repo.homepage && (
            <span
              className={styles.iconLink}
              onClick={e => { e.preventDefault(); window.open(repo.homepage, '_blank') }}
              title="Live site"
            >
              {repo.homepage.includes('discord') ? <FaDiscord size={13} /> : <FaExternalLinkAlt size={11} />}
            </span>
          )}
        </div>
      </div>

      <p className={styles.cardDesc}>
        {repo.description || 'No description yet.'}
      </p>

      <div className={styles.cardMeta}>
        {repo.language && (
          <span className={styles.lang}>
            <FaCircle size={9} style={{ color: langColor[repo.language] || '#aaa' }} />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span className={styles.metaItem}>
            <FaStar size={11} /> {repo.stargazers_count}
          </span>
        )}
        {repo.forks_count > 0 && (
          <span className={styles.metaItem}>
            <FaCodeBranch size={11} /> {repo.forks_count}
          </span>
        )}
        <span className={styles.updated}>
          {timeAgo(repo.updated_at)}
        </span>
      </div>
    </motion.a>
  )
}

function SkeletonCard() {
  return (
    <div className={`${styles.card} ${styles.skeleton}`}>
      <div className={`${styles.skelLine} ${styles.skelTitle}`} />
      <div className={`${styles.skelLine} ${styles.skelDesc}`} />
      <div className={`${styles.skelLine} ${styles.skelDesc} ${styles.skelShort}`} />
      <div className={`${styles.skelLine} ${styles.skelMeta}`} />
    </div>
  )
}

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const days = Math.floor(diff / 86400000)
  if (days < 1) return 'Today'
  if (days < 7) return `${days}d ago`
  if (days < 30) return `${Math.floor(days / 7)}w ago`
  if (days < 365) return `${Math.floor(days / 30)}mo ago`
  return `${Math.floor(days / 365)}y ago`
}

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=30&type=public`)
      .then(r => r.json())
      .then(data => {
        const filtered = data
          .filter(r => !r.fork && !r.archived)
          .slice(0, 9)
        setRepos(filtered)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <section className={styles.section} id="projects">
      <div className="section-inner">
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.div>

        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className={styles.title}>Things I'm Building</h2>
            <p className={styles.subtitle}>
              Live from GitHub — public repos, updated in real time.
            </p>
          </motion.div>

          <motion.a
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noreferrer"
            className={styles.githubLink}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FaGithub size={14} /> @{GITHUB_USER}
          </motion.a>
        </div>

        {error ? (
          <div className={styles.errorState}>
            Couldn't load repos right now. <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noreferrer">View on GitHub →</a>
          </div>
        ) : loading ? (
          <div className={styles.grid}>
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <motion.div
            className={styles.grid}
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          >
            {repos.map((repo, i) => (
              <RepoCard key={repo.id} repo={repo} index={i} />
            ))}
          </motion.div>
        )}

        {/* Contribution graph */}
        <motion.div
          className={styles.graphWrap}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className={styles.graphHeader}>
            <span className={styles.graphTitle}>Contribution Activity</span>
            <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noreferrer" className={styles.graphLink}>
              github.com/{GITHUB_USER} <FaExternalLinkAlt size={10} />
            </a>
          </div>
          <div className={styles.graphInner}>
            <img
              src={`https://ghchart.rshah.org/5b5ef4/${GITHUB_USER}`}
              alt="GitHub contribution graph"
              className={styles.graphImg}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
