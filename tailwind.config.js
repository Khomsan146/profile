/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            colors: {
                'bg-primary': '#0f172a',
                'bg-secondary': '#111827',
                'surface': '#1e293b',
                'surface-light': '#334155',
                'accent-blue': '#3b82f6',
                'accent-cyan': '#06b6d4',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'modal-slide': 'modalSlide 0.3s ease-out',
                'zoom-in': 'zoomIn 0.3s ease',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                modalSlide: {
                    from: { transform: 'translateY(-50px)', opacity: 0 },
                    to: { transform: 'translateY(0)', opacity: 1 },
                },
                zoomIn: {
                    from: { transform: 'scale(0.8)', opacity: 0 },
                    to: { transform: 'scale(1)', opacity: 1 },
                },
            },
        },
    },
    plugins: [],
}
