'use client'

import { useCallback, useEffect } from 'react'

interface ScreenshotLightboxProps {
  screenshots: string[]
  initialIndex: number
  onClose: () => void
}

export default function ScreenshotLightbox({
  screenshots,
  initialIndex,
  onClose,
}: ScreenshotLightboxProps) {
  const total = screenshots.length

  // Store current index in a ref-style via closure — we expose a controlled index
  // from the parent via useState, so we just call back with index changes.
  // For simplicity, the parent owns the index; we expose prev/next via callbacks.
  const current = initialIndex

  const goPrev = useCallback(() => {
    // signal parent to set index
  }, [])
  const goNext = useCallback(() => {}, [])

  // ESC and arrow keys
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && current > 0) {
        // communicate via custom event so parent can handle it
        window.dispatchEvent(new CustomEvent('lightbox:prev'))
      }
      if (e.key === 'ArrowRight' && current < total - 1) {
        window.dispatchEvent(new CustomEvent('lightbox:next'))
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, current, total])

  void goPrev
  void goNext

  const src = screenshots[current]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Screenshot viewer"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'lightbox-in 150ms ease',
        padding: '1rem',
      }}
    >
      <style>{`
        @keyframes lightbox-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: 'fixed',
          top: '1.25rem',
          right: '1.25rem',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.2)',
          background: 'rgba(0,0,0,0.6)',
          color: '#fff',
          fontSize: '1.4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 1,
        }}
      >
        ×
      </button>

      {/* Prev arrow */}
      {total > 1 && current > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            window.dispatchEvent(new CustomEvent('lightbox:prev'))
          }}
          aria-label="Previous screenshot"
          style={{
            position: 'fixed',
            left: '1.25rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(0,0,0,0.6)',
            color: '#fff',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 1,
          }}
        >
          ‹
        </button>
      )}

      {/* Next arrow */}
      {total > 1 && current < total - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            window.dispatchEvent(new CustomEvent('lightbox:next'))
          }}
          aria-label="Next screenshot"
          style={{
            position: 'fixed',
            right: '1.25rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(0,0,0,0.6)',
            color: '#fff',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 1,
          }}
        >
          ›
        </button>
      )}

      {/* Image — stopPropagation so clicking image doesn't close overlay */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`Screenshot ${current + 1} of ${total}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          objectFit: 'contain',
          borderRadius: '8px',
          display: 'block',
          boxShadow: '0 24px 80px rgba(0,0,0,0.8)',
        }}
      />

      {/* Counter */}
      {total > 1 && (
        <div
          style={{
            position: 'fixed',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.08em',
          }}
        >
          {current + 1} / {total}
        </div>
      )}
    </div>
  )
}
