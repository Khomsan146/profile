import ScrollReveal from '../components/ScrollReveal'
import { Cloud, Box, RefreshCw, Shield, BarChart, Terminal } from 'lucide-react'

const SKILLS = [
    {
        icon: <Cloud size={24} />,
        title: 'Cloud & Infrastructure',
        items: ['AWS (EC2, EKS, RDS, S3, VPC)', 'Bare-Metal & On-Premise', 'Nutanix HCI', 'Proxmox VE', 'VMware ESXi'],
    },
    {
        icon: <Box size={24} />,
        title: 'Containers & Orchestration',
        items: ['Kubernetes (EKS, K3s, Rancher)', 'Docker & Docker Compose', 'Helm Charts', 'ArgoCD (GitOps)', 'Kong Ingress'],
    },
    {
        icon: <RefreshCw size={24} />,
        title: 'CI/CD & Automation',
        items: ['GitLab CI / GitHub Actions', 'Jenkins', 'n8n Workflow Automation', 'Ansible', 'Terraform / IaC'],
    },
    {
        icon: <Shield size={24} />,
        title: 'Networking & Security',
        items: ['Fortigate NGFW (HA Cluster)', 'Ruijie Enterprise / WLAN', 'SSL-VPN / IPsec VPN', 'VLAN & Firewall Policy', 'Zero Trust Architecture'],
    },
    {
        icon: <BarChart size={24} />,
        title: 'Observability & Databases',
        items: ['Prometheus & Grafana', 'Zabbix Monitoring', 'PostgreSQL / Aurora RDS', 'AWS DMS / PgBouncer', 'ELK Stack'],
    },
    {
        icon: <Terminal size={24} />,
        title: 'Development & Tools',
        items: ['Python & Bash Scripting', 'Linux System Administration', 'Git & GitFlow', 'Cloudflare', 'SonarQube / Trivy'],
    },
]

const RESPONSIBILITIES = [
    'Design and provision enterprise cloud infrastructure (AWS, On-Prem)',
    'Manage multi-environment Kubernetes clusters (DEV / UAT / PROD)',
    'Build and maintain CI/CD pipelines with GitOps workflows',
    'Automate operational tasks using n8n, Ansible, and custom scripts',
    'Implement network security policies, VPN tunnels, and firewall rules',
    'Execute zero-downtime database migrations and OS platform upgrades',
    'Monitor system health via Prometheus, Grafana, and Zabbix dashboards',
    'Conduct infrastructure cost optimization and capacity planning',
    'Collaborate with development teams on containerization strategies',
    'Maintain disaster recovery plans and perform regular DR testing',
]

export default function Skills() {
    return (
        <section id="skills" style={{ background: '#111827' }}>
            <div className="container">
                <ScrollReveal>
                    <h2 className="section-title">Technical Skills</h2>
                </ScrollReveal>

                <ScrollReveal delay={50}>
                    <div className="skills-grid">
                        {SKILLS.map((s) => (
                            <div className="skill-card" key={s.title}>
                                <h3>
                                    <span style={{ fontSize: '1.4rem' }}>{s.icon}</span>
                                    {s.title}
                                </h3>
                                <div className="skill-list">
                                    {s.items.map((item) => (
                                        <span className="skill-badge" key={item}>{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                    <div className="responsibilities-container">
                        <h3 className="subsection-title">Core Responsibilities</h3>
                        <ul className="responsibilities-list">
                            {RESPONSIBILITIES.map((r) => (
                                <li key={r}>{r}</li>
                            ))}
                        </ul>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
