document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Simple Contact Form Submission Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real scenario, you'd send this data to a server (e.g., via Fetch API).
            // For a static site, you might use a service like Formspree or Netlify Forms.
            
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset the form after submission
            this.reset();
        });
    }

    // 3. Optional: Add an effect when the page loads (e.g., fading in the hero text)
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = 0;
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease-in-out';
            heroContent.style.opacity = 1;
        }, 100);
    }
});