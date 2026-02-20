import { useRef } from 'react'
import { FaMedal, FaApple } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const awardItems = [
  {
    key: 'hackathon',
    icon: FaMedal,
    variant: 'silver',
    iconBg: 'rgba(208,208,208,0.12)',
    iconColor: '#c0c0c0',
    year: '2023',
  },
  {
    key: 'apple',
    icon: FaApple,
    variant: 'blue',
    iconBg: 'var(--accent-subtle)',
    iconColor: 'var(--accent)',
    year: '2022',
  },
]

const stats = [
  { value: '5', labelKey: 'stats.apps', color: 'var(--accent)' },
  { value: '#100', labelKey: 'stats.appstore', color: 'var(--yellow)' },
  { value: '2', labelKey: 'stats.awards', color: 'var(--green)' },
  { value: '2', labelKey: 'stats.languages', color: 'var(--purple)' },
]

export default function Awards() {
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
    <section className="section awards" id="awards" ref={sectionRef}>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        <motion.p className="section-eyebrow" variants={itemVariants}>{t('awards.eyebrow')}</motion.p>
        <motion.h2 className="section-title" variants={itemVariants}>
          {t('awards.title')}{' '}
          <span className="gradient-text">{t('awards.title2')}</span>
        </motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>{t('awards.subtitle')}</motion.p>

        <motion.div className="awards-list" variants={containerVariants} style={{ marginTop: 'var(--s8)' }}>
          {awardItems.map((award) => {
            const Icon = award.icon
            return (
              <motion.div
                key={award.key}
                className={`award-item award-item--${award.variant}`}
                variants={itemVariants}
                whileHover={{ x: 6 }}
                transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
              >
                <div
                  className="award-item__icon"
                  style={{ background: award.iconBg, color: award.iconColor }}
                >
                  <Icon size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="award-item__title">{t(`awards.${award.key}.title`)}</div>
                  <div className="award-item__org">{t(`awards.${award.key}.org`)}</div>
                  <div className="award-item__desc">{t(`awards.${award.key}.desc`)}</div>
                </div>
                <span className="award-badge">{award.year}</span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats */}
        <motion.div className="stats-grid" variants={containerVariants}>
          {stats.map((stat) => (
            <motion.div
              key={stat.labelKey}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="stat-card__value" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="stat-card__label">{t(stat.labelKey)}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
