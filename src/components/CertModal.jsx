import { useEffect } from 'react'

const CERT_DATA = {
    rcna: {
        title: 'Ruijie Certified Network Associate (RCNA)',
        description:
            'Validates comprehensive knowledge in network fundamentals, WLAN setup, and routing/switching configurations using Ruijie enterprise equipment. Demonstrates ability to design and implement small to medium-sized enterprise networks.',
    },
    vmtsp: {
        title: 'Veeam Microsoft Technical Sales Professional (VMTSP)',
        description:
            'Demonstrates advanced expertise in designing Veeam backup solutions integrated with Microsoft technologies. Covers deep integration with Hyper-V, Azure, and Windows Server for robust disaster recovery strategies.',
    },
    cc: {
        title: 'Certified in Cybersecurity (CC) - THNCA',
        description:
            'Foundational cybersecurity certification by the Thailand National Cyber Security Agency. Covers essential security principles, incident response protocols, risk management, and network defense strategies mandated by national standards.',
    },
}

export default function CertModal({ certKey, onClose }) {
    const cert = CERT_DATA[certKey]

    // Close on Escape key
    useEffect(() => {
        if (!certKey) return
        const handler = (e) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [certKey, onClose])

    if (!certKey || !cert) return null

    return (
        <div className="modal active" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
            <div className="modal-content">
                <button className="close-modal" onClick={onClose}>×</button>
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
            </div>
        </div>
    )
}
