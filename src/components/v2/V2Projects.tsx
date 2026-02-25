import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaStar, FaApple, FaGooglePlay, FaXmark, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { useLanguage } from '../../contexts/LanguageContext'
import { useIsMobile } from '../../hooks/useIsMobile'
import '../../styles/v2.css'

interface AppProject {
    key: string;
    icon: string;
    top100?: boolean;
    appStore?: boolean;
    playStore?: boolean;
    screenshots?: string[];
}

const apps: AppProject[] = [
    {
        key: 'watchfolio',
        icon: '/icons/IconeWatchfolio.png',
        top100: true,
        appStore: true,
        playStore: true,
        screenshots: ['/prints/watchfolio/watchfolio1.webp', '/prints/watchfolio/watchfolio2.webp', '/prints/watchfolio/watchfolio3.webp']
    },
    {
        key: 'readfolio',
        icon: '/icons/iconeReadFolio.png',
        appStore: true,
        playStore: true,
        screenshots: ['/prints/readfolio/readfolio1.webp', '/prints/readfolio/readfolio2.webp', '/prints/readfolio/readfolio3.webp']
    },
    {
        key: 'travelfolio',
        icon: '/icons/iconeTravelfolio.png',
        appStore: true,
        playStore: false,
        screenshots: ['/prints/travelfolio/travelfolio1.webp', '/prints/travelfolio/travelfolio2.webp', '/prints/travelfolio/travelfolio3.webp']
    },
    {
        key: 'nos2',
        icon: '/icons/IconeNos2.png',
        appStore: true,
        playStore: true,
        screenshots: ['/prints/nos2/nos21.webp', '/prints/nos2/nos22.webp', '/prints/nos2/nos23.webp']
    },
    {
        key: 'minimystics',
        icon: '/icons/IconeMiniMystics.png',
        appStore: true,
        playStore: false,
        screenshots: ['/prints/miniMystics/miniMystics1.webp', '/prints/miniMystics/miniMystics2.webp', '/prints/miniMystics/miniMystics3.webp']
    },
]

export default function V2Projects() {
    const { t } = useLanguage()
    const isMobile = useIsMobile()
    const containerRef = useRef<HTMLDivElement>(null)
    const [selectedProject, setSelectedProject] = useState<AppProject | null>(null)
    const [currentScreenshot, setCurrentScreenshot] = useState(0)

    useEffect(() => {
        if (selectedProject && isMobile) {
            const timer = setInterval(() => {
                setCurrentScreenshot((prev) => (prev + 1) % (selectedProject.screenshots?.length || 1))
            }, 10000)
            return () => clearInterval(timer)
        }
    }, [selectedProject, isMobile])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // The track will move leftwards. 
    const x = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "-335%" : "-75%"])
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

    return (
        <>
            <div
                ref={containerRef}
                className={`v2-projects-wrapper ${isMobile ? 'is-mobile' : ''}`}
                style={{ height: "400vh", position: "relative" }}
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
                        <p className="v2-section-eyebrow">{t('apps.eyebrow')}</p>
                        <h2 className="v2-section-title">{t('apps.title')}</h2>
                        <div className="v2-ornament"></div>
                    </motion.div>

                    <motion.div
                        style={{
                            x,
                            display: "flex",
                            gap: isMobile ? "1.5rem" : "3rem",
                            flexDirection: "row"
                        }}
                        className="v2-projects-track"
                    >
                        {apps.map((app) => {
                            return (
                                <div key={app.key} className="v2-project-card" style={{ flexShrink: 0 }}>
                                    <div className="v2-project-card-inner">
                                        <div className="v2-project-icon-wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                            <img src={app.icon} alt={app.key} className="v2-project-app-icon" />
                                            {app.top100 && (
                                                <div className="v2-project-badge" style={{ marginBottom: 0 }}>
                                                    <FaStar size={12} /> Top 100
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="v2-project-name">
                                            {app.key === 'nos2' ? 'Nós 2' : app.key.charAt(0).toUpperCase() + app.key.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2')}
                                        </h3>
                                        <div className="v2-project-category">{t(`apps.${app.key}.category`)}</div>

                                        <p className="v2-project-desc">{t(`apps.${app.key}.desc`)}</p>

                                        <button
                                            className="v2-view-more-btn"
                                            onClick={() => {
                                                setSelectedProject(app)
                                                setCurrentScreenshot(0)
                                            }}
                                        >
                                            {t('apps.learnMore')}
                                        </button>

                                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: 'auto', paddingTop: '1.5rem' }}>
                                            {app.appStore && (
                                                <div className="v2-project-badge" style={{ marginBottom: 0 }}>
                                                    <FaApple size={12} /> App Store
                                                </div>
                                            )}
                                            {app.playStore && (
                                                <div className="v2-project-badge" style={{ marginBottom: 0, background: 'rgba(0, 255, 100, 0.1)', color: '#00ff64', border: '1px solid rgba(0, 255, 100, 0.2)' }}>
                                                    <FaGooglePlay size={10} /> Play Store
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </motion.div>

                </div>
            </div>

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
                            className={`v2-modal-content ${isMobile ? 'is-mobile' : ''}`}
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="v2-modal-close" onClick={() => setSelectedProject(null)}>
                                <FaXmark size={20} />
                            </button>

                            <div className="v2-modal-header">
                                <img src={selectedProject.icon} alt={selectedProject.key} className="v2-project-app-icon" />
                                <div className="v2-modal-info">
                                    <h2 className="v2-project-name">
                                        {selectedProject.key === 'nos2' ? 'Nós 2' : selectedProject.key.charAt(0).toUpperCase() + selectedProject.key.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2')}
                                    </h2>
                                    <div className="v2-project-category">{t(`apps.${selectedProject.key}.category`)}</div>
                                    <p className="v2-project-desc" style={{ marginTop: '1rem' }}>{t(`apps.${selectedProject.key}.desc`)}</p>
                                </div>
                            </div>

                            {isMobile ? (
                                <div className="v2-modal-carousel-container">
                                    <div className="v2-modal-carousel" style={{ width: '65%', margin: '0 auto' }}>
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
                                                    src={selectedProject.screenshots?.[currentScreenshot]}
                                                    alt={`Screenshot ${currentScreenshot + 1}`}
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
                                <div className="v2-modal-screenshots">
                                    {selectedProject.screenshots?.map((shot, idx) => (
                                        <div key={idx} className="v2-screenshot">
                                            <img src={shot} alt={`Screenshot ${idx + 1}`} style={{ width: '100%', borderRadius: '4px' }} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
