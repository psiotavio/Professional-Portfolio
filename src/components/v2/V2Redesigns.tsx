import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaInstagram, FaAmazon, FaSpotify, FaArrowRight } from 'react-icons/fa6'
import { useLanguage } from '../../contexts/LanguageContext'
import { useIsMobile } from '../../hooks/useIsMobile'
import '../../styles/v2.css'

const redesigns = [
    { key: 'instagram', name: 'Instagram', Icon: FaInstagram, pdf: '/pdfs/instagram.pdf' },
    { key: 'primevideo', name: 'Prime Video', Icon: FaAmazon, pdf: '/pdfs/prime.pdf' },
    { key: 'spotify', name: 'Spotify', Icon: FaSpotify, pdf: '/pdfs/spotify.pdf' },
]

export default function V2Redesigns() {
    const { t } = useLanguage()
    const isMobile = useIsMobile()
    const containerRef = useRef<HTMLDivElement>(null)
    const mobileScrollRef = useRef<HTMLDivElement>(null)
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null)
    const [mobileActiveIdx, setMobileActiveIdx] = useState(0)

    const handleMobileScroll = () => {
        if (!mobileScrollRef.current) return
        const el = mobileScrollRef.current
        const cardWidth = el.scrollWidth / redesigns.length
        const idx = Math.round(el.scrollLeft / cardWidth)
        setMobileActiveIdx(Math.max(0, Math.min(idx, redesigns.length - 1)))
    }

    const scrollToCard = (idx: number) => {
        if (!mobileScrollRef.current) return
        const el = mobileScrollRef.current
        const cardWidth = el.scrollWidth / redesigns.length
        el.scrollTo({ left: cardWidth * idx, behavior: 'smooth' })
    }

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

    const renderCardContent = (rd: typeof redesigns[0]) => {
        const Icon = rd.Icon
        return (
            <div className="v2-project-card-inner">
                <div className="v2-redesign-visual">
                    <Icon size={40} className="v2-redesign-icon" />
                    <div className="v2-redesign-badge">UI/UX</div>
                </div>
                <h3 className="v2-project-name" style={{ marginTop: "2rem" }}>{rd.name}</h3>
                <div className="v2-project-category">{t(`redesigns.${rd.key}.tag`)}</div>
                <p className="v2-project-desc">{t(`redesigns.${rd.key}.desc`)}</p>
                {rd.pdf && (
                    <div className="v2-redesign-cta" style={{ marginTop: "auto" }}>
                        {t('redesigns.cta')} <FaArrowRight size={12} style={{ color: "var(--v2-gold)" }} />
                    </div>
                )}
            </div>
        )
    }

    const pdfModal = (
        <AnimatePresence>
            {selectedPdf && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        top: 0, left: 0, right: 0, bottom: 0,
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
                            backgroundColor: 'var(--v2-bg-panel)',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            position: 'relative',
                            border: '1px solid var(--v2-gold-dim)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedPdf(null)}
                            style={{
                                position: 'absolute',
                                top: '1rem', right: '1rem',
                                background: 'rgba(0,0,0,0.5)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '36px', height: '36px',
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
    )

    if (isMobile) {
        return (
            <>
                <div className="v2-mobile-section-wrapper" style={{ background: 'var(--v2-bg-dark)', borderBottom: '1px solid var(--v2-gold-dim)' }}>
                    <div className="v2-mobile-section-header">
                        <p className="v2-section-eyebrow">{t('redesigns.eyebrow')}</p>
                        <h2 className="v2-section-title">{t('redesigns.title')}</h2>
                        <div className="v2-ornament"></div>
                    </div>
                    <div
                        ref={mobileScrollRef}
                        className="v2-mobile-scroll-track"
                        onScroll={handleMobileScroll}
                    >
                        {redesigns.map((rd) => (
                            <div
                                key={rd.key}
                                className="v2-project-card v2-mobile-card"
                                style={{ cursor: rd.pdf ? 'pointer' : 'default' }}
                                onClick={() => rd.pdf && setSelectedPdf(rd.pdf)}
                            >
                                {renderCardContent(rd)}
                            </div>
                        ))}
                    </div>
                    <div className="v2-mobile-pagination">
                        {redesigns.map((_, idx) => (
                            <div
                                key={idx}
                                className={`v2-mobile-dot ${idx === mobileActiveIdx ? 'active' : ''}`}
                                onClick={() => scrollToCard(idx)}
                            />
                        ))}
                    </div>
                    <div className="v2-swipe-hint">
                        <span>deslize para ver mais</span>
                        <span>→</span>
                    </div>
                </div>
                {pdfModal}
            </>
        )
    }

    return (
        <>
            <div
                ref={containerRef}
                className="v2-projects-wrapper"
                style={{ height: "400vh", position: "relative", background: "var(--v2-bg-dark)" }}
            >
                <div
                    className="v2-projects-sticky"
                    style={{
                        position: "sticky",
                        top: 0,
                        height: "100vh",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}
                >
                    <motion.div style={{ opacity }} className="v2-section-header">
                        <p className="v2-section-eyebrow">{t('redesigns.eyebrow')}</p>
                        <h2 className="v2-section-title">{t('redesigns.title')}</h2>
                        <div className="v2-ornament"></div>
                    </motion.div>
                    <motion.div
                        style={{ x, display: "flex", gap: "3rem", flexDirection: "row" }}
                        className="v2-projects-track"
                    >
                        {redesigns.map((rd) => (
                            <div
                                key={rd.key}
                                className="v2-project-card"
                                style={{ flexShrink: 0, cursor: rd.pdf ? "pointer" : "default" }}
                                onClick={() => rd.pdf && setSelectedPdf(rd.pdf)}
                            >
                                {renderCardContent(rd)}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            {pdfModal}
        </>
    )
}
