import { useRef } from 'react'
import { FaCode, FaLayerGroup, FaPenRuler } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const skillGroups = [
  {
    key: 'languages',
    icon: FaCode,
    color: 'var(--accent)',
    colorSubtle: 'var(--accent-subtle)',
    skills: [
      { name: 'TypeScript', color: '#3178c6' },
      { name: 'JavaScript', color: '#f7df1e' },
      { name: 'Swift', color: '#fa7343' },
      { name: 'Java', color: '#ed8b00' },
      { name: 'Python', color: '#3776ab' },
      { name: 'HTML & CSS', color: '#e34c26' },
    ],
  },
  {
    key: 'frameworks',
    icon: FaLayerGroup,
    color: 'var(--purple)',
    colorSubtle: 'var(--purple-subtle)',
    skills: [
      { name: 'React Native', color: '#61dafb' },
      { name: 'React', color: '#61dafb' },
      { name: 'SwiftUI', color: '#fa7343' },
      { name: 'Node.js', color: '#339933' },
      { name: 'Expo', color: '#000020' },
      { name: 'Vite', color: '#646cff' },
    ],
  },
  {
    key: 'design',
    icon: FaPenRuler,
    color: 'var(--pink)',
    colorSubtle: 'rgba(255, 55, 95, 0.10)',
    skills: [
      { name: 'Figma', color: '#f24e1e' },
      { name: 'UI/UX Design', color: '#9b59b6' },
      { name: 'Design Systems', color: '#0d96f2' },
      { name: 'Prototyping', color: '#ff7262' },
      { name: 'Apple HIG', color: '#555' },
    ],
  },
]

const spokenLanguages = [
  { key: 'pt', flag: '🇧🇷', levelKey: 'native' },
  { key: 'en', flag: '🇺🇸', levelKey: 'fluent' },
  { key: 'es', flag: '🇪🇸', levelKey: 'basic' },
]

export default function Skills() {
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

  const levelColor = (level: string) => {
    if (level === 'native') return 'var(--green)'
    if (level === 'fluent') return 'var(--accent)'
    return 'var(--yellow)'
  }

  return (
    <section className="section skills" id="skills" ref={sectionRef}>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        <motion.p className="section-eyebrow" variants={itemVariants}>{t('skills.eyebrow')}</motion.p>
        <motion.h2 className="section-title" variants={itemVariants}>{t('skills.title')}</motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>{t('skills.subtitle')}</motion.p>

        <motion.div className="skills__grid" variants={containerVariants}>
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.key}
                className="skills__group"
                variants={itemVariants}
                whileHover={{ borderColor: 'var(--border-hover)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 'var(--s3)' }}>
                  <div style={{
                    width: 32, height: 32,
                    borderRadius: 'var(--r-sm)',
                    background: group.colorSubtle,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: group.color,
                  }}>
                    <Icon size={16} />
                  </div>
                  <span className="skills__group-title" style={{ marginBottom: 0 }}>
                    {t(`skills.${group.key}`)}
                  </span>
                </div>

                <div className="skills__pills">
                  {group.skills.map((sk) => (
                    <motion.div
                      key={sk.name}
                      className="skill-pill"
                      whileHover={{ y: -3, scale: 1.04 }}
                    >
                      <span className="skill-pill__dot" style={{ background: sk.color }} />
                      {sk.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Spoken Languages */}
        <motion.div className="languages-section" variants={itemVariants}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--s2)', marginBottom: 'var(--s1)', flexWrap: 'wrap' }}>
            <h3 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
              {t('languages.title')}
            </h3>
            <span style={{ fontSize: 15, color: 'var(--text-tertiary)' }}>{t('languages.subtitle')}</span>
          </div>

          <motion.div className="languages-grid" variants={containerVariants}>
            {spokenLanguages.map((lang) => (
              <motion.div
                key={lang.key}
                className="lang-card"
                variants={itemVariants}
                whileHover={{ y: -3 }}
              >
                <span className="lang-card__flag">{lang.flag}</span>
                <div>
                  <div className="lang-card__name">{t(`languages.${lang.key}`)}</div>
                  <div className="lang-card__level" style={{ color: levelColor(lang.levelKey) }}>
                    {t(`languages.${lang.levelKey}`)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
