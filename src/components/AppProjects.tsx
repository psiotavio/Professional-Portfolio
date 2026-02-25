import { useRef } from 'react'
import {
  FaFilm,
  FaBook,
  FaPlaneUp,
  FaHeart,
  FaGamepad,
  FaStar,
  FaApple,
  FaTrophy,
  FaGooglePlay
} from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const apps = [
  {
    key: 'watchfolio',
    icon: FaFilm,
    gradient: 'linear-gradient(135deg, #1c1c1e 0%, #2c2c2e 100%)',
    iconColor: '#e5c46a',
    top100: true,
    tech: ['React Native', 'TypeScript', 'TMDB API'],
    appStore: true,
    playStore: true,
  },
  {
    key: 'readfolio',
    icon: FaBook,
    gradient: 'linear-gradient(135deg, #1a2a1a 0%, #2d3e2d 100%)',
    iconColor: '#30d158',
    tech: ['React Native', 'TypeScript'],
    appStore: true,
    playStore: true,
  },
  {
    key: 'travelfolio',
    icon: FaPlaneUp,
    gradient: 'linear-gradient(135deg, #001a35 0%, #003366 100%)',
    iconColor: '#5ac8fa',
    tech: ['React Native', 'Maps API'],
    appStore: true,
    playStore: false,
  },
  {
    key: 'nos2',
    icon: FaHeart,
    gradient: 'linear-gradient(135deg, #2a001a 0%, #4d0033 100%)',
    iconColor: '#ff375f',
    tech: ['React Native', 'TypeScript'],
    appStore: true,
    playStore: true,
  },
  {
    key: 'minimystics',
    icon: FaGamepad,
    gradient: 'linear-gradient(135deg, #1a0d2e 0%, #32195c 100%)',
    iconColor: '#bf5af2',
    tech: ['React Native', 'Game Logic', 'TypeScript'],
    appStore: true,
    playStore: false,
  },
]

export default function AppProjects() {
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
    <section className="section app-projects" id="apps" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="app-projects__header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <div>
            <motion.p className="section-eyebrow" variants={itemVariants}>{t('apps.eyebrow')}</motion.p>
            <motion.h2 className="section-title" variants={itemVariants} style={{ marginBottom: 0 }}>
              {t('apps.title')}
            </motion.h2>
          </div>
          <motion.p className="section-subtitle" variants={itemVariants}>
            {t('apps.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          className="apps-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {apps.map((app) => {
            const Icon = app.icon
            return (
              <motion.div
                key={app.key}
                className="app-card"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: 'spring' as const, stiffness: 400, damping: 25 }}
              >
                <div className="app-card__top">
                  <div className="app-icon" style={{ background: app.gradient }}>
                    <Icon size={28} style={{ color: app.iconColor, position: 'relative', zIndex: 1 }} />
                  </div>
                  <div className="app-card__badges">
                    {app.top100 && (
                      <span className="badge-top100">
                        <FaStar size={10} />
                        Top 100
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <div className="app-card__name">
                    {app.key === 'nos2' ? 'Nós 2' : app.key.charAt(0).toUpperCase() + app.key.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2')}
                  </div>
                  <div className="app-card__category">
                    {t(`apps.${app.key}.category`)}
                  </div>
                </div>

                <p className="app-card__description">
                  {t(`apps.${app.key}.desc`)}
                </p>

                <div className="app-card__tech">
                  {app.tech.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                  {app.appStore && (
                    <span className="tech-pill" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>
                      <FaApple size={11} style={{ marginRight: '4px' }} />
                      iOS
                    </span>
                  )}
                  {app.playStore && (
                    <span className="tech-pill" style={{ background: 'rgba(0, 255, 100, 0.1)', color: '#00ff64', border: '1px solid rgba(0, 255, 100, 0.2)' }}>
                      <FaGooglePlay size={10} style={{ marginRight: '4px' }} />
                      Android
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Top 100 callout */}
        <motion.div
          className="apps-callout"
          style={{ marginTop: 'var(--s8)' }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ type: 'spring' as const, stiffness: 70, damping: 20 }}
        >
          <FaTrophy
            size={40}
            className="apps-callout__icon"
            style={{ color: 'var(--yellow)', flexShrink: 0 }}
          />
          <div>
            <div className="apps-callout__label">{t('apps.callout.label')}</div>
            <div className="apps-callout__title">{t('apps.callout.title')}</div>
            <div className="apps-callout__desc">{t('apps.callout.desc')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
