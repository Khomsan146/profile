import ScrollReveal from '../components/ScrollReveal'

const GROUPS = [
    {
        title: 'Cloud, Kubernetes & DevOps',
        items: [
            'Operated and maintained Amazon EKS production cluster (tfac-eks-cluster-prod) supporting containerized applications across UAT and Production environments.',
            'Implemented GitOps deployment strategy using ArgoCD and Helm to manage version-controlled Kubernetes deployments.',
            'Integrated CI/CD pipelines using Jenkins and SonarQube for automated build, code quality validation, and deployment.',
            'Managed container image lifecycle through GitHub Container Registry (GHCR), including version tagging and access control.',
            'Configured Kubernetes ingress and DNS (Cloudflare) for external service exposure.',
            'Administered Kong API Gateway (Kong Admin) for service routing, upstream configuration, and API exposure management.',
            'Troubleshot Kubernetes deployment, networking, and API routing issues in production environments.',
        ],
    },
    {
        title: 'Network Security & Firewall',
        items: [
            'Migrated firewall infrastructure from Sophos to FortiGate 90G.',
            'Redesigned network zones and improved firewall policies for stronger segmentation and access control.',
            'Configured and maintained Site-to-Site VPN connections between locations.',
            'Applied security controls across IT and OT environments.',
        ],
    },
    {
        title: 'Infrastructure & Data Center Operations',
        items: [
            'Supported and maintained production infrastructure, handling incidents, service requests, problems, and change activities.',
            'Deployed and maintained on-premise Data Center systems, including server setup and network configuration.',
            'Analyzed Apache access/error logs and system logs to troubleshoot traffic issues and HTTP errors (4xx/5xx).',
            'Coordinated with vendors (Microsoft, Dell, Cisco TAC, Veritas) for troubleshooting and issue resolution.',
        ],
    },
    {
        title: 'Virtualization & High Availability',
        items: [
            'Managed VMware and Nutanix virtualization platforms.',
            'Optimized VM resource allocation to maintain system stability and performance.',
            'Performed capacity planning to support workload growth.',
        ],
    },
    {
        title: 'Backup & Disaster Recovery',
        items: [
            'Managed backup solutions using Veeam Backup & Replication and Veritas Backup.',
            'Conducted restore testing to ensure recovery readiness.',
            'Maintained disaster recovery procedures for critical systems.',
        ],
    },
    {
        title: 'Automation & Monitoring',
        items: [
            'Developed automation workflows using n8n to reduce manual operational tasks and improve notification processes.',
            'Built a web-based monitoring dashboard integrating multiple infrastructure data sources.',
            'Developed a gold price prediction project integrating TwelveData and GNews API for technical and sentiment analysis.',
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
