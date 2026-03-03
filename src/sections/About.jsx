import ScrollReveal from '../components/ScrollReveal'
import { Cloud, Terminal, RefreshCw, Shield } from 'lucide-react'

const FEATURES = [
    { icon: <Cloud size={24} />, title: 'Cloud Architecture', desc: 'AWS, Multi-Cloud & Hybrid Design' },
    { icon: <Terminal size={24} />, title: 'Infrastructure as Code', desc: 'Terraform, Helm, GitOps' },
    { icon: <RefreshCw size={24} />, title: 'CI/CD & Automation', desc: 'GitLab CI, GitHub Actions, ArgoCD' },
    { icon: <Shield size={24} />, title: 'Security & Networking', desc: 'Fortigate, VPN, Zero Trust' },
]

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <ScrollReveal>
                    <div className="about-grid">
                        <div className="about-text">
                            <h2 className="section-title">About Me</h2>
                            <p>
                                I am an Infrastructure Reliability Engineer with 4+ years of experience designing
                                and operating enterprise-grade systems. My expertise spans hybrid cloud architecture,
                                Kubernetes orchestration, CI/CD automation, and network security.
                            </p>
                            <p>
                                I specialize in bridging legacy on-premise environments with modern cloud-native
                                platforms—ensuring zero-downtime migrations, automated operations, and measurable
                                reliability improvements for critical business workloads.
                            </p>
                            <p>
                                Currently focused on AWS-based infrastructure, DevOps toolchains, and building
                                self-healing systems that reduce operational overhead while increasing uptime.
                            </p>
                        </div>

                        <div className="about-features">
                            {FEATURES.map((f) => (
                                <div className="feature-item" key={f.title}>
                                    <i>{f.icon}</i>
                                    <h4>{f.title}</h4>
                                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.25rem' }}>{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>

                {/* Architecture Mindset */}
                <ScrollReveal delay={100}>
                    <div className="mindset-container" style={{ marginTop: '5rem' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Architecture Mindset</h2>
                        <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
                            Every infrastructure decision is guided by these core principles.
                        </p>
                        <div className="mindset-grid">
                            {[
                                { title: 'Reliability First', desc: 'Design for failure; build for 99.9%+ uptime' },
                                { title: 'Automate Everything', desc: 'Eliminate toil; every manual process is a bug' },
                                { title: 'Security by Design', desc: 'Zero trust, least privilege from the ground up' },
                                { title: 'Cost Awareness', desc: 'Right-size, optimize, and continuously measure spend' },
                            ].map((m) => (
                                <div className="mindset-item" key={m.title}>
                                    <h4>{m.title}</h4>
                                    <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{m.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
