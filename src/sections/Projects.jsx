import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import CertModal from '../components/CertModal'
import { Award, ShieldCheck } from 'lucide-react'
import { projects } from '../data/projects'

const CERTS = [
    {
        name: 'RCNA (Ruijie Network)',
        issuer: 'Ruijie Networks',
        date: '2023',
        icon: <Award size={24} />,
        description: 'Ruijie Certified Network Associate covering enterprise networking fundamentals.',
    },
    {
        name: 'VMTSP (Veeam)',
        issuer: 'Veeam Software',
        date: '2023',
        icon: <Award size={24} />,
        description: 'Veeam Technical Sales Professional certification for backup and disaster recovery solutions.',
    },
    {
        name: 'Certified in Cybersecurity (CC)',
        issuer: 'ISC²',
        date: '2024',
        icon: <ShieldCheck size={24} />,
        description: 'ISC² Certified in Cybersecurity covering foundational security principles and practices.',
    },
]

export default function Projects() {
    const navigate = useNavigate()
    const [selectedCert, setSelectedCert] = useState(null)

    return (
        <section id="projects">
            <div className="container">
                <ScrollReveal>
                    <h2 className="section-title">Featured <span>Projects</span></h2>
                    <div className="projects-grid">
                        {projects.map((p) => (
                            <div className="project-card" key={p.slug} onClick={() => navigate(`/project/${p.slug}`)}>
                                <img
                                    className="project-img" src={p.image} alt={p.title}
                                    onError={e => { e.target.style.background = 'rgba(59,130,246,0.1)'; e.target.style.height = '200px' }}
                                />
                                <div className="project-body">
                                    <div className="project-tags">{p.tags.map(t => <span className="project-tag" key={t}>{t}</span>)}</div>
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                    <span className="project-link">View Details →</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="section-title" style={{ marginTop: '4rem' }}>Certifications <span>&amp; Achievements</span></h2>
                    <div className="certs-grid">
                        {CERTS.map((c) => (
                            <div className="cert-card" key={c.name} onClick={() => setSelectedCert(c)}>
                                <div className="cert-icon">{c.icon}</div>
                                <div>
                                    <h4>{c.name}</h4>
                                    <p>{c.issuer} · {c.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
            <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        </section>
    )
}
