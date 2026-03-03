import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

const NAV_LINKS = [
    { id: '#about', label: 'About' },
    { id: '#projects', label: 'Projects' },
    { id: '#skills', label: 'Skills' },
    { id: '#mindset', label: 'Mindset' },
    { id: '#contact', label: 'Contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const isHome = location.pathname === '/'

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTo = (id) => {
        setOpen(false)
        if (!isHome) { navigate('/'); setTimeout(() => scrollToEl(id), 300) }
        else scrollToEl(id)
    }
    const scrollToEl = (id) => {
        const el = document.querySelector(id)
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' })
    }

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="container">
                <div className="nav-inner">
                    <a className="nav-logo" onClick={() => scrollTo('#hero')} style={{ cursor: 'pointer' }}>
                        <span className="gradient-text">Goft</span> <span className="text-white">Khomsan</span>
                    </a>

                    {isHome ? (
                        <>
                            <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu">
                                <span /><span /><span />
                            </button>
                            <ul className={`nav-links${open ? ' open' : ''}`}>
                                {NAV_LINKS.map(({ id, label }) => (
                                    <li key={id}><a onClick={() => scrollTo(id)}>{label}</a></li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <a className="back-btn" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                            <ArrowLeft size={16} /> Back to Home
                        </a>
                    )}
                </div>
            </div>
        </nav>
    )
}
