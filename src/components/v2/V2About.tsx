import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'
import { useIsMobile } from '../../hooks/useIsMobile'
import V2InfiniteGrid from './V2InfiniteGrid'
import V2MobileCarousel from './V2MobileCarousel'
import '../../styles/v2.css'

export default function V2About() {
    const { t } = useLanguage()
    const isMobile = useIsMobile()
    const sectionRef = useRef<HTMLElement>(null)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1, y: 0,
            transition: { type: 'spring' as const, stiffness: 70, damping: 20 },
        },
    }

    return (
        <section className="v2-about v2-section" id="about" ref={sectionRef}>
            <motion.div
                className="v2-about-container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
            >
                <div className="v2-about-content">
                    <motion.p className="v2-section-eyebrow" variants={itemVariants}>{t('about.eyebrow')}</motion.p>
                    <motion.h2 className="v2-section-title" variants={itemVariants}>
                        {t('about.title')} <span style={{ color: "var(--v2-gold)", fontStyle: "italic" }}>{t('about.title2')}</span>
                    </motion.h2>

                    <motion.p className="v2-about-body" variants={itemVariants}>
                        {t('about.body1')}
                    </motion.p>
                    <motion.p className="v2-about-body" variants={itemVariants}>
                        {t('about.body2')}
                    </motion.p>

                    <motion.div className="v2-about-education" variants={containerVariants}>
                        <motion.div className="v2-edu-card" variants={itemVariants}>
                            <div>
                                <div className="v2-edu-degree">{t('edu.degree1')}</div>
                                <div className="v2-edu-school">{t('edu.school1')}</div>
                                <span className="v2-edu-status v2-edu-grad">{t('edu.grad')}</span>
                            </div>
                        </motion.div>

                        <motion.div className="v2-edu-card" variants={itemVariants}>
                            <div>
                                <div className="v2-edu-degree">{t('edu.degree2')}</div>
                                <div className="v2-edu-school">{t('edu.school2')}</div>
                                <span className="v2-edu-status v2-edu-current">{t('edu.inProgress')}</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div className="v2-about-visuals" variants={itemVariants}>
                    {isMobile ? <V2MobileCarousel /> : <V2InfiniteGrid />}
                </motion.div>
            </motion.div>
        </section>
    )
}
