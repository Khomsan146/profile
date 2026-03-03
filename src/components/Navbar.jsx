import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => { setMenuOpen(false) }, [location])

    const scrollTo = (e, href) => {
        // Only do smooth scroll on home page
        if (isHome && href.startsWith('#')) {
            e.preventDefault()
            const target = document.querySelector(href)
            if (target) {
                const offset = target.getBoundingClientRect().top + window.pageYOffset - 80
                window.scrollTo({ top: offset, behavior: 'smooth' })
            }
            setMenuOpen(false)
        }
    }

    return (
        <>
            <nav className={scrolled ? 'scrolled' : ''}>
                <div className="container nav-content">
                    <Link to="/" className="logo">
                        <span className="gradient-text">Golf</span>Khomsan
                    </Link>

                    {/* Desktop nav */}
                    {isHome ? (
                        <ul className="nav-links">
                            {NAV_LINKS.map(l => (
                                <li key={l.href}>
                                    <a href={l.href} onClick={e => scrollTo(e, l.href)}>{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <Link to="/" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                            ← Back to Home
                        </Link>
                    )}

                    {/* Hamburger (only on home, mobile) */}
                    {isHome && (
                        <button
                            className="hamburger"
                            onClick={() => setMenuOpen(o => !o)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={22} color="#f8fafc" /> : <Menu size={22} color="#f8fafc" />}
                        </button>
                    )}
                </div>

                {/* Mobile dropdown */}
                {isHome && (
                    <ul className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                        {NAV_LINKS.map(l => (
                            <li key={l.href}>
                                <a href={l.href} onClick={e => scrollTo(e, l.href)}>{l.label}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </>
    )
}
