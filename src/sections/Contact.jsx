import ScrollReveal from '../components/ScrollReveal'
import { Github, Phone } from 'lucide-react'

const SOCIAL = [
    { href: 'https://github.com/Khomsan146', icon: <Github size={24} />, label: 'GitHub' },
]

export default function Contact() {
    return (
        <section id="contact" style={{ background: '#111827' }}>
            <div className="container">
                <ScrollReveal>
                    <div className="contact-content">
                        <h2 className="section-title" style={{ display: 'block', textAlign: 'left' }}>
                            Let's <span>Collaborate</span>
                        </h2>
                        <p style={{ color: '#94a3b8', marginTop: '2rem', fontSize: '1.1rem' }}>
                            Ready to build the next generation of infrastructure? Whether it's a new system design or
                            optimizing an existing one, I'm here to help.
                        </p>
                        <a href="mailto:khomsan.khsb@gmail.com" className="btn btn-primary" style={{ display: 'inline-flex', marginTop: '2rem' }}>
                            Send an Email
                        </a>
                        <div className="social-links" style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
                            {SOCIAL.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                                    <span style={{ fontSize: '1.5rem' }}>{s.icon}</span>
                                </a>
                            ))}
                            <a href="tel:0825466908" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', textDecoration: 'none' }}>
                                <Phone size={24} />
                                <span style={{ fontSize: '1rem' }}>082-546-6908</span>
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
