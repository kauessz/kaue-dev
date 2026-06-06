'use client'

import { useEffect, useState } from 'react'
import ScreenshotLightbox from './ScreenshotLightbox'

interface ScreenshotGalleryProps {
  screenshots: string[]
  title: string
}

export default function ScreenshotGallery({ screenshots, title }: ScreenshotGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Listen to prev/next events dispatched by the lightbox buttons and keyboard handler
  useEffect(() => {
    const handlePrev = () =>
      setLightboxIndex((i) => (i !== null && i > 0 ? i - 1 : i))
    const handleNext = () =>
      setLightboxIndex((i) => (i !== null && i < screenshots.length - 1 ? i + 1 : i))

    window.addEventListener('lightbox:prev', handlePrev)
    window.addEventListener('lightbox:next', handleNext)
    return () => {
      window.removeEventListener('lightbox:prev', handlePrev)
      window.removeEventListener('lightbox:next', handleNext)
    }
  }, [screenshots.length])

  // Prevent body scroll while lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  if (screenshots.length === 0) return null

  return (
    <div className="case-section">
      <div className="screenshots-grid">
        {screenshots.map((src, index) => (
          <button
            key={src}
            onClick={() => setLightboxIndex(index)}
            aria-label={`Open screenshot ${index + 1}`}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'block',
              width: '100%',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${title} screenshot ${index + 1}`}
              className="screenshot-img"
              style={{ cursor: 'pointer' }}
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <ScreenshotLightbox
          screenshots={screenshots}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  )
}
