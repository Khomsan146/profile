// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('[data-reveal]');
const revealOnScroll = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        if (elementTop < window.innerHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Background Canvas (Subtle Particles)
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 60;

const initCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const createParticles = () => {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
};

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
};

window.addEventListener('resize', () => {
    initCanvas();
    createParticles();
});

initCanvas();
createParticles();
animate();

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* Modal Logic */
const modalData = {
    rcna: {
        title: "Ruijie Certified Network Associate (RCNA)",
        description: "Validates comprehensive knowledge in network fundamentals, WLAN setup, and routing/switching configurations using Ruijie enterprise equipment. Demonstrates ability to design and implement small to medium-sized enterprise networks."
    },
    vmtsp: {
        title: "Veeam Microsoft Technical Sales Professional (VMTSP)",
        description: "Demonstrates advanced expertise in designing Veeam backup solutions integrated with Microsoft technologies. Covers deep integration with Hyper-V, Azure, and Windows Server for robust disaster recovery strategies."
    },
    cc: {
        title: "Certified in Cybersecurity (CC) - THNCA",
        description: "Foundational cybersecurity certification by the Thailand National Cyber Security Agency. Covers essential security principles, incident response protocols, risk management, and network defense strategies mandated by national standards."
    }
};

const modal = document.getElementById('certModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeModal = document.querySelector('.close-modal');

if (modal) {
    document.querySelectorAll('.cert-badge').forEach(badge => {
        badge.addEventListener('click', () => {
            const certKey = badge.getAttribute('data-cert');
            if (modalData[certKey]) {
                modalTitle.innerText = modalData[certKey].title;
                modalDesc.innerText = modalData[certKey].description;
                modal.classList.add('active');
            }
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

/* Image Lightbox Logic */
const initImageLightbox = () => {
    // 1. Create Modal HTML if not exists
    if (!document.getElementById('imageModal')) {
        const imageModal = document.createElement('div');
        imageModal.id = 'imageModal';
        imageModal.innerHTML = `
            <span id="imageModalClose">&times;</span>
            <img id="imageModalImg" src="">
            <div id="imageModalCaption" class="zoom-hint">Click outside to close</div>
        `;
        document.body.appendChild(imageModal);
    }

    const imgModal = document.getElementById('imageModal');
    const modalImg = document.getElementById('imageModalImg');
    const modalClose = document.getElementById('imageModalClose');

    // 2. Select target images
    // Targets: .project-img, .img-large, and large images directly in main (for project pages)
    const targetImages = document.querySelectorAll('.project-img, .img-large, main > img');

    targetImages.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            imgModal.classList.add('active');
            modalImg.src = img.src;
        });
    });

    // 3. Close Logic
    const closeImageModal = () => {
        imgModal.classList.remove('active');
    };

    if (modalClose) modalClose.addEventListener('click', closeImageModal);

    imgModal.addEventListener('click', (e) => {
        if (e.target === imgModal) {
            closeImageModal();
        }
    });
};

// Run after DOM load
document.addEventListener('DOMContentLoaded', initImageLightbox);
