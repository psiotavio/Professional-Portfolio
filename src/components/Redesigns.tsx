import { useState, useRef } from 'react'
import { FaXTwitter, FaInstagram, FaAmazon, FaSpotify, FaArrowRight } from 'react-icons/fa6'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const redesigns = [
  // {
  //   key: 'twitter',
  //   name: 'Twitter / X',
  //   Icon: FaXTwitter,
  //   bg: 'linear-gradient(135deg, #0a0a0a 0%, #15202b 100%)',
  //   glow: 'rgba(255,255,255,0.06)',
  //   iconColor: '#fff',
  //   uiBadgeStyle: { background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' },
  // },
  {
    key: 'instagram',
    name: 'Instagram',
    Icon: FaInstagram,
    pdf: '/pdfs/instagram.pdf',
    bg: 'linear-gradient(135deg, #405de6 0%, #c13584 55%, #e1306c 100%)',
    glow: 'rgba(225,48,108,0.20)',
    iconColor: '#fff',
    uiBadgeStyle: { background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1px solid rgba(255,255,255,0.20)' },
  },
  {
    key: 'primevideo',
    name: 'Prime Video',
    Icon: FaAmazon,
    pdf: '/pdfs/prime.pdf',
    bg: 'linear-gradient(135deg, #00050d 0%, #00234e 100%)',
    glow: 'rgba(0,168,255,0.16)',
    iconColor: '#00a8ff',
    uiBadgeStyle: { background: 'rgba(0,168,255,0.15)', color: '#00a8ff', border: '1px solid rgba(0,168,255,0.25)' },
  },
  {
    key: 'spotify',
    name: 'Spotify',
    Icon: FaSpotify,
    pdf: '/pdfs/spotify.pdf',
    bg: 'linear-gradient(135deg, #0d1117 0%, #0a2818 100%)',
    glow: 'rgba(30,215,96,0.16)',
    iconColor: '#1ed760',
    uiBadgeStyle: { background: 'rgba(30,215,96,0.12)', color: '#1ed760', border: '1px solid rgba(30,215,96,0.25)' },
  },
]

export default function Redesigns() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)

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
    <section className="section redesigns" id="redesigns" ref={sectionRef}>
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        <motion.p className="section-eyebrow" variants={itemVariants}>{t('redesigns.eyebrow')}</motion.p>
        <motion.h2 className="section-title" variants={itemVariants}>{t('redesigns.title')}</motion.h2>
        <motion.p className="section-subtitle" variants={itemVariants}>{t('redesigns.subtitle')}</motion.p>

        <motion.div className="redesigns-grid" variants={containerVariants}>
          {redesigns.map((rd) => {
            const Icon = rd.Icon
            return (
              <motion.div
                key={rd.key}
                className="redesign-card"
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring' as const, stiffness: 400, damping: 25 }}
                onClick={() => rd.pdf && setSelectedPdf(rd.pdf)}
                style={{ cursor: rd.pdf ? 'pointer' : 'default' }}
              >
                {/* Visual area */}
                <div className="redesign-card__visual" style={{ background: rd.bg }}>
                  {/* Glow overlay */}
                  <div
                    className="redesign-card__glow"
                    style={{
                      background: `radial-gradient(ellipse 60% 60% at 50% 100%, ${rd.glow}, transparent)`,
                    }}
                  />

                  {/* Phone mockup */}
                  <div className="redesign-card__phone">
                    <div className="redesign-card__dynamic-island" />
                    <Icon
                      size={36}
                      className="redesign-card__phone-icon"
                      style={{ color: rd.iconColor }}
                    />
                  </div>

                  {/* UI badge */}
                  <div
                    className="redesign-card__ui-badge"
                    style={rd.uiBadgeStyle}
                  >
                    UI/UX
                  </div>
                </div>

                {/* Content */}
                <div className="redesign-card__content">
                  <div className="redesign-card__name">{rd.name}</div>
                  <div className="redesign-card__tag">{t(`redesigns.${rd.key}.tag`)}</div>
                  <p className="redesign-card__desc">{t(`redesigns.${rd.key}.desc`)}</p>

                  {rd.pdf && (
                    <div
                      className="redesign-card__cta"
                      style={{ color: 'var(--accent)' }}
                    >
                      View PDF <FaArrowRight size={12} />
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>

      {/* PDF Modal */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setSelectedPdf(null)}
          >
            <motion.div
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.95 }}
              style={{
                width: '100%',
                maxWidth: '1000px',
                height: '90vh',
                backgroundColor: 'var(--bg-card)',
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid var(--border)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPdf(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(0,0,0,0.5)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  cursor: 'pointer',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem'
                }}
              >×</button>
              <iframe
                src={selectedPdf}
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="PDF Viewer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
