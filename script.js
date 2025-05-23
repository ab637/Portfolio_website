// Smooth scroll on button click
const buttons = document.querySelectorAll('[data-target]');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector(btn.dataset.target).scrollIntoView({ behavior: 'smooth' });
  });
});
