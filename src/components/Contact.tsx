import { useRef } from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram, FaLocationDot } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const socials = [
  {
    key: 'github',
    Icon: FaGithub,
    label: 'GitHub',
    url: 'https://github.com/psiotavio',
    handle: '@psiotavio',
    className: 'social-link social-link--github',
  },
  {
    key: 'linkedin',
    Icon: FaLinkedinIn,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/otavio-cunhap/',
    handle: 'otavio-cunhap',
    className: 'social-link social-link--linkedin',
  },
  {
    key: 'instagram',
    Icon: FaInstagram,
    label: 'Instagram',
    url: 'https://www.instagram.com/otavio_cunhap/?hl=en',
    handle: '@otavio_cunhap',
    className: 'social-link social-link--instagram',
  },
]

export default function Contact() {
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
    <>
      <section className="section contact" id="contact" ref={sectionRef}>
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <div className="contact__inner">
            <motion.p className="section-eyebrow" variants={itemVariants} style={{ justifyContent: 'center', display: 'flex' }}>
              {t('contact.eyebrow')}
            </motion.p>

            <motion.h2 className="contact__title" variants={itemVariants}>
              {t('contact.title')}{' '}
              <span className="gradient-text">{t('contact.titleGradient')}</span>
              <br />
              {t('contact.title2')}
            </motion.h2>

            <motion.p className="contact__sub" variants={itemVariants}>{t('contact.sub')}</motion.p>

            {/* Social links */}
            <motion.div className="social-links" variants={containerVariants}>
              {socials.map(({ key, Icon, label, url, handle, className }) => (
                <motion.a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.05 }}
                  transition={{ type: 'spring' as const, stiffness: 400, damping: 15 }}
                >
                  <Icon size={18} />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: 13, color: 'var(--text-tertiary)', lineHeight: 1 }}>{label}</div>
                    <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.3 }}>{handle}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Location */}
            <motion.div className="contact-location" variants={itemVariants}>
              <FaLocationDot size={14} style={{ color: 'var(--accent)' }} />
              {t('contact.location')}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__inner">
          <span className="footer__copy">{t('footer.copy')}</span>
          <div className="footer__links">
            <a href="https://github.com/psiotavio" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/otavio-cunhap/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
