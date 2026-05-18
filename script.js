const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = 'mailto:info@dhillon-transport.co.uk?subject=Transport Enquiry';
});
