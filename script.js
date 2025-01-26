// script.js

document.addEventListener('DOMContentLoaded', () => {
    const rentButtons = document.querySelectorAll('.motorcycle .btn');

    rentButtons.forEach(button => {
        button.addEventListener('click', () => {
            const bikeName = button.closest('.motorcycle').querySelector('h3').textContent;
            alert(`Thank you for choosing the ${bikeName}. Our team will contact you soon!`);
        });
    });

    const contactForm = document.querySelector('.contact form');
    contactForm.addEventListener('submit', event => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for reaching out! We will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
});
