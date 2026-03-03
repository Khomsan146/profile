// Centralized data for all 6 projects
const projects = [
    {
        slug: 'automation-n8n',
        title: 'Infrastructure Automation & Monitoring Platform',
        titleParts: { before: 'Infrastructure ', gradient: 'Automation & Monitoring Platform', after: '' },
        label: 'Process Automation',
        description:
            'Deployed self-hosted n8n to automate operations, reduce manual workload, and enable real-time visibility.',
        cardDescription: 'Deployed self-hosted n8n automation platform to orchestrate 50+ workflows reducing manual workload by 60 hours/month.',
        tags: ['n8n', 'Docker', 'Webhooks', 'Prometheus'],
        image: '/images/project-n8n-1.png',
        stats: [
            { value: '50+', label: 'Workflows Created' },
            { value: '60hrs', label: 'Reduced Workload/Month' },
            { value: 'Real-time', label: 'Alert Routing & Visibility' },
        ],
        gallery: [
            { src: '/images/project-n8n-1.png', alt: 'Dashboard' },
            { src: '/images/project-n8n-2.png', alt: 'Workflow Editor' },
            { src: '/images/project-n8n-3.png', alt: 'API Integration' },
            { src: '/images/project-n8n-4.png', alt: 'Automated Reports' },
        ],
        galleryHeight: 250,
        challenge:
            'Production infrastructure required repetitive manual tasks such as handling monitoring alerts, log review, report generation, and cross-system coordination. Operational processes were time-consuming and prone to delay.',
        solution: {
            intro: 'Deployed and maintained a self-hosted n8n instance (Docker-based) to automate infrastructure operations and integrate multiple systems.',
            items: [
                { title: 'Alert Handling Automation', desc: 'Monitoring alerts → Automated notification routing → Structured response workflow for operations team' },
                { title: 'Infrastructure Reporting Automation', desc: 'Scheduled data queries → Generate infrastructure status reports → Automatic email distribution' },
                { title: 'Data Integration & Dashboarding', desc: 'Aggregated multiple infrastructure data sources into a centralized web-based monitoring dashboard' },
                { title: 'API-Based System Integration', desc: 'Connected REST APIs and webhooks to synchronize operational data between services' },
            ],
        },
        techStack: ['n8n', 'Docker', 'Webhooks', 'SQL', 'Prometheus', 'Cloud APIs'],
    },
    {
        slug: 'cicd-pipeline',
        title: "End-to-End CI/CD Pipeline Infrastructure",
        titleParts: { before: 'End-to-End ', gradient: 'CI/CD Pipeline', after: ' Infrastructure' },
        label: 'DevOps Automation',
        description:
            'Architected and implemented a robust CI/CD pipeline supporting multiple environments (DEV, UAT, PROD) with automated testing, security scanning, and seamless promotion strategies.',
        cardDescription: 'Architected robust CI/CD pipeline across DEV/UAT/PROD with GitOps, automated security scanning, and 15-minute average deployment cycles.',
        tags: ['GitLab CI', 'ArgoCD', 'Kubernetes', 'SonarQube'],
        image: '/images/project-cicd-1.png',
        stats: [
            { value: '3 Env', label: 'Fully Automated' },
            { value: '15 min', label: 'Avg. Deployment Time' },
            { value: '100%', label: 'IaC Coverage' },
        ],
        gallery: [
            { src: '/images/project-cicd-1.png', alt: 'Pipeline Architecture' },
            { src: '/images/project-cicd-2.png', alt: 'Deployment Dashboard' },
        ],
        galleryHeight: 350,
        challenge:
            'The development team faced frequent integration issues and manual deployment errors. Releases to Production were slow, risky, and lacked a standardized rollback mechanism. There was no clear separation between DEV, UAT, and PROD environments.',
        solution: {
            intro: 'Built a standard GitOps workflow targeting Kubernetes clusters.',
            listItems: [
                { title: 'Environment Isolation', desc: 'Created distinct Kubernetes namespaces and clusters for DEV, UAT, and PROD to ensure total isolation.' },
                { title: 'Automated Pipelines', desc: 'Configured GitLab CI / GitHub Actions to trigger builds, run unit tests, and build Docker images on every commit.' },
                { title: 'GitOps Deployment', desc: 'Utilized ArgoCD to sync infrastructure state. Promotion from DEV to UAT is automated after tests pass; UAT to PROD requires manual approval.' },
                { title: 'Security Integration', desc: 'Embedded SonarQube and Trivy image scanning into the pipeline to catch vulnerabilities before deployment.' },
            ],
        },
        techStack: ['Jenkins / GitLab CI', 'ArgoCD', 'Docker', 'Rancher', 'Kubernetes', 'SonarQube', 'Helm Charts'],
    },
    {
        slug: 'db-migration',
        title: 'High-Scale Database Migration & OS Upgrade',
        titleParts: { before: 'High-Scale ', gradient: 'Database Migration', after: ' & OS Upgrade' },
        label: 'Database Management',
        description:
            'Executed dual migration paths: moving on-prem PostgreSQL to AWS Aurora RDS for cloud scalability, and migrating legacy Postgres workloads from Rocky Linux to Ubuntu LTS.',
        cardDescription: 'Executed zero-data-loss dual migration: on-prem PostgreSQL → AWS Aurora RDS and Rocky Linux → Ubuntu LTS with 3x performance improvement.',
        tags: ['PostgreSQL', 'AWS Aurora', 'AWS DMS', 'PgBouncer'],
        image: '/images/project-db.png',
        stats: [
            { value: '3x', label: 'Performance Boost' },
            { value: 'Zero', label: 'Data Loss' },
        ],
        singleImage: '/images/project-db.png',
        challenge:
            'The legacy database infrastructure running on Rocky Linux was facing end-of-life support issues and performance bottlenecks. Concurrently, the business needed to offload database maintenance to a managed service for critical workloads to improve reliability.',
        solution: {
            intro: 'Designed a comprehensive migration plan covering two distinct paths.',
            listItems: [
                { title: 'Cloud Migration (Aurora RDS)', desc: 'Utilized AWS DMS (Database Migration Service) to replicate data continuously from on-prem to Aurora PostgreSQL, ensuring minimal downtime during the final switchover.' },
                { title: 'OS Platform Re-hosting', desc: 'Provisioned new high-performance Ubuntu servers and used pg_dump/pg_restore with parallel processing for large tables to migrate remaining on-prem databases.' },
                { title: 'Performance Tuning', desc: 'Optimized postgresql.conf parameters (shared_buffers, work_mem) on the new environments and implemented connection pooling with PgBouncer.' },
                { title: 'Validation', desc: 'Developed automated scripts to verify row counts and data integrity between source and destination before sign-off.' },
            ],
        },
        techStack: ['PostgreSQL', 'AWS Aurora RDS', 'Rocky Linux', 'Ubuntu LTS', 'AWS DMS', 'PgBouncer'],
    },
    {
        slug: 'eks-migration',
        title: 'EKS Cluster Migration: Singapore to Thailand',
        titleParts: { before: 'EKS Cluster Migration: ', gradient: 'Singapore to Thailand', after: '' },
        label: 'Cloud Migration',
        description:
            'A strategic infrastructure migration to improve latency for local users and adhere to data sovereignty compliance, moving mission-critical workloads from AWS Singapore (ap-southeast-1) to Thailand (ap-southeast-7).',
        cardDescription: 'Zero-downtime migration of mission-critical EKS workloads from AWS Singapore to Thailand for latency reduction and data sovereignty compliance.',
        tags: ['AWS EKS', 'Terraform', 'Kong', 'ArgoCD'],
        image: '/images/project-eks.png',
        stats: [
            { value: '~40%', label: 'Latency Reduction' },
            { value: 'ZERO', label: 'Downtime Cutover' },
        ],
        singleImage: '/images/project-eks.png',
        challenge:
            'The application was originally hosted in the Singapore region, resulting in noticeable latency for the primary user base in Thailand. Additionally, new regulatory requirements mandated that sensitive personal data be stored and processed within the Kingdom of Thailand.',
        solution: {
            intro: 'Designed a phased migration strategy using Infrastructure as Code (Terraform) to replicate the environment exactly.',
            listItems: [
                { title: 'Private Infrastructure Design', desc: 'Designed and provisioned a private VPC architecture using Terraform, establishing isolated Prod and UAT environments with segmented subnets and controlled network policies.' },
                { title: 'Secure Connectivity', desc: 'Implemented and validated Site-to-Site VPN connectivity to dependent environments, enforcing least-privilege network access to ensure secure cross-environment communication.' },
                { title: 'CI/CD Validation', desc: 'Leveraged ArgoCD with Helm charts to manage application deployments, performing UAT validation to ensure configuration consistency and deployment integrity prior to production migration.' },
                { title: 'Traffic & TLS Management', desc: 'Configured Kong Ingress Controller with AWS ACM for SSL/TLS termination, managing secure traffic routing and load distribution within the Kubernetes cluster.' },
                { title: 'Shared Storage Architecture', desc: 'Implemented Amazon EFS for shared persistent storage across nodes, and utilized EBS-backed volumes for stateful workloads requiring high-performance block storage.' },
                { title: 'Seamless Migration Strategy', desc: 'Executed a zero-downtime migration by pre-provisioning the new environment, validating workloads in advance, and performing final cutover by updating DNS records to point to the Kong Ingress endpoint.' },
            ],
        },
        techStack: ['AWS EKS', 'Terraform', 'Kong', 'EBS / EFS', 'ArgoCD', 'Helm'],
    },
    {
        slug: 'firewall-fortigate',
        title: 'Enterprise Fortigate Firewall Implementation',
        titleParts: { before: 'Enterprise ', gradient: 'Fortigate Firewall', after: ' Implementation' },
        label: 'Network Security',
        description:
            'Deployed highly redundant Next-Generation Fortigate Firewall clusters to secure critical enterprise networks, enabling deep packet inspection, VPN access, and advanced threat protection.',
        cardDescription: 'Deployed Active-Passive Fortigate HA cluster with Zero Trust policies, SSL-VPN with LDAP SSO, and network segmentation for enterprise security.',
        tags: ['Fortigate NGFW', 'HA Cluster', 'IPsec VPN', 'Zero Trust'],
        image: '/images/project-firewall-1.png',
        stats: [
            { value: 'HA', label: 'Active-Passive' },
            { value: 'Zero Trust', label: 'Policies Enforced' },
        ],
        gallery: [
            { src: '/images/project-firewall-1.png', alt: 'Security Center' },
            { src: '/images/project-firewall-2.png', alt: 'Network Dashboard' },
        ],
        galleryHeight: 350,
        challenge:
            'The company was relying on aging perimeter firewalls that lacked application-aware visibility and could not support the growing number of remote workers. The network was also segmented poorly, creating lateral movement risks.',
        solution: {
            intro: 'Architected a complete network security overhaul using Fortinet solutions.',
            listItems: [
                { title: 'High Availability Cluster', desc: 'Configured two Fortigate appliances in an Active-Passive HA cluster to ensure seamless failover in case of hardware failure.' },
                { title: 'Network Segmentation', desc: 'Redesigned VLANs to isolate Guest, IoT, Corporate, and Server networks, enforcing strict inter-VLAN firewall policies.' },
                { title: 'VPN & SSO', desc: 'Deployed SSL-VPN for remote users with LDAP integration for Single Sign-On (SSO).' },
                { title: 'Advanced Threat Protection', desc: 'Enabled IPS (Intrusion Prevention System), Antivirus, and Web Filtering profiles to block malicious traffic at the edge.' },
            ],
        },
        techStack: ['Fortigate NGFW', 'FortiAnalyzer', 'SSL VPN', 'IPsec VPN', 'LDAP/Radius', 'VLAN'],
    },
    {
        slug: 'multicloud',
        title: 'Multi-Cloud Hybrid Solution Design',
        titleParts: { before: 'Multi-Cloud ', gradient: 'Hybrid Solution Design', after: '' },
        label: 'Cloud Architecture',
        description:
            'Strategic design integrating On-Premise Data Centers with AWS Public Cloud to achieve cost-efficiency, data sovereignty compliance, and high availability.',
        cardDescription: 'Designed hybrid multi-cloud architecture integrating on-prem Nutanix clusters with AWS EKS via S2S VPN for HA, DR, and cost-optimized workload distribution.',
        tags: ['AWS', 'Terraform', 'Kubernetes', 'Site-to-Site VPN'],
        image: '/images/project-multicloud.png',
        stats: [
            { value: 'HA', label: 'Active-Active' },
            { value: 'Costs', label: 'Optimized Usage' },
        ],
        singleImage: '/images/project-multicloud.png',
        challenge:
            'The organization required scalable compute power for peak loads but needed to keep sensitive customer data within their local data center due to strict compliance laws. A pure cloud or pure on-prem solution was not viable.',
        solution: {
            intro: 'Implemented a Hybrid Multi-Cloud architecture connecting on-prem infrastructure to AWS via Site-to-Site VPN.',
            listItems: [
                { title: 'Network Integration', desc: 'Established redundant VPN tunnels between AWS VPC and the local Data Center Firewall to ensure secure, private connectivity.' },
                { title: 'Workload Distribution', desc: 'Frontend and stateless services were deployed on AWS EKS to handle traffic spikes, while databases remained on-prem on high-performance Nutanix clusters.' },
                { title: 'Unified Management', desc: 'Used Rancher/ArgoCD to manage Kubernetes clusters across both environments from a single pane of glass.' },
                { title: 'Disaster Recovery', desc: 'Configured AWS S3 for offsite backups and implemented a warm standby DR plan in a secondary AWS region.' },
            ],
        },
        techStack: ['AWS & On-Prem', 'Site-to-Site VPN', 'Kubernetes (EKS/K3s)', 'Terraform', 'Rancher', 'Cloudflare'],
    },
]

export default projects
