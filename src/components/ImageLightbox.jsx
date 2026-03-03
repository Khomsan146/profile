import { useEffect } from 'react'

export default function ImageLightbox({ src, alt, onClose }) {
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose() }
        document.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    }, [onClose])

    if (!src) return null
    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <button className="lightbox-close" onClick={onClose}>×</button>
            <img className="lightbox-img" src={src} alt={alt} onClick={e => e.stopPropagation()} />
        </div>
    )
}
