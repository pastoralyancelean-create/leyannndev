AOS.init({duration: 1000, once: true});
lucide.createIcons();

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
themeToggle.onclick = () => {
    document.documentElement.classList.toggle("dark");
};

emailjs.init("r-OZq0GDLQ9hb2B51");

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('service_jrpotlg', 'template_iuqcskk', this)
        .then(() => {
            alert('Message sent successfully!');
            contactForm.reset();
        }, (error) => {
            alert('Oops! Something went wrong: ' + error.text);
        });
});

// About Modal Functionality
const heartBtn = document.getElementById('heartBtn');
const aboutModal = document.getElementById('aboutModal');
const closeModal = document.getElementById('closeModal');
const closeModalBtn = document.getElementById('closeModalBtn');

heartBtn.addEventListener('click', () => {
    aboutModal.classList.add('active');
    lucide.createIcons();
});

closeModal.addEventListener('click', () => {
    aboutModal.classList.remove('active');
});

closeModalBtn.addEventListener('click', () => {
    aboutModal.classList.remove('active');
});

// Close modal when clicking outside
aboutModal.addEventListener('click', (e) => {
    if (e.target === aboutModal) {
        aboutModal.classList.remove('active');
    }
});

