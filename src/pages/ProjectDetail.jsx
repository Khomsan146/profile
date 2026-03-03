import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import ImageLightbox from '../components/ImageLightbox'
import projects from '../data/projects'

export default function ProjectDetail() {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [lightboxSrc, setLightboxSrc] = useState(null)

    const project = projects.find((p) => p.slug === slug)

    if (!project) {
        return (
            <main className="container" style={{ paddingTop: '140px', textAlign: 'center' }}>
                <h1>Project not found</h1>
                <button className="btn btn-primary" onClick={() => navigate('/')} style={{ marginTop: '2rem' }}>
                    Back to Home
                </button>
            </main>
        )
    }

    const openImage = (src) => setLightboxSrc(src)
    const closeImage = () => setLightboxSrc(null)

    return (
        <>
            <main className="container">
                {/* Hero */}
                <ScrollReveal>
                    <section className="project-hero">
                        <span className="hero-label">{project.label}</span>
                        <h1>
                            {project.titleParts.before}
                            <span className="gradient-text">{project.titleParts.gradient}</span>
                            {project.titleParts.after}
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', marginTop: '1rem' }}>
                            {project.description}
                        </p>
                    </section>
                </ScrollReveal>

                {/* Gallery (2-col grid) or Single image */}
                {project.gallery ? (
                    <ScrollReveal>
                        <div
                            className="project-gallery"
                            style={project.galleryHeight ? undefined : undefined}
                        >
                            {project.gallery.map((img) => (
                                <img
                                    key={img.src}
                                    src={img.src}
                                    className="project-img"
                                    alt={img.alt}
                                    style={{ height: project.galleryHeight ? `${project.galleryHeight}px` : '250px' }}
                                    onClick={() => openImage(img.src)}
                                />
                            ))}
                        </div>
                    </ScrollReveal>
                ) : project.singleImage ? (
                    <ScrollReveal>
                        <img
                            src={project.singleImage}
                            className="img-large"
                            alt={project.title}
                            onClick={() => openImage(project.singleImage)}
                        />
                    </ScrollReveal>
                ) : null}

                {/* Stats */}
                <ScrollReveal>
                    <div className="stat-grid">
                        {project.stats.map((s) => (
                            <div className="stat-card" key={s.label}>
                                <span className="stat-number">{s.value}</span>
                                <span style={{ color: '#94a3b8' }}>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Challenge */}
                <ScrollReveal>
                    <div className="content-section">
                        <h2>The Challenge</h2>
                        <p style={{ color: '#94a3b8' }}>{project.challenge}</p>
                    </div>
                </ScrollReveal>

                {/* Solution */}
                <ScrollReveal>
                    <div className="content-section">
                        <h2>The Solution</h2>
                        <p style={{ color: '#94a3b8' }}>{project.solution.intro}</p>

                        {/* Grid of solution items (n8n style) */}
                        {project.solution.items && (
                            <div className="solution-grid">
                                {project.solution.items.map((item) => (
                                    <div className="solution-item" key={item.title}>
                                        <h3>{item.title}</h3>
                                        <p style={{ color: '#94a3b8' }}>{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Bullet list style */}
                        {project.solution.listItems && (
                            <ul className="responsibilities-list" style={{ marginTop: '1.5rem' }}>
                                {project.solution.listItems.map((item) => (
                                    <li key={item.title}>
                                        <strong>{item.title}:</strong> {item.desc}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </ScrollReveal>

                {/* Tech Stack */}
                <ScrollReveal>
                    <div className="content-section">
                        <h2>Tech Stack</h2>
                        <div className="tech-stack-grid">
                            {project.techStack.map((tech) => (
                                <div className="tech-item" key={tech}>{tech}</div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </main>

            <ImageLightbox src={lightboxSrc} onClose={closeImage} />
        </>
    )
}
