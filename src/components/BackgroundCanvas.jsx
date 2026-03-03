import { useEffect, useRef } from 'react'

class Particle {
    constructor(canvas) {
        this.canvas = canvas
        this.reset()
    }
    reset() {
        this.x = Math.random() * this.canvas.width
        this.y = Math.random() * this.canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.opacity = Math.random() * 0.5 + 0.2
    }
    update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0 || this.x > this.canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > this.canvas.height) this.speedY *= -1
    }
    draw(ctx) {
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
    }
}

export default function BackgroundCanvas() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let particles = []
        let animId

        const init = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            particles = Array.from({ length: 60 }, () => new Particle(canvas))
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(p => { p.update(); p.draw(ctx) })
            animId = requestAnimationFrame(animate)
        }

        const onResize = () => { init() }

        init()
        animate()
        window.addEventListener('resize', onResize)

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return <canvas id="bg-canvas" ref={canvasRef} />
}
