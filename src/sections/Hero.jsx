import ScrollReveal from '../components/ScrollReveal'

export default function Hero() {
    const scrollTo = (id) => {
        const el = document.querySelector(id)
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' })
    }

    return (
        <section className="hero" id="hero">
            <div className="container">
                <ScrollReveal>
                    <div className="hero-grid">
                        <div className="hero-content">
                            <h1>
                                I'm <span className="gradient-text">Golf Khomsan</span> <br />
                                Infrastructure Engineer
                            </h1>
                            <p>
                                Infrastructure Engineer with DevOps capability, experienced in designing and
                                maintaining enterprise cloud and hybrid infrastructures. Skilled in automation-driven
                                problem solving, Infrastructure as Code, and Kubernetes optimization across high-availability environments.
                                Strong background in security operations, including FortiGate administration, Cloudflare configuration,
                                and Web Application Firewall (WAF) rule management to enhance network protection.
                                Currently seeking Infrastructure or DevOps opportunities to deliver secure, automated, and resilient systems.
                            </p>
                            <div className="cta-group">
                                <button className="btn btn-primary" onClick={() => scrollTo('#projects')}>View Projects</button>
                                <button className="btn btn-outline" onClick={() => scrollTo('#contact')}>Contact Me</button>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img
                                src="/images/profile.jpg"
                                alt="Goft Khomsan – Infrastructure Engineer"
                            />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
