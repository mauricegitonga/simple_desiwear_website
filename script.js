document.addEventListener('DOMContentLoaded', function() {
    // Function to smoothly scroll to a target element
    function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    }

    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();

        if (nameValue === '' || emailValue === '') {
            alert('Please fill out all fields.');
            return;
        }

        alert(`Thank you, ${nameValue}! Your message has been sent.`);

        nameInput.value = '';
        emailInput.value = '';
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });
});

