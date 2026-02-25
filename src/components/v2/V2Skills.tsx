import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'
import '../../styles/v2.css'

interface TickerProps {
    items: string[];
    reverse?: boolean;
    progress: MotionValue<number>;
}

function Ticker({ items, reverse, progress }: TickerProps) {
    // For reverse: true (moves right), we map [0,1] to [-50%, 0%]
    // For reverse: false (moves left), we map [0,1] to [0%, -50%]
    const x = useTransform(progress, [0, 1], reverse ? ["-50%", "0%"] : ["0%", "-50%"])

    return (
        <motion.div className="v2-ticker-track" style={{ x, display: 'flex', whiteSpace: 'nowrap' }}>
            {[...items, ...items, ...items].map((text, i) => (
                <div key={i} className="v2-ticker-item">
                    <span className={i % 2 === 0 ? "v2-text-solid" : "v2-text-outline"}>{text}</span>
                    <span className="v2-ticker-separator">✦</span>
                </div>
            ))}
        </motion.div>
    )
}

export default function V2Skills() {
    const { t } = useLanguage()
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const lines = [
        { items: ["TypeScript", "Swift", "React Native", "Java", "Python", "JavaScript"], reverse: false },
        { items: ["UI/UX Design", "Figma", "Design Systems", "Prototyping", "Apple HIG"], reverse: true },
        { items: ["React", "SwiftUI", "Node.js", "Expo", "Vite", "HTML & CSS"], reverse: false },
    ]

    return (
        <section ref={containerRef} className="v2-skills-section">
            <div className="v2-skills-content">
                <h2 className="v2-section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    {t('skills.title')}
                </h2>

                <div className="v2-tickers-container">
                    {lines.map((line, index) => (
                        <Ticker
                            key={index}
                            items={line.items}
                            reverse={line.reverse}
                            progress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
