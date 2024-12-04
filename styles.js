
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});


const contactForm = document.querySelector('.contact-form form');


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

  
    console.log('Form data:', formData);
    alert('Thank you for your message! We will get back to you shortly.');

  
    contactForm.reset();
});