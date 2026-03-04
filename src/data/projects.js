export const projects = [
    {
        slug: 'eks-migration',
        title: 'EKS Migration: SG to TH',
        desc: 'Strategic migration of mission-critical workloads from Singapore to Thailand region for compliance and latency optimization.',
        tags: ['EKS', 'Terraform', 'Velero'],
        image: '/images/project-eks.png',
        stats: [{ val: '99.9%', lbl: 'Uptime' }, { val: '0', lbl: 'Downtime' }, { val: 'TH', lbl: 'Region' }],
        challenge: 'Mission-critical containerized workloads in Singapore EKS needed migration to Thailand region for data residency compliance and reduced latency for Thai users.',
        solution: 'Used Velero for stateful workload backup/restore and Terraform to provision the new EKS cluster in ap-southeast-7. Implemented blue-green cutover with DNS failback.',
        tech: ['AWS EKS', 'Terraform', 'Velero', 'Helm', 'ArgoCD', 'Cloudflare DNS'],
        gallery: ['/images/project-eks.png'],
    },
    {
        slug: 'cicd-pipeline',
        title: 'CI/CD Infrastructure',
        desc: 'Implemented end-to-end GitOps pipelines for DEV, UAT, and PROD environments using ArgoCD and tailored promotion strategies.',
        tags: ['ArgoCD', 'GitLab CI', 'Helm'],
        image: '/images/project-cicd-1.png',
        stats: [{ val: '3', lbl: 'Environments' }, { val: '100%', lbl: 'Automated' }, { val: '80%', lbl: 'Faster Deploy' }],
        challenge: 'Manual deployments across DEV/UAT/PROD were error-prone, inconsistent, and time-consuming.',
        solution: 'Designed GitLab CI pipelines with SonarQube code quality gates and ArgoCD for GitOps-based continuous delivery with environment promotion workflow.',
        tech: ['GitLab CI', 'ArgoCD', 'Helm', 'SonarQube', 'GHCR', 'Jenkins', 'Kubernetes'],
        gallery: ['/images/project-cicd-1.png', '/images/project-cicd-2.png'],
        details: `
            <ul class="responsibilities-list" style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 1rem; color: #94a3b8; list-style: none; padding-left: 0;">
                <li style="display: flex; gap: 0.75rem;"><span style="color: #3b82f6; flex-shrink: 0;">▸</span> <span><strong>Private Infrastructure Design:</strong> Designed and provisioned a private VPC architecture using Terraform, establishing isolated Prod and UAT environments with segmented subnets and controlled network policies.</span></li>
                <li style="display: flex; gap: 0.75rem;"><span style="color: #3b82f6; flex-shrink: 0;">▸</span> <span><strong>Secure Connectivity:</strong> Implemented and validated Site-to-Site VPN connectivity to dependent environments, enforcing least-privilege network access to ensure secure cross-environment communication.</span></li>
                <li style="display: flex; gap: 0.75rem;"><span style="color: #3b82f6; flex-shrink: 0;">▸</span> <span><strong>CI/CD Validation:</strong> Leveraged ArgoCD with Helm charts to manage application deployments, performing UAT validation to ensure configuration consistency and deployment integrity prior to production migration.</span></li>
                <li style="display: flex; gap: 0.75rem;"><span style="color: #3b82f6; flex-shrink: 0;">▸</span> <span><strong>Traffic & TLS Management:</strong> Configured Kong Ingress Controller with AWS ACM for SSL/TLS termination, managing secure traffic routing and load distribution within the Kubernetes cluster.</span></li>
                <li style="display: flex; gap: 0.75rem;"><span style="color: #3b82f6; flex-shrink: 0;">▸</span> <span><strong>Shared Storage Architecture:</strong> Implemented Amazon EFS for shared persistent storage across nodes, and utilized EBS-backed volumes for stateful workloads requiring high-performance block storage.</span></li>
                <li style="display: flex; gap: 0.75rem;"><span style="color: #3b82f6; flex-shrink: 0;">▸</span> <span><strong>Seamless Migration Strategy:</strong> Executed a zero-downtime migration by pre-provisioning the new environment, validating workloads in advance, and performing final cutover by updating DNS records to point to the Kong Ingress endpoint.</span></li>
            </ul>
        `
    },
    {
        slug: 'db-migration',
        title: 'High-Scale DB Migration',
        desc: 'Dual migration: PostgreSQL to Aurora RDS and legacy Rocky Linux Postgres to modern Ubuntu LTS infrastructure.',
        tags: ['AWS DMS', 'PostgreSQL', 'Aurora'],
        image: '/images/project-db.png',
        stats: [{ val: '0s', lbl: 'Downtime' }, { val: '2', lbl: 'Migrations' }, { val: '5x', lbl: 'Performance' }],
        challenge: 'Two simultaneous database migrations: cloud DB to Aurora RDS and on-premise legacy DB server to new OS, both without production downtime.',
        solution: 'Used AWS DMS with ongoing replication for the cloud migration and pg_dump/restore with streaming replication standby for the on-premise migration.',
        tech: ['AWS DMS', 'PostgreSQL', 'Aurora RDS', 'AWS RDS', 'Python', 'CloudWatch'],
        gallery: ['/images/project-db.png'],
    },
    {
        slug: 'multicloud',
        title: 'Multi-Cloud Solution Design',
        desc: 'Hybrid architecture integrating On-Premise Data Centers with AWS Public Cloud via Site-to-Site VPN for HA.',
        tags: ['Hybrid Cloud', 'VPN', 'AWS'],
        image: '/images/project-multicloud.png',
        stats: [{ val: '99.95%', lbl: 'Availability' }, { val: '2', lbl: 'Sites' }, { val: 'HA', lbl: 'Architecture' }],
        challenge: 'Organization needed seamless connectivity and workload portability between on-premise data center and AWS cloud with high availability.',
        solution: 'Designed Site-to-Site VPN with BGP routing, implemented hybrid DNS resolution, and deployed workloads across both environments with automated failover.',
        tech: ['AWS VPC', 'Site-to-Site VPN', 'BGP', 'Terraform', 'Cloudflare', 'FortiGate'],
        gallery: ['/images/project-multicloud.png'],
    },
    {
        slug: 'firewall-fortigate',
        title: 'FortiGate Firewall Implementation',
        desc: 'Deployed Next-Gen Firewall clusters with strict segmentation, Deep Packet Inspection, and HA configurations.',
        tags: ['FortiGate', 'Network Security', 'HA'],
        image: '/images/project-firewall-1.png',
        stats: [{ val: '99.99%', lbl: 'HA Uptime' }, { val: '10K+', lbl: 'Threats Blocked' }, { val: '0', lbl: 'Breaches' }],
        challenge: 'Legacy Sophos firewall could not meet enterprise security requirements. Needed migration to FortiGate with zero service disruption.',
        solution: 'Migrated from Sophos to FortiGate 90G HA cluster. Redesigned network zones, applied DPI policies, configured Site-to-Site VPNs, and implemented security across IT/OT environments.',
        tech: ['FortiGate 90G', 'FortiAnalyzer', 'Cloudflare WAF', 'IPSec VPN', 'SSL Inspection', 'DNAT/SNAT'],
        gallery: ['/images/project-firewall-1.png', '/images/project-firewall-2.png'],
    },
    {
        slug: 'automation-n8n',
        title: 'n8n Automation Workflows',
        desc: 'Orchestrated complex operational tasks and alerting systems using n8n to integrate tools and reduce manual toil.',
        tags: ['n8n', 'Webhooks', 'APIs'],
        image: '/images/project-n8n-1.png',
        stats: [{ val: '50+', lbl: 'Workflows' }, { val: '200h', lbl: 'Saved/Month' }, { val: '90%', lbl: 'Automated' }],
        challenge: 'Repetitive IT operations and manual alerting processes were consuming significant time and causing delayed incident responses.',
        solution: 'Deployed self-hosted n8n on Kubernetes and built workflows for incident alerting, infrastructure monitoring notifications, and cross-system data integrations.',
        tech: ['n8n', 'Kubernetes', 'Webhook', 'REST API', 'Grafana', 'Prometheus', 'LINE Notify'],
        gallery: [
            '/images/project-n8n-1.png',
            '/images/project-n8n-2.png',
            '/images/project-n8n-3.png',
            '/images/project-n8n-4.png',
        ],
    },
]
