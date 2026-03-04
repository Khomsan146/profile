import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import ImageLightbox from '../components/ImageLightbox'
import { ArrowLeft } from 'lucide-react'

export default function ProjectDetail() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [lightbox, setLightbox] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    const project = projects.find(p => p.slug === slug)
    if (!project) return (
        <div style={{ padding: '8rem 2rem', textAlign: 'center' }}>
            <h2>Project not found</h2>
            <button className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => navigate('/')}>Go Home</button>
        </div>
    )
    const uniqueGallery = project.gallery.filter(img => img !== project.image)

    return (
        <section className="project-detail">
            <div className="container">
                <button className="btn btn-outline" style={{ marginBottom: '2rem' }} onClick={() => navigate('/')}>
                    <ArrowLeft size={16} /> Back to Projects
                </button>

                <div className="detail-hero">
                    <div>
                        <div className="project-tags" style={{ marginBottom: '1rem' }}>
                            {project.tags.map(t => <span className="project-tag" key={t}>{t}</span>)}
                        </div>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>{project.title}</h1>
                        <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>{project.desc}</p>
                    </div>
                    <img src={project.image} alt={project.title}
                        style={{ width: '100%', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', objectFit: 'contain', maxHeight: '400px', backgroundColor: 'rgba(17,24,39,0.5)', cursor: 'pointer' }}
                        onClick={() => setLightbox({ src: project.image, alt: project.title })}
                        onError={e => { e.target.style.background = 'rgba(59,130,246,0.1)'; e.target.style.border = '1px solid rgba(59,130,246,0.2)' }} />
                </div>

                <div className="detail-stats">
                    {project.stats.map(s => (
                        <div className="stat-card" key={s.lbl}>
                            <div className="val">{s.val}</div>
                            <div className="lbl">{s.lbl}</div>
                        </div>
                    ))}
                </div>

                {uniqueGallery.length > 0 && (
                    <div className={`gallery gallery-grid-${uniqueGallery.length}`}>
                        {uniqueGallery.map((img, i) => (
                            <img key={i} src={img} alt={`${project.title} gallery ${i + 1}`} onClick={() => setLightbox({ src: img, alt: `${project.title} gallery ${i + 1}` })} />
                        ))}
                    </div>
                )}

                <div className="detail-section">
                    <h2>Challenge</h2>
                    <p>{project.challenge}</p>
                </div>

                <div className="detail-section">
                    <h2>Solution</h2>
                    <p>{project.solution}</p>
                </div>

                {project.details && (
                    <div className="detail-section">
                        <h2>Key Implementation Details</h2>
                        <div dangerouslySetInnerHTML={{ __html: project.details }} />
                    </div>
                )}

                <div className="detail-section">
                    <h2>Tech Stack</h2>
                    <div className="tech-stack">
                        {project.tech.map(t => <span className="tech-badge" key={t}>{t}</span>)}
                    </div>
                </div>
            </div>

            {lightbox && <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
        </section>
    )
}
