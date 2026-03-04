import ScrollReveal from '../components/ScrollReveal'
import { Server, Activity } from 'lucide-react'

export default function About() {
    return (
        <section id="about" style={{ background: 'rgba(17,24,39,0.5)' }}>
            <div className="container">
                <ScrollReveal>
                    <h2 className="section-title">About <span>Me</span></h2>
                    <div className="about-grid">
                        <div style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '2rem' }}>
                            <p style={{ marginBottom: '1rem' }}>
                                I am an Infrastructure Reliability Engineer focused on bridging the gap between traditional
                                operations and modern DevOps practices. My expertise lies in building{' '}
                                <strong style={{ color: '#f1f5f9' }}>enterprise-grade hybrid cloud architectures</strong>{' '}
                                that are secure, scalable, and highly available.
                            </p>
                            <p>
                                I specialize in <strong style={{ color: '#f1f5f9' }}>automation-driven problem solving</strong>,
                                utilizing Infrastructure as Code along with extensive <strong style={{ color: '#f1f5f9' }}>Kubernetes optimization experience</strong>.
                                Furthermore, my strong security background includes managing FortiGate administration, Cloudflare, and WAF implementations.
                                My goal is to ensure robust system reliability while enabling rapid delivery through CI/CD pipelines and deep observability stacks.
                            </p>
                        </div>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon"><Server size={24} /></div>
                                <h3>Infrastructure</h3>
                                <p>Data Center &amp; Cloud (IaaS, DRaaS)</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon"><Activity size={24} /></div>
                                <h3>Monitoring</h3>
                                <p>Centralized Dashboards &amp; Visibility</p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
