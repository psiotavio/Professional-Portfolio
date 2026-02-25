import { useRef } from 'react'
import { FaMedal, FaApple } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'
import '../../styles/v2.css'

const awardItems = [
    { key: 'hackathon', icon: FaMedal, year: '2025' },
    { key: 'apple', icon: FaApple, year: '2025' },
]

const stats = [
    { value: '5', labelKey: 'stats.apps' },
    { value: '#100', labelKey: 'stats.appstore' },
    { value: '2', labelKey: 'stats.awards' },
    { value: '2', labelKey: 'stats.languages' },
]

export default function V2Awards() {
    const { t } = useLanguage()
    const sectionRef = useRef<HTMLElement>(null)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    }
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 70, damping: 20 } }
    }

    return (
        <section className="v2-awards v2-section" id="awards" ref={sectionRef}>
            <motion.div
                className="v2-container-inner"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
            >
                <motion.p className="v2-section-eyebrow" variants={itemVariants} style={{ textAlign: "center" }}>{t('awards.eyebrow')}</motion.p>
                <motion.h2 className="v2-section-title" variants={itemVariants} style={{ textAlign: "center" }}>
                    {t('awards.title')} <span style={{ color: "var(--v2-gold)", fontStyle: "italic" }}>{t('awards.title2')}</span>
                </motion.h2>
                <motion.p className="v2-section-subtitle" variants={itemVariants} style={{ textAlign: "center", margin: "0 auto 4rem auto" }}>{t('awards.subtitle')}</motion.p>

                <motion.div className="v2-awards-list" variants={containerVariants}>
                    {awardItems.map((award) => {
                        const Icon = award.icon
                        return (
                            <motion.div key={award.key} className="v2-award-item" variants={itemVariants} whileHover={{ x: 8 }}>
                                <div className="v2-award-icon">
                                    <Icon size={24} />
                                </div>
                                <div className="v2-award-content">
                                    <div className="v2-award-title">{t(`awards.${award.key}.title`)}</div>
                                    <div className="v2-award-org">{t(`awards.${award.key}.org`)}</div>
                                    <div className="v2-award-desc">{t(`awards.${award.key}.desc`)}</div>
                                </div>
                                <div className="v2-award-year">{award.year}</div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                <motion.div className="v2-stats-grid" variants={containerVariants}>
                    {stats.map((stat) => (
                        <motion.div key={stat.labelKey} className="v2-stat-card" variants={itemVariants} whileHover={{ y: -4 }}>
                            <div className="v2-stat-value">{stat.value}</div>
                            <div className="v2-stat-label">{t(stat.labelKey)}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}
