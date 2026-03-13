// Minimal JavaScript for Landing Page

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize EmailJS with your Public Key
    (function() {
        emailjs.init("VDnAOk1Z421n49PWy");
    })();

    // Simple Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.disabled = true;
            submitBtn.innerText = 'Envoi en cours...';

            // Get Form Data
            const templateParams = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value,
                email: 'tobibelaw2@gmail.com'
            };

            // Send using emailjs.send
            emailjs.send('service_qf2d3nm', 'template_ctftdb1', templateParams)
                .then(() => {
                    alert('Merci ! Votre demande de devis a été envoyée. Nous vous recontacterons sous 24h.');
                    contactForm.reset();
                })
                .catch((error) => {
                    console.error('EmailJS Error:', error);
                    alert('Désolé, une erreur est survenue (Error 400). Veuillez vérifier votre Public Key বা সরাসরি কল করুন।');
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalText;
                });
        });
    }

    // Navbar background change on scroll
    const header = document.querySelector('header');
    const logoText = document.getElementById('logoText');
    const navLinks = document.querySelectorAll('nav a:not(.bg-orange-500)');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-white', 'shadow-md');
            header.classList.remove('bg-transparent');
            if (logoText) {
                logoText.classList.add('text-dark');
                logoText.classList.remove('text-white');
            }
            navLinks.forEach(link => {
                link.classList.add('text-dark');
                link.classList.remove('text-white');
            });
        } else {
            header.classList.remove('bg-white', 'shadow-md');
            header.classList.add('bg-transparent');
            if (logoText) {
                logoText.classList.add('text-white');
                logoText.classList.remove('text-dark');
            }
            navLinks.forEach(link => {
                link.classList.add('text-white');
                link.classList.remove('text-dark');
            });
        }
    });

    // Set current year in footer
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Swiper Initialization
    const swiper = new Swiper('.iterations-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.iterations-pagination',
            clickable: true,
            dynamicBullets: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
});

