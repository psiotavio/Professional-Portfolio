import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'
import '../../styles/v2.css'

export default function V2Hero() {
    const { t, language, setLanguage } = useLanguage()
    const ref = useRef<HTMLElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    // Fading and blurring as it scrolls up and out of view
    const filter = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(20px)"])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) // slight parallax

    const languages: { code: 'pt' | 'en' | 'es'; label: string; flag: string }[] = [
        { code: 'en', label: 'EN', flag: '🇺🇸' },
        { code: 'pt', label: 'PT', flag: '🇧🇷' },
        { code: 'es', label: 'ES', flag: '🇪🇸' },
    ]

    return (
        <section ref={ref} className="v2-hero v2-section">
            <div className="v2-hero-overlay"></div>

            <div className="v2-language-selector">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`v2-lang-btn ${language === lang.code ? 'active' : ''}`}
                    >
                        <span className="v2-lang-flag">{lang.flag}</span> {lang.label}
                    </button>
                ))}
            </div>

            <motion.div style={{ filter, opacity, y }} className="v2-hero-content">
                <div className="v2-hero-profile-container">
                    <img src="/me.jpg" alt="Otávio Cunha" className="v2-hero-profile-img" />
                </div>
                <h1 className="v2-hero-title">
                    {t('hero.name1')} <br /> <span className="v2-hero-accent">{t('hero.name2')}</span>
                </h1>
                <p className="v2-hero-subtitle">
                    {t('hero.titleStrong')} {t('hero.titleRest')}
                </p>
                <p className="v2-hero-description">
                    {t('hero.description')}
                </p>
            </motion.div>
        </section>
    )
}
