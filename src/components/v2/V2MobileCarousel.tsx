import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import '../../styles/v2.css'

interface GridImage {
    url: string;
    type: 'mobile' | 'web';
}

const images: GridImage[] = [
    { url: '/prints/watchfolio/watchfolio1.webp', type: 'mobile' },
    { url: '/prints/readfolio/readfolio1.webp', type: 'mobile' },
    { url: '/prints/travelfolio/travelfolio1.webp', type: 'mobile' },
    { url: '/prints/nos2/nos21.webp', type: 'mobile' },
    { url: '/prints/miniMystics/miniMystics1.webp', type: 'mobile' },
    { url: '/webPrints/watchfolio.webp', type: 'web' },
    { url: '/webPrints/potterdle.webp', type: 'web' },
    { url: '/webPrints/voyage.webp', type: 'web' },
    { url: '/webPrints/miniMystics.webp', type: 'web' },
]

export default function V2MobileCarousel() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="v2-mobile-carousel">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="v2-mobile-carousel-item"
                >
                    <div className={`v2-mobile-mockup v2-focus-${images[index].type}`}>
                        <div className="v2-focus-inner">
                            <img src={images[index].url} alt="Project" className="v2-focus-screenshot" />
                            <img
                                src={images[index].type === 'mobile' ? '/mockups/ios.png' : '/mockups/macbook.png'}
                                alt="Mockup"
                                className="v2-focus-frame"
                            />
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <div className="v2-carousel-dots">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`v2-carousel-dot ${i === index ? 'active' : ''}`}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </div>
    )
}
