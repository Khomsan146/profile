import ScrollReveal from '../components/ScrollReveal'
import { Github, Mail } from 'lucide-react'

const SOCIAL = [
    { href: 'https://github.com/Khomsan146', icon: <Github size={24} />, label: 'GitHub' },
    { href: 'mailto:golf@example.com', icon: <Mail size={24} />, label: 'Email' },
]

export default function Contact() {
    return (
        <section id="contact" style={{ background: '#111827' }}>
            <div className="container">
                <ScrollReveal>
                    <div className="contact-content">
                        <h2 className="section-title" style={{ display: 'block', textAlign: 'center' }}>Get In <span>Touch</span></h2>
                        <p style={{ color: '#94a3b8', marginTop: '2rem', fontSize: '1.1rem' }}>
                            Interested in discussing infrastructure challenges, cloud migrations,
                            or DevOps best practices? I'm always open to new opportunities and collaborations.
                        </p>
                        <a href="mailto:golf@example.com" className="btn btn-primary" style={{ display: 'inline-flex', marginTop: '2rem' }}>
                            Send a Message
                        </a>
                        <div className="social-links">
                            {SOCIAL.map((s) => (
                                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                                    <span style={{ fontSize: '1.5rem' }}>{s.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
