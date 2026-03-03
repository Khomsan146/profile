import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Award, Cloud, ShieldCheck } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import CertModal from '../components/CertModal'
import projects from '../data/projects'

const CERTS = [
    { key: 'rcna', icon: <Award size={18} />, label: 'RCNA' },
    { key: 'vmtsp', icon: <Cloud size={18} />, label: 'VMTSP' },
    { key: 'cc', icon: <ShieldCheck size={18} />, label: 'CC' },
]

export default function Projects() {
    const [activeCert, setActiveCert] = useState(null)

    return (
        <section id="projects">
            <div className="container">
                <ScrollReveal>
                    <h2 className="section-title">Featured Projects</h2>
                </ScrollReveal>

                <ScrollReveal delay={50}>
                    <div className="projects-grid">
                        {projects.map((p) => (
                            <Link to={`/project/${p.slug}`} className="project-card" key={p.slug}>
                                <div className="project-image">
                                    <img src={p.image} alt={p.title} />
                                </div>
                                <div className="project-content">
                                    <span className="hero-label" style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
                                        {p.label}
                                    </span>
                                    <h3>{p.title}</h3>
                                    <p>{p.cardDescription}</p>
                                    <div className="project-tags">
                                        {p.tags.map((t) => (
                                            <span className="tag" key={t}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Certifications */}
                <ScrollReveal delay={100}>
                    <div style={{ marginTop: '5rem' }}>
                        <h2 className="section-title">Certifications</h2>
                        <div className="certifications-wrapper" style={{ marginTop: '3rem' }}>
                            {CERTS.map((c) => (
                                <button
                                    key={c.key}
                                    className="cert-badge"
                                    onClick={() => setActiveCert(c.key)}
                                >
                                    {c.icon}
                                    <span>{c.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            <CertModal certKey={activeCert} onClose={() => setActiveCert(null)} />
        </section>
    )
}
