// Mobile Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Contact Form
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').innerHTML = 
        '<p style="color:green;">ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে।</p>';
    this.reset();
});