import { useRef } from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram, FaLocationDot } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'
import '../../styles/v2.css'

const socials = [
    {
        key: 'github',
        Icon: FaGithub,
        label: 'GitHub',
        url: 'https://github.com/psiotavio',
        handle: '@psiotavio',
    },
    {
        key: 'linkedin',
        Icon: FaLinkedinIn,
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/otavio-cunhap/',
        handle: 'otavio-cunhap',
    },
    {
        key: 'instagram',
        Icon: FaInstagram,
        label: 'Instagram',
        url: 'https://www.instagram.com/otavio_cunhap/?hl=en',
        handle: '@otavio_cunhap',
    },
]

export default function V2Contact() {
    const { t } = useLanguage()
    const sectionRef = useRef<HTMLElement>(null)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0,
            transition: { type: 'spring' as const, stiffness: 70, damping: 20 },
        },
    }

    return (
        <>
            <section className="v2-contact v2-section" id="contact" ref={sectionRef}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    className="v2-contact-container"
                >
                    <motion.div className="v2-ornament" variants={itemVariants} style={{ margin: "0 auto 2rem auto" }}></motion.div>
                    <motion.p className="v2-section-eyebrow" variants={itemVariants} style={{ textAlign: "center" }}>
                        {t('contact.eyebrow')}
                    </motion.p>
                    <motion.h2 className="v2-section-title" variants={itemVariants} style={{ textAlign: "center" }}>
                        {t('contact.title')} <br />
                        <span style={{ color: "var(--v2-gold)", fontStyle: "italic" }}>{t('contact.titleGradient')}</span> {t('contact.title2')}
                    </motion.h2>

                    <motion.p className="v2-contact-sub" variants={itemVariants}>
                        {t('contact.sub')}
                    </motion.p>

                    <motion.div className="v2-social-links" variants={containerVariants}>
                        {socials.map(({ key, Icon, label, url, handle }) => (
                            <motion.a
                                key={key}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="v2-social-card"
                                variants={itemVariants}
                                whileHover={{ y: -5, borderColor: "var(--v2-gold-dim)" }}
                            >
                                <Icon size={24} className="v2-social-icon" />
                                <div>
                                    <div className="v2-social-label">{label}</div>
                                    <div className="v2-social-handle">{handle}</div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div className="v2-contact-location" variants={itemVariants}>
                        <FaLocationDot size={16} style={{ color: 'var(--v2-gold)' }} />
                        {t('contact.location')}
                    </motion.div>
                </motion.div>
            </section>

            <footer className="v2-footer">
                <div className="v2-footer-inner">
                    <span className="v2-footer-copy">{t('footer.copy')}</span>
                    <div className="v2-footer-links">
                        <a href="https://github.com/psiotavio" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/otavio-cunhap/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </>
    )
}
