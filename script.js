// Initialize Lucide icons
lucide.createIcons();

// element toggle function
const elementToggleFunc = function (elem) { 
    elem.classList.toggle("active"); 
}

// Navigation functionality
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and sections
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));

        // Add active class to clicked button and corresponding section
        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
        window.scrollTo(0, 0);
    });
});

// Form validation and submission
const contactForm = document.querySelector('.contact-form');
const formInputs = contactForm.querySelectorAll('input, textarea');
const submitButton = contactForm.querySelector('button[type="submit"]');

formInputs.forEach(input => {
    input.addEventListener('input', () => {
        const isValid = Array.from(formInputs).every(input => input.value.trim() !== '');
        submitButton.disabled = !isValid;
    });
});

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Message sent successfully!');
        contactForm.reset();
        submitButton.disabled = true;
    });
}

// Animate skill bars on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.progress;
        }
    });
}, { threshold: 0.5 });

// Observe all skill progress bars
document.querySelectorAll('.skill-progress').forEach(progress => {
    const percentage = progress.style.width;
    progress.style.width = '0';
    progress.dataset.progress = percentage;
    observer.observe(progress);
});