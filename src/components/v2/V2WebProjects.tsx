import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaGlobe, FaLink, FaXmark, FaGithub, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { useLanguage } from '../../contexts/LanguageContext'
import { useIsMobile } from '../../hooks/useIsMobile'
import '../../styles/v2.css'

interface WebProject {
    key: string;
    icon: string;
    link?: string;
    github?: string;
    screenshots: string[];
    isFirst?: boolean;
}

const projects: WebProject[] = [
    {
        key: 'potterdle',
        icon: '/webIcons/potterdle-icon.png',
        link: 'https://potterdle.com.br/',
        screenshots: ['/webPrints/potterdle.webp'],
        isFirst: true
    },
    {
        key: 'voyage',
        icon: '/webIcons/voyage-icon.png',
        link: 'https://voyage-site.netlify.app/',
        screenshots: ['/webPrints/voyage.webp']
    },
    {
        key: 'watchfolio',
        icon: '/webIcons/watchfolio-icon.png',
        link: 'https://watchfolio.com.br/watchfolioWeb',
        screenshots: ['/webPrints/watchfolio.webp']
    },
    {
        key: 'minimystics',
        icon: '/webIcons/miniMystics-icon.png',
        link: 'https://minimystics.netlify.app/',
        screenshots: ['/webPrints/miniMystics.webp']
    }
]

