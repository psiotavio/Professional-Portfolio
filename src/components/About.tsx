import { useRef } from 'react'
import { FaGraduationCap, FaFlask, FaCamera } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export default function About() {
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
    hidden: { opacity: 0, y: 40 },
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

  const rightVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 70,
        damping: 20,
      },
    },
  }

  return (
    <section className="section about" id="about" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="about__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Left — text + education */}
          <div>
            <motion.p className="section-eyebrow" variants={itemVariants}>{t('about.eyebrow')}</motion.p>
            <motion.h2 className="section-title" variants={itemVariants}>
              {t('about.title')}{' '}
              <span className="gradient-text">{t('about.title2')}</span>
            </motion.h2>

            <motion.p className="about__body" variants={itemVariants}>
              {t('about.body1')}
            </motion.p>
            <motion.p className="about__body" variants={itemVariants}>
              {t('about.body2')}
            </motion.p>

            {/* Education */}
            <motion.div className="about__education" variants={itemVariants} style={{ marginTop: 'var(--s5)' }}>
              {/* Grad */}
              <motion.div className="edu-card" whileHover={{ scale: 1.02 }} transition={{ type: 'spring' as const, stiffness: 400, damping: 10 }}>
                <div
                  className="edu-card__icon"
                  style={{ background: 'var(--green-subtle)', color: 'var(--green)' }}
                >
                  <FaGraduationCap size={20} />
                </div>
                <div>
                  <div className="edu-card__degree">{t('edu.degree1')}</div>
                  <div className="edu-card__school">{t('edu.school1')}</div>
                  <span className="edu-card__status edu-card__status--grad">{t('edu.grad')}</span>
                </div>
              </motion.div>

              {/* Masters */}
              <motion.div className="edu-card" whileHover={{ scale: 1.02 }} transition={{ type: 'spring' as const, stiffness: 400, damping: 10 }}>
                <div
                  className="edu-card__icon"
                  style={{ background: 'var(--accent-subtle)', color: 'var(--accent)' }}
                >
                  <FaFlask size={18} />
                </div>
                <div>
                  <div className="edu-card__degree">{t('edu.degree2')}</div>
                  <div className="edu-card__school">{t('edu.school2')}</div>
                  <span className="edu-card__status edu-card__status--current">{t('edu.inProgress')}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right — photo grid */}
          <motion.div variants={rightVariants}>
            <div className="about__photos">
              {/* Main tall photo */}
              <motion.div className="photo-slot photo-slot--tall" whileHover={{ scale: 1.03 }} transition={{ type: 'spring' as const, stiffness: 400, damping: 10 }}>
                <div className="photo-slot__inner">
                  <FaCamera size={28} style={{ opacity: 0.3 }} />
                  <span className="photo-slot__label">{t('photo.main')}</span>
                </div>
              </motion.div>

              {/* Photo 2 */}
              <motion.div className="photo-slot photo-slot--short" whileHover={{ scale: 1.05 }} transition={{ type: 'spring' as const, stiffness: 400, damping: 10 }}>
                <div className="photo-slot__inner">
                  <FaCamera size={20} style={{ opacity: 0.25 }} />
                  <span className="photo-slot__label">{t('photo.2')}</span>
                </div>
              </motion.div>

              {/* Photo 3 */}
              <motion.div className="photo-slot photo-slot--short" whileHover={{ scale: 1.05 }} transition={{ type: 'spring' as const, stiffness: 400, damping: 10 }}>
                <div className="photo-slot__inner">
                  <FaCamera size={20} style={{ opacity: 0.25 }} />
                  <span className="photo-slot__label">{t('photo.3')}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
