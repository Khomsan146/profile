import ScrollReveal from '../components/ScrollReveal'

const MINDSET = [
    { title: 'Reliability First', desc: 'Systems should fail gracefully and recover automatically.' },
    { title: 'Security by Design', desc: "Security is not a layer, it's the foundation of every build." },
    { title: 'Automate Everything', desc: "If it's done twice, it should be a script or a pipeline." },
    { title: 'Scalability Planning', desc: "Architect for tomorrow's traffic, not just today's." },
    { title: 'Cost Optimization', desc: 'Efficiency means performance without wasted resources.' },
]

export default function Mindset() {
    return (
        <section id="mindset" style={{ background: 'rgba(17,24,39,0.3)' }}>
            <div className="container">
                <ScrollReveal>
                    <div style={{
                        background: 'rgba(17,24,39,0.8)', border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '20px', padding: '3rem'
                    }}>
                        <h2 className="section-title">Professional <span>Mindset</span></h2>
                        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', lineHeight: 1.7 }}>
                            My engineering philosophy is built on five core pillars that ensure long-term stability and business growth.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                            {MINDSET.map((m) => (
                                <div key={m.title} style={{
                                    background: 'rgba(59,130,246,0.05)', border: '1px solid rgba(59,130,246,0.2)',
                                    borderRadius: '12px', padding: '1.5rem'
                                }}>
                                    <h4 style={{ color: '#06b6d4', marginBottom: '0.5rem', fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)' }}>{m.title}</h4>
                                    <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6 }}>{m.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
