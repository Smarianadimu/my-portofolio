/ Efek navbar scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#e0e0e0';
  } else {
    navbar.style.backgroundColor = '#f5f5f5';
  }
});