// After
// document.getElementById('credits-btn')
//   .addEventListener('click', openModal);

// document.getElementById('credits-close-btn')
//   .addEventListener('click', closeModal);

// document.getElementById('overlay')
//   .addEventListener('click', handleOverlayClick);

// document.addEventListener('keydown', function(e) {
//   if (e.key === 'Escape') closeModal();
// });

function openModal() {
  document.getElementById('overlay').classList.add('open');

  const nav = document.querySelector('nav');
  const main = document.querySelector('main');

  if (nav) nav.classList.add('blurred');
  if (main) main.classList.add('blurred');
}

function closeModal() {
  document.getElementById('overlay').classList.remove('open');

  const nav = document.querySelector('nav');
  const main = document.querySelector('main');

  if (nav) nav.classList.remove('blurred');
  if (main) main.classList.remove('blurred');
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('overlay')) closeModal();
}

