AOS.init({duration: 1000, once: true});
document.documentElement.classList.add('aos-ready');
lucide.createIcons();

document.querySelectorAll('.media-fallback img').forEach((image) => {
    const showFallback = () => image.parentElement.classList.add('image-unavailable');
    image.addEventListener('error', showFallback);
    if (image.complete && image.naturalWidth === 0) showFallback();
});

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const matrix = "01ARDUINO";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}
function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#6366f1';
    ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(drawMatrix, 50);
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#6366f1' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6366f1',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

const text = "Arduino Developer • Web Developer • IoT Enthusiast • Photojournalist • Freelancer";
let i = 0;
function typing() {
    const el = document.getElementById("typing");
    if (!el) return;
    if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 60);
    }
}
typing();

window.addEventListener("scroll", () => {
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
});

const themeToggle = document.getElementById("themeToggle");
function updateThemeButton() {
    const isDark = document.documentElement.classList.contains("dark");
    const label = isDark ? "Switch to light mode" : "Switch to dark mode";
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.innerHTML = `<i data-lucide="${isDark ? "sun" : "moon"}"></i>`;
    lucide.createIcons();
}

updateThemeButton();
themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    updateThemeButton();
});

emailjs.init("r-OZq0GDLQ9hb2B51");

const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');
const contactSubmit = contactForm.querySelector('button[type="submit"]');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    contactStatus.textContent = 'Sending your message...';
    contactStatus.dataset.state = 'sending';
    contactSubmit.disabled = true;
    emailjs.sendForm('service_jrpotlg', 'template_iuqcskk', this)
        .then(() => {
            contactStatus.textContent = 'Thanks! Your message has been sent.';
            contactStatus.dataset.state = 'success';
            contactForm.reset();
        }, (error) => {
            contactStatus.textContent = `Message could not be sent: ${error.text || 'Please try again.'}`;
            contactStatus.dataset.state = 'error';
        })
        .finally(() => {
            contactSubmit.disabled = false;
        });
});

// About Modal Functionality
const heartBtn = document.getElementById('heartBtn');
const aboutModal = document.getElementById('aboutModal');
const closeModal = document.getElementById('closeModal');
const closeModalBtn = document.getElementById('closeModalBtn');
let modalTrigger = null;

function openAboutModal() {
    modalTrigger = document.activeElement;
    aboutModal.classList.add('active');
    aboutModal.setAttribute('aria-hidden', 'false');
    closeModal.focus();
    lucide.createIcons();
}

function dismissAboutModal() {
    aboutModal.classList.remove('active');
    aboutModal.setAttribute('aria-hidden', 'true');
    if (modalTrigger) modalTrigger.focus();
}

heartBtn.setAttribute('tabindex', '0');
heartBtn.setAttribute('role', 'button');
heartBtn.setAttribute('aria-label', 'About the developer');
heartBtn.addEventListener('click', openAboutModal);
heartBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openAboutModal();
    }
});

closeModal.addEventListener('click', dismissAboutModal);

closeModalBtn.addEventListener('click', dismissAboutModal);

// Close modal when clicking outside
aboutModal.addEventListener('click', (e) => {
    if (e.target === aboutModal) {
        dismissAboutModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (!aboutModal.classList.contains('active')) return;

    if (e.key === 'Escape') {
        dismissAboutModal();
        return;
    }

    if (e.key === 'Tab') {
        const focusable = [...aboutModal.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')]
            .filter((element) => element.getClientRects().length > 0);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
});

