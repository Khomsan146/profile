import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import CertModal from '../components/CertModal'
import { Award } from 'lucide-react'
import { projects } from '../data/projects'

const CERTS = [
    { name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', date: '2023', credentialId: 'AWS-SAA-001' },
    { name: 'HashiCorp Terraform Associate', issuer: 'HashiCorp', date: '2023', credentialId: 'TF-001' },
    { name: 'Certified Kubernetes Administrator', issuer: 'CNCF', date: '2024', credentialId: 'CKA-001' },
    { name: 'Google Cloud Associate', issuer: 'Google Cloud', date: '2024', credentialId: 'GCP-ACE-001' },
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
                                <img className="project-img" src={p.image} alt={p.title} onError={e => { e.target.style.background = 'rgba(59,130,246,0.1)'; e.target.style.height = '200px' }} />
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
                                <div className="cert-icon"><Award size={28} /></div>
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
