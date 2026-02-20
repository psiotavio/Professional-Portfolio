import { useEffect, useRef } from 'react'
import { FaArrowDown, FaGithub, FaCamera } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)

  // Parallax on orbs
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY, currentTarget } = e
      const { width, height } = (currentTarget as HTMLElement).getBoundingClientRect()
      const xPct = (clientX / width - 0.5) * 2
      const yPct = (clientY / height - 0.5) * 2

      const orb1 = hero.querySelector<HTMLElement>('.hero__orb--1')
      const orb2 = hero.querySelector<HTMLElement>('.hero__orb--2')

      if (orb1) orb1.style.transform = `translateX(calc(-50% + ${xPct * 18}px)) translateY(${yPct * 14}px)`
      if (orb2) orb2.style.transform = `translate(${xPct * -22}px, ${yPct * -16}px)`
    }

    hero.addEventListener('mousemove', onMouseMove)
    return () => hero.removeEventListener('mousemove', onMouseMove)
  }, [])

  const scrollToProjects = () => {
    const el = document.querySelector('#apps')
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const scrollDown = () => {
    const el = document.querySelector('#about')
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 64
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  // Animation variants
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
        stiffness: 80,
        damping: 20,
        mass: 1,
      },
    },
  }

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 70,
        damping: 20,
        delay: 0.6,
      },
    },
  }

  return (
    <section className="hero" ref={heroRef} id="hero">
      {/* Background layers */}
      <div className="hero__bg-gradient" />
      <div className="hero__grid" />
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      {/* Main content */}
      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div className="hero__badge" variants={itemVariants}>
          <span className="hero__badge-dot" />
          {t('hero.badge')}
        </motion.div>

        {/* Name */}
        <motion.h1 className="hero__name" variants={itemVariants}>
          {t('hero.name1')}{' '}
          <span className="name-dim">{t('hero.name2')}</span>
        </motion.h1>

        {/* Title */}
        <motion.p className="hero__title-line" variants={itemVariants}>
          <strong>{t('hero.titleStrong')}</strong>
          {' '}{t('hero.titleRest')}
        </motion.p>

        {/* Description */}
        <motion.p className="hero__description" variants={itemVariants}>
          {t('hero.description')}
        </motion.p>

        {/* CTAs */}
        <motion.div className="hero__actions" variants={itemVariants}>
          <button className="btn-primary" onClick={scrollToProjects}>
            {t('hero.cta')}
            <FaArrowDown size={14} />
          </button>
          <a
            className="btn-secondary"
            href="https://github.com/psiotavio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={16} />
            GitHub
          </a>
        </motion.div>

        {/* Photo */}
        <motion.div className="hero__photo-wrapper" variants={scaleVariants}>
          <div className="hero__photo-ring" />
          <div className="hero__photo">
            <div className="hero__photo-placeholder">
              <FaCamera size={32} style={{ opacity: 0.35 }} />
              <span>{t('hero.photo')}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        className="hero__scroll-indicator"
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        {t('hero.scroll')}
        <FaArrowDown size={12} className="hero__scroll-chevron" />
      </motion.button>
    </section>
  )
}
