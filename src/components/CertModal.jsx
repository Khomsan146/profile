import { useEffect } from 'react'

export default function CertModal({ cert, onClose }) {
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose() }
        document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [onClose])

    if (!cert) return null
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>
                <h2 style={{ marginBottom: '1rem' }}>{cert.name}</h2>
                <p style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>{cert.issuer}</p>
                <p style={{ color: '#94a3b8', marginBottom: '1rem', fontSize: '0.85rem' }}>{cert.date}</p>
                {cert.credentialId && <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Credential ID: {cert.credentialId}</p>}
                {cert.description && <p style={{ marginTop: '1rem', color: '#94a3b8', lineHeight: 1.7, fontSize: '0.9rem' }}>{cert.description}</p>}
            </div>
        </div>
    )
}
