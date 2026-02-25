import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import '../../styles/v2.css'

interface ParallaxProps {
    children: ReactNode;
    bgImage?: string;
}

export default function V2ParallaxSection({ children, bgImage }: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    // The background moves slightly slower than the foreground
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])

    return (
        <div ref={ref} className="v2-parallax-container">
            <motion.div
                className="v2-parallax-bg"
                style={{
                    y,
                    backgroundImage: bgImage ? `url(${bgImage})` : 'none',
                    backgroundColor: bgImage ? 'transparent' : 'var(--v2-bg-panel)'
                }}
            />
            <div className="v2-parallax-content">
                {children}
            </div>
        </div>
    )
}
