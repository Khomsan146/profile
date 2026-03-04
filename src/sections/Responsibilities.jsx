import ScrollReveal from '../components/ScrollReveal'

const GROUPS = [
    {
        title: 'Cloud, Kubernetes & DevOps',
        items: [
            'Performed comprehensive Kubernetes configuration tuning (Deployment, Ingress, scaling, resource limits, and storage optimization) for mission-critical workloads.',
            'Executed end-to-end SSL/TLS lifecycle management to securely expose APIs and microservices across hybrid cloud environments.',
            'Implemented GitOps deployment strategy using ArgoCD and Helm to manage version-controlled Kubernetes deployments.',
            'Integrated CI/CD pipelines using Jenkins and SonarQube for automated build, code quality validation, and deployment.',
        ],
    },
    {
        title: 'Database Administration',
        items: [
            'Managed PostgreSQL and MySQL administration, ensuring high availability and robust data integrity.',
            'Led performance tuning initiatives and conducted slow query analysis to reduce bottlenecks and improve throughput.',
            'Utilized tools like phpMyAdmin and created specialized Grafana monitoring dashboards for real-time database visibility.',
        ],
    },
    {
        title: 'Network Security & Firewall',
        items: [
            'Migrated firewall infrastructure from Sophos to FortiGate 90G, strengthening enterprise security posture.',
            'Redesigned network zones and improved firewall policies for stronger segmentation and access control.',
            'Configured and maintained Site-to-Site VPN connections and applied security controls across IT & OT environments.',
        ],
    },
    {
        title: 'Infrastructure & Data Center Operations',
        items: [
            'Developed Python-based log analysis tools for Apache/Nginx, triggering automated incident reporting for anomalous traffic.',
            'Supported and maintained production infrastructure, handling incidents, service requests, and complex change activities.',
            'Coordinated with technology partners and vendors (Microsoft, Dell, Cisco, Veritas) for accelerated issue resolution.',
        ],
    },
    {
        title: 'Backup & Disaster Recovery',
        items: [
            'Spearheaded RPO/RTO design architectures, tailoring backup solutions (Veeam, Veritas) to rigorous business SLAs.',
            'Designed and executed robust BCP testing strategies, ensuring recovery readiness under critical scenarios.',
        ],
    },
    {
        title: 'Automation & Monitoring',
        items: [
            'Architected comprehensive monitoring systems utilizing Grafana alerts and Uptime monitoring for global visibility.',
            'Integrated Telegram notifications and multi-level escalation matrices directly into alerting workflows.',
            'Engineered automated service restart mechanisms through n8n automation, significantly driving down MTTR.',
        ],
    },
]

export default function Responsibilities() {
    return (
        <section id="responsibilities" style={{ background: 'rgba(17,24,39,0.5)' }}>
            <div className="container">
                <ScrollReveal>
                    <div style={{
                        background: 'rgba(17,24,39,0.8)', border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '20px', padding: '3rem'
                    }}>
                        <h2 className="section-title">Core Responsibilities <span>&amp; Achievements</span></h2>
                        {GROUPS.map((g, i) => (
                            <div key={g.title} style={{ marginTop: i === 0 ? 0 : '2.5rem' }}>
                                <h3 style={{ color: '#06b6d4', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', fontWeight: 600, marginBottom: '1rem' }}>{g.title}</h3>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                    {g.items.map((item, j) => (
                                        <li key={j} style={{ display: 'flex', gap: '0.75rem', color: '#94a3b8', lineHeight: 1.7, fontSize: 'clamp(0.85rem, 2vw, 0.95rem)' }}>
                                            <span style={{ color: '#3b82f6', flexShrink: 0, marginTop: '2px' }}>▸</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
