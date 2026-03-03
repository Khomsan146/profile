import ScrollReveal from '../components/ScrollReveal'
import { ShieldCheck, Box, Zap, GitBranch, Activity, Cloud, Layers, HardDrive, Terminal, PenTool } from 'lucide-react'

const SKILLS = [
    {
        icon: <ShieldCheck size={20} />, title: 'Network & Security', featured: true,
        tags: ['Cloudflare DNS Management', 'Cloudflare WAF Configuration', 'Firewall Policy Management', 'DNAT / SNAT Configuration', 'VPN Site-to-Site', 'IDS / IPS', 'Network Segmentation'],
    },
    {
        icon: <Box size={20} />, title: 'Container & Orchestration',
        tags: ['Docker', 'Kubernetes (K3s,K8s,EKS)', 'Helm', 'Kong', 'MetalLB', 'Longhorn Storage', 'Lens', 'Rancher'],
    },
    {
        icon: <Zap size={20} />, title: 'Automation & DevOps',
        tags: ['n8n Workflow', 'Terraform (IaC)', 'CI/CD Design', 'Nginx Proxy'],
    },
    {
        icon: <GitBranch size={20} />, title: 'GitOps & CI/CD',
        tags: ['GitHub / GitLab', 'Jenkins', 'ArgoCD (GitOps)', 'GHCR (GitHub Container Registry)', 'Automated CI/CD Pipelines', 'SonarQube (Code Quality Analysis)'],
    },
    {
        icon: <Activity size={20} />, title: 'Monitoring & Observability',
        tags: ['Prometheus Metrics Collection', 'Grafana Dashboard Visualization', 'Centralized Web Monitoring Platform', 'Kubernetes & Cluster Health Monitoring', 'Automated Alerting Workflow (n8n)', 'Uptime Kuma'],
    },
    {
        icon: <Cloud size={20} />, title: 'Infrastructure & Cloud',
        tags: ['Data Center Ops', 'IaaS / DRaaS / BaaS', 'AWS (S3, EKS, Aurora, ECS, EFS, EBS, ACM, IAM, Bedrock)', 'Local Cloud (Vcloud)', 'High Availability', 'Load Balancing'],
    },
    {
        icon: <Layers size={20} />, title: 'Virtualization',
        tags: ['VMware vSphere', 'Nutanix AHV', 'ESXi', 'Hyper-V'],
    },
    {
        icon: <HardDrive size={20} />, title: 'Backup & DR',
        tags: ['Veeam Backup', 'Veritas Backup', 'Replication', 'NAS', 'Business Continuity'],
    },
    {
        icon: <Terminal size={20} />, title: 'OS & Scripting',
        tags: ['Windows Server', 'Ubuntu Linux', 'Rocky Linux', 'PowerShell', 'Python Script', 'Bash Scripting'],
    },
    {
        icon: <PenTool size={20} />, title: 'Architecture & Solution Design', wide: true,
        tags: ['Infra Architecture', 'DR Architecture', 'Hybrid Cloud Design', 'Scalability Planning'],
    },
]

const CERTS = [
    { label: 'RCNA (Ruijie Network)' },
    { label: 'VMTSP (Veeam)' },
    { label: 'Certified in Cybersecurity (CC)' },
]

export default function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <ScrollReveal>
                    <h2 className="section-title">Technical <span>Expertise</span></h2>

                    {/* Certifications */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem', justifyContent: 'flex-start' }}>
                        {CERTS.map(c => (
                            <span key={c.label} style={{
                                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                                background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)',
                                borderRadius: '8px', padding: '0.5rem 1rem', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', color: '#93c5fd'
                            }}>
                                🏅 {c.label}
                            </span>
                        ))}
                    </div>

                    <div className="skills-grid">
                        {SKILLS.map((s) => (
                            <div
                                className="skill-category"
                                key={s.title}
                                style={s.featured ? { borderColor: 'var(--accent-cyan)', boxShadow: '0 0 15px rgba(6,182,212,0.1)' }
                                    : s.wide ? { gridColumn: '1 / -1' } : {}}
                            >
                                <h3>{s.icon}{s.title}</h3>
                                <div className="skill-tags">
                                    {s.tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
