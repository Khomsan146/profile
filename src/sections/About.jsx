import ScrollReveal from '../components/ScrollReveal'
import { Cloud, Terminal, RefreshCw, Shield } from 'lucide-react'

const FEATURES = [
    { icon: <Cloud size={24} />, title: 'Cloud Architecture', desc: 'Designing resilient multi-cloud and hybrid infrastructure on AWS, GCP, and Azure.' },
    { icon: <Terminal size={24} />, title: 'Infrastructure as Code', desc: 'Terraform, Ansible, and Helm for automated, version-controlled infrastructure.' },
    { icon: <RefreshCw size={24} />, title: 'CI/CD Pipelines', desc: 'Building GitLab CI and GitHub Actions pipelines for fast, reliable deployments.' },
    { icon: <Shield size={24} />, title: 'Security & Compliance', desc: 'FortiGate, WAF, Cloudflare, and Zero Trust security practices.' },
]

export default function About() {
    return (
        <section id="about" style={{ background: 'rgba(17,24,39,0.5)' }}>
            <div className="container">
                <ScrollReveal>
                    <h2 className="section-title">About <span>Me</span></h2>
                    <div className="about-grid">
                        <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2.5rem' }}>
                            I'm an Infrastructure Engineer passionate about building reliable, automated, and scalable systems.
                            With deep experience in enterprise environments, I bridge the gap between on-premise legacy systems
                            and modern cloud-native platforms—delivering solutions that are secure, observable, and resilient.
                        </p>
                        <div className="features-grid">
                            {FEATURES.map((f) => (
                                <div className="feature-card" key={f.title}>
                                    <div className="feature-icon">{f.icon}</div>
                                    <h3>{f.title}</h3>
                                    <p>{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