export default function V2WebProjects() {
    const { t } = useLanguage()
    const isMobile = useIsMobile()
    const containerRef = useRef<HTMLDivElement>(null)
    const mobileScrollRef = useRef<HTMLDivElement>(null)
    const [selectedProject, setSelectedProject] = useState<WebProject | null>(null)
    const [currentScreenshot, setCurrentScreenshot] = useState(0)
    const [mobileActiveIdx, setMobileActiveIdx] = useState(0)

    useEffect(() => {
        if (selectedProject) {
            const timer = setInterval(() => {
                setCurrentScreenshot((prev) => (prev + 1) % (selectedProject.screenshots?.length || 1))
            }, 10000)
            return () => clearInterval(timer)
        }
    }, [selectedProject])

    const handleMobileScroll = () => {
        if (!mobileScrollRef.current) return
        const el = mobileScrollRef.current
        const cardWidth = el.scrollWidth / projects.length
        const idx = Math.round(el.scrollLeft / cardWidth)
        setMobileActiveIdx(Math.max(0, Math.min(idx, projects.length - 1)))
    }

    const scrollToCard = (idx: number) => {
        if (!mobileScrollRef.current) return
        const el = mobileScrollRef.current
        const cardWidth = el.scrollWidth / projects.length
        el.scrollTo({ left: cardWidth * idx, behavior: 'smooth' })
    }

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"])
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

    const projectTitle = (key: string) =>
        key === 'watchfolio' ? 'WatchFolio Web' : key.charAt(0).toUpperCase() + key.slice(1)

    const renderCardContent = (project: WebProject) => (
        <div className="v2-project-card-inner">
            <div className="v2-project-icon-wrapper" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="v2-web-project-icon-container">
                    <img src={project.icon} alt={project.key} className="v2-web-project-img-icon" />
                </div>
                {project.isFirst && (
                    <div className="v2-project-badge" style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)', borderColor: 'var(--v2-gold)', color: 'var(--v2-gold)', margin: 0 }}>
                        <FaStar size={10} style={{ marginRight: '4px' }} /> {t('web.first')}
                    </div>
                )}
            </div>
            <h3 className="v2-project-name">{projectTitle(project.key)}</h3>
            <div className="v2-project-category">{t(`web.${project.key}.category`)}</div>
            <p className="v2-project-desc">{t(`web.${project.key}.desc`)}</p>
            <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button
                    className="v2-view-more-btn"
                    onClick={() => { setSelectedProject(project); setCurrentScreenshot(0) }}
                >
                    {t('apps.learnMore')}
                </button>
                {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="v2-web-link-icon" style={{ marginLeft: 'auto' }}>
                        <FaLink size={20} />
                    </a>
                )}
            </div>
        </div>
    )

    const modal = (
        <AnimatePresence>
            {selectedProject && (
                <motion.div
                    className="v2-modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        className="v2-modal-content"
                        style={{ maxWidth: '1000px' }}
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 10 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="v2-modal-close" onClick={() => setSelectedProject(null)}>
                            <FaXmark size={20} />
                        </button>
                        <div className="v2-modal-header" style={{ alignItems: 'flex-start' }}>
                            <div className="v2-web-project-icon-container" style={{ width: '160px', height: '160px' }}>
                                <img src={selectedProject.icon} alt={selectedProject.key} className="v2-web-project-img-icon" style={{ width: '120px', height: '120px' }} />
                            </div>
                            <div className="v2-modal-info">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <h2 className="v2-project-name" style={{ fontSize: '2.5rem' }}>
                                        {projectTitle(selectedProject.key)}
                                    </h2>
                                    {selectedProject.isFirst && (
                                        <div className="v2-project-badge" style={{ margin: 0 }}>
                                            {t('web.first')}
                                        </div>
                                    )}
                                </div>
                                <div className="v2-project-category">{t(`web.${selectedProject.key}.category`)}</div>
                                <p className="v2-project-desc" style={{ marginTop: '1rem', fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)' }}>{t(`web.${selectedProject.key}.desc`)}</p>
                                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem' }}>
                                    {selectedProject.link && (
                                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="v2-github-link" style={{ margin: 0 }}>
                                            <FaGlobe size={14} /> Live Demo
                                        </a>
                                    )}
                                    {selectedProject.github && (
                                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="v2-github-link" style={{ margin: 0 }}>
                                            <FaGithub size={14} /> Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        {isMobile ? (
                            <div className="v2-modal-carousel-container" style={{ padding: '0 1.5rem 2rem' }}>
                                <div className="v2-modal-carousel" style={{ aspectRatio: '16/10', height: 'auto', width: '65%' }}>
                                    <button
                                        className="v2-carousel-nav v2-prev"
                                        onClick={() => setCurrentScreenshot((prev) => (prev - 1 + (selectedProject.screenshots?.length || 1)) % (selectedProject.screenshots?.length || 1))}
                                    >
                                        <FaChevronLeft />
                                    </button>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentScreenshot}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="v2-modal-screenshot-active"
                                        >
                                            <img
                                                src={selectedProject.screenshots[currentScreenshot]}
                                                alt={`Preview ${currentScreenshot + 1}`}
                                                style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)' }}
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                    <button
                                        className="v2-carousel-nav v2-next"
                                        onClick={() => setCurrentScreenshot((prev) => (prev + 1) % (selectedProject.screenshots?.length || 1))}
                                    >
                                        <FaChevronRight />
                                    </button>
                                </div>
                                <div className="v2-modal-dots">
                                    {selectedProject.screenshots?.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`v2-modal-dot ${idx === currentScreenshot ? 'active' : ''}`}
                                            onClick={() => setCurrentScreenshot(idx)}
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="v2-modal-screenshots" style={{ gridTemplateColumns: '1fr' }}>
                                {selectedProject.screenshots?.map((shot, idx) => (
                                    <div key={idx} className="v2-web-screenshot" style={{ aspectRatio: 'auto', marginBottom: '1rem' }}>
                                        <img
                                            src={shot}
                                            alt={`Preview ${idx + 1}`}
                                            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
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
                        <p className="v2-section-eyebrow">{t('web.eyebrow')}</p>
                        <h2 className="v2-section-title">{t('web.title')}</h2>
                        <div className="v2-ornament"></div>
                    </div>
                    <div
                        ref={mobileScrollRef}
                        className="v2-mobile-scroll-track"
                        onScroll={handleMobileScroll}
                    >
                        {projects.map((project) => (
                            <div key={project.key} className="v2-project-card v2-mobile-card">
                                {renderCardContent(project)}
                            </div>
                        ))}
                    </div>
                    <div className="v2-mobile-pagination">
                        {projects.map((_, idx) => (
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
                {modal}
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
                        <p className="v2-section-eyebrow">{t('web.eyebrow')}</p>
                        <h2 className="v2-section-title">{t('web.title')}</h2>
                        <div className="v2-ornament"></div>
                    </motion.div>
                    <motion.div
                        style={{ x, display: "flex", gap: "3rem", flexDirection: "row" }}
                        className="v2-projects-track"
                    >
                        {projects.map((project) => (
                            <div key={project.key} className="v2-project-card" style={{ flexShrink: 0, width: '450px', maxWidth: '450px' }}>
                                {renderCardContent(project)}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            {modal}
        </>
    )
}
