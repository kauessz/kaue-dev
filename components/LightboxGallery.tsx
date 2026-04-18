'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type GalleryItem = {
  id: string
  label: string
  url: string
  file: string
  desc: string
}

type LightboxGalleryProps = {
  items: GalleryItem[]
  activeId: string
  onChange: (id: string) => void
  productName: string
  quickIds?: string[]
}

export default function LightboxGallery({
  items,
  activeId,
  onChange,
  productName,
  quickIds,
}: LightboxGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const currentIndex = items.findIndex((item) => item.id === activeId)
  const current = items[currentIndex] ?? items[0]
  const quickItems = quickIds?.length
    ? items.filter((item) => quickIds.includes(item.id))
    : items.slice(0, 4)

  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxOpen(false)
      if (event.key === 'ArrowRight') onChange(items[(currentIndex + 1) % items.length].id)
      if (event.key === 'ArrowLeft') onChange(items[(currentIndex - 1 + items.length) % items.length].id)
    }

    window.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [currentIndex, items, lightboxOpen, onChange])

  return (
    <>
      <div className="product-preview">
        <div className="ss-tabs" aria-label={`Prévia de telas do ${productName}`}>
          {quickItems.map((item) => (
            <button
              key={item.id}
              className={`ss-tab ${activeId === item.id ? 'active' : ''}`}
              onClick={() => onChange(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="screenshot-frame screenshot-button"
          onClick={() => setLightboxOpen(true)}
          aria-label={`Ampliar screenshot ${current.label} do ${productName}`}
        >
          <div className="screenshot-bar">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
            <div className="url-bar">{current.url}</div>
          </div>
          <Image
            src={`/screenshots/${current.file}`}
            alt={`${productName} - ${current.label}`}
            width={1200}
            height={780}
            className="screenshot-img"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <span className="screenshot-hint">Toque para ampliar</span>
        </button>
      </div>

      {lightboxOpen ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria de screenshots do ${productName}`}
          onClick={() => setLightboxOpen(false)}
        >
          <div className="lightbox-shell" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightboxOpen(false)}
              aria-label="Fechar galeria"
            >
              ×
            </button>
            <div className="lightbox-main">
              <button
                type="button"
                className="lightbox-nav"
                onClick={() => onChange(items[(currentIndex - 1 + items.length) % items.length].id)}
                aria-label="Imagem anterior"
              >
                ‹
              </button>
              <div className="lightbox-image-wrap">
                <Image
                  src={`/screenshots/${current.file}`}
                  alt={`${productName} - ${current.label}`}
                  width={1600}
                  height={1000}
                  className="lightbox-image"
                  sizes="100vw"
                />
              </div>
              <button
                type="button"
                className="lightbox-nav"
                onClick={() => onChange(items[(currentIndex + 1) % items.length].id)}
                aria-label="Próxima imagem"
              >
                ›
              </button>
            </div>
            <div className="lightbox-meta">
              <div>
                <h3>{current.label}</h3>
                <p>{current.desc}</p>
              </div>
              <div className="lightbox-thumbs" aria-label="Selecionar tela">
                {items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`lightbox-thumb ${item.id === current.id ? 'active' : ''}`}
                    onClick={() => onChange(item.id)}
                    aria-label={`Abrir ${item.label}`}
                  >
                    <Image
                      src={`/screenshots/${item.file}`}
                      alt=""
                      width={180}
                      height={112}
                      className="lightbox-thumb-image"
                    />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
