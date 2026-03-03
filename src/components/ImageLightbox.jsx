import { useEffect } from 'react'

export default function ImageLightbox({ src, onClose }) {
    useEffect(() => {
        if (!src) return
        const handler = (e) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', handler)
        // prevent scroll
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', handler)
            document.body.style.overflow = ''
        }
    }, [src, onClose])

    if (!src) return null

    return (
        <div
            id="imageModal"
            className="active"
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        >
            <button id="imageModalClose" onClick={onClose}>×</button>
            <img id="imageModalImg" src={src} alt="Project detail" />
            <div id="imageModalCaption" className="zoom-hint">Click outside or press Esc to close</div>
        </div>
    )
}
