document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Sticky Navigation
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
function sendMail() {
    // Get the form data
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };
    emailjs.send("service_dagp7d9","template_bv1gihp",parms).then(alert("Email Sent!!"))
}    

// Inisialisasi EmailJS dengan ID akun Anda
(function() {
    emailjs.init(Yte-BBqiIpdwYVXi5); // Ganti dengan public key dari EmailJS
})();

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Tampilkan status loading
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Mengirim...';
            submitBtn.disabled = true;
            
            // Kirim email melalui EmailJS
            emailjs.sendForm(service_dagp7d9, template_hjqiywq, contactForm)
                .then(function(response) {
                    // Sukses mengirim
                    formMessage.textContent = 'Pesan berhasil dikirim! Saya akan segera membalas email Anda.';
                    formMessage.classList.add('success');
                    formMessage.style.display = 'block';
                    contactForm.reset();
                    
                    // Reset tombol
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                    
                    // Sembunyikan pesan setelah 5 detik
                    setTimeout(() => {
                        formMessage.style.display = 'none';
                        formMessage.classList.remove('success');
                    }, 5000);
                }, function(error) {
                    // Gagal mengirim
                    formMessage.textContent = 'Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi saya langsung di mnurafrizalpahlevi@gmail.com';
                    formMessage.classList.add('error');
                    formMessage.style.display = 'block';
                    
                    // Reset tombol
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                    
                    console.error('Failed to send email:', error);
                });
        });
    }
});
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Animation on Scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-category, .certificate-card, .project-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.skill-category, .certificate-card, .project-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    
});