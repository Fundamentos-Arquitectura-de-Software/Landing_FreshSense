
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");




const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });



'use strict';

// Función para abrir el menú
function openNavbar() {
  navbar.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("nav-active");
}

// Función para cerrar el menú
function closeNavbar() {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("nav-active");
}

// Eventos para abrir/cerrar menú
if (navOpenBtn) navOpenBtn.addEventListener("click", openNavbar);
if (navCloseBtn) navCloseBtn.addEventListener("click", closeNavbar);
if (overlay) overlay.addEventListener("click", closeNavbar);

// Cierra el menú al hacer click en un enlace
navLinks.forEach(link => {
  link.addEventListener("click", closeNavbar);
});


/*scroll up */
function scrollUp () {
  const scrollUp = document.getElementById('scroll-up')

  if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); 
  else scrollUp.classList.remove('show-scroll')

}


// Slider de testimonios estilo servicios
(function() {
  const wrapper = document.querySelector('.testimonials-wrapper');
  const cards = document.querySelectorAll('.testimonial-card');
  const nextBtn = document.querySelector('.testimonial-next-btn');
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  let current = 0;

  function updateSlider() {
    wrapper.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, idx) => dot.classList.toggle('active', idx === current));
  }

  if (nextBtn && wrapper && cards.length && dots.length) {
    nextBtn.addEventListener('click', () => {
      current = (current + 1) % cards.length;
      updateSlider();
    });
    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        current = idx;
        updateSlider();
      });
    });
    window.addEventListener('resize', updateSlider);
    updateSlider();
  }
})();

