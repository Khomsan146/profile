import ScrollReveal from '../components/ScrollReveal'
import { Server, Cloud, Terminal, Shield, GitBranch, Database } from 'lucide-react'

const SKILLS = [
    { icon: <Cloud size={20} />, title: 'Cloud Platforms', tags: ['AWS', 'GCP', 'Azure', 'DigitalOcean', 'Vultr'] },
    { icon: <Server size={20} />, title: 'Infrastructure', tags: ['Kubernetes (EKS/GKE)', 'Docker', 'VMware vSphere', 'Proxmox', 'Bare Metal'] },
    { icon: <Terminal size={20} />, title: 'IaC & Automation', tags: ['Terraform', 'Ansible', 'Helm', 'Packer', 'Cloud-init'] },
    { icon: <GitBranch size={20} />, title: 'CI/CD', tags: ['GitLab CI', 'GitHub Actions', 'ArgoCD', 'Jenkins'] },
    { icon: <Shield size={20} />, title: 'Security & Networking', tags: ['FortiGate', 'Cloudflare', 'WAF', 'VPN', 'Zero Trust', 'pfSense'] },
    { icon: <Database size={20} />, title: 'Observability & DB', tags: ['Grafana', 'Prometheus', 'Loki', 'MySQL', 'PostgreSQL', 'Redis'] },
]

export default function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <ScrollReveal>
                    <h2 className="section-title">Technical <span>Skills</span></h2>
                    <div className="skills-grid">
                        {SKILLS.map((s) => (
                            <div className="skill-category" key={s.title}>
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
