import { useRef } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const skeletonCards = [
  { w1: '45%', w2: '80%', w3: '60%' },
  { w1: '55%', w2: '70%', w3: '75%' },
  { w1: '40%', w2: '85%', w3: '50%' },
]

export default function GithubProjects() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 70,
        damping: 20,
      },
    },
  }

  return (
    <section className="section github-projects" id="github" ref={sectionRef}>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        <motion.p className="section-eyebrow" variants={itemVariants}>{t('github.eyebrow')}</motion.p>
        <motion.h2 className="section-title" variants={itemVariants}>{t('github.title')}</motion.h2>

        <div className="github-coming-soon">
          <motion.div
            className="github-coming-soon__icon"
            variants={itemVariants}
          >
            <FaGithub size={44} />
          </motion.div>
          <motion.h3 className="github-coming-soon__title" variants={itemVariants}>{t('github.comingSoon')}</motion.h3>
          <motion.p className="github-coming-soon__desc" variants={itemVariants}>
            {t('github.comingSoonDesc')}
          </motion.p>

          {/* Skeleton cards */}
          <motion.div className="github-skeletons" variants={itemVariants}>
            {skeletonCards.map((sk, i) => (
              <div key={i} className="github-skeleton-card">
                <div className="skeleton-line" style={{ height: 18, width: sk.w1 }} />
                <div className="skeleton-line" style={{ height: 13, width: sk.w2 }} />
                <div className="skeleton-line" style={{ height: 13, width: sk.w3 }} />
                <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                  <div className="skeleton-line" style={{ height: 22, width: 64, borderRadius: 99 }} />
                  <div className="skeleton-line" style={{ height: 22, width: 48, borderRadius: 99 }} />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.a
            href="https://github.com/psiotavio"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link-btn"
            variants={itemVariants}
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring' as const, stiffness: 400, damping: 10 }}
          >
            <FaGithub size={18} />
            @psiotavio
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
