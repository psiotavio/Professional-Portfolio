import { useState } from 'react'
import '../../styles/v2.css'

interface GridImage {
    url: string;
    type: 'mobile' | 'web';
}

const images: GridImage[] = [
    // Mobile
    { url: '/prints/watchfolio/watchfolio1.webp', type: 'mobile' },
    { url: '/prints/readfolio/readfolio1.webp', type: 'mobile' },
    { url: '/prints/travelfolio/travelfolio1.webp', type: 'mobile' },
    { url: '/prints/nos2/nos21.webp', type: 'mobile' },
    { url: '/prints/miniMystics/miniMystics1.webp', type: 'mobile' },

    // Web
    { url: '/webPrints/watchfolio.webp', type: 'web' },
    { url: '/webPrints/potterdle.webp', type: 'web' },
    { url: '/webPrints/voyage.webp', type: 'web' },
    { url: '/webPrints/miniMystics.webp', type: 'web' },

    // More Mobile
    { url: '/prints/watchfolio/watchfolio2.webp', type: 'mobile' },
    { url: '/prints/readfolio/readfolio2.webp', type: 'mobile' },
    { url: '/prints/travelfolio/travelfolio2.webp', type: 'mobile' },
    { url: '/prints/nos2/nos22.webp', type: 'mobile' },
    { url: '/prints/miniMystics/miniMystics2.webp', type: 'mobile' },
    { url: '/prints/watchfolio/watchfolio3.webp', type: 'mobile' },
    { url: '/prints/readfolio/readfolio3.webp', type: 'mobile' },
    { url: '/prints/travelfolio/travelfolio3.webp', type: 'mobile' },
    { url: '/prints/nos2/nos23.webp', type: 'mobile' },
    { url: '/prints/miniMystics/miniMystics3.webp', type: 'mobile' },
]

// Split images into 3 columns
const columns = [
    [images[0], images[3], images[6], images[9], images[12], images[15], images[18]],
    [images[1], images[4], images[7], images[10], images[13], images[16]],
    [images[2], images[5], images[8], images[11], images[14], images[17]],
]

export default function V2InfiniteGrid() {
    const [hoveredItem, setHoveredItem] = useState<GridImage | null>(null)
    const [isGlobalPaused, setIsGlobalPaused] = useState(false)

    return (
        <div
            className={`v2-infinite-grid-container ${isGlobalPaused ? 'is-paused' : ''} ${hoveredItem ? 'has-focus' : ''}`}
            onMouseEnter={() => setIsGlobalPaused(true)}
            onMouseLeave={() => {
                setIsGlobalPaused(false)
                setHoveredItem(null)
            }}
        >
            {/* Central Focus Preview */}
            <div className={`v2-grid-focus-preview ${hoveredItem ? 'is-visible' : ''}`}>
                {hoveredItem && (
                    <div className={`v2-focus-mockup v2-focus-${hoveredItem.type}`}>
                        <div className="v2-focus-inner">
                            <img src={hoveredItem.url} alt="Focused Preview" className="v2-focus-screenshot" />
                            <img
                                src={hoveredItem.type === 'mobile' ? '/mockups/ios.png' : '/mockups/macbook.png'}
                                alt="Mockup"
                                className="v2-focus-frame"
                            />
                        </div>
                    </div>
                )}
            </div>

            {columns.map((colImages, colIdx) => (
                <div key={colIdx} className="v2-grid-col-wrapper">
                    <div
                        className={`v2-grid-col ${colIdx % 2 === 0 ? 'v2-grid-col-up' : 'v2-grid-col-down'}`}
                        style={{
                            animationDuration: `${25 + (colIdx * 8)}s`,
                            animationPlayState: isGlobalPaused ? 'paused' : 'running'
                        }}
                    >
                        {/* Quadruple the images to guarantee coverage on any screen height */}
                        {[...colImages, ...colImages, ...colImages, ...colImages].map((img, rowIdx) => {
                            const isThisHovered = hoveredItem?.url === img.url;

                            return (
                                <div
                                    key={rowIdx}
                                    className={`v2-grid-item v2-grid-item-${img.type} ${hoveredItem && !isThisHovered ? 'v2-grid-item-blur' : ''} ${isThisHovered ? 'v2-grid-item-active' : ''}`}
                                    onMouseEnter={() => setHoveredItem(img)}
                                >
                                    <div className="v2-grid-item-inner">
                                        <img src={img.url} alt="Project work" className="v2-grid-screenshot" loading="lazy" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}
