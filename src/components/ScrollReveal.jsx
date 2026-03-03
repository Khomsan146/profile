import { useEffect, useRef, cloneElement } from 'react'

/**
 * Wraps a single child element with scroll-reveal animation.
 * The child must accept a ref. Pass className via child if needed,
 * or use the `className` prop here to add to the wrapper div.
 */
export default function ScrollReveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => el.classList.add('active'), delay)
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [delay])

    return (
        <div ref={ref} data-reveal className={className}>
            {children}
        </div>
    )
}
