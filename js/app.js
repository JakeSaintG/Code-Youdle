document.querySelector('button[aria-label="Open credits modal"]')
  .addEventListener('click', openModal);

document.querySelector('button[aria-label="Close credits modal"]')
  .addEventListener('click', closeModal);

document.getElementById('overlay')
  .addEventListener('click', handleOverlayClick);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

function openModal() {
  document.getElementById('overlay').classList.add('open');
  document.querySelector('nav').classList.add('blurred');
  document.querySelector('main').classList.add('blurred');
}

function closeModal() {
  document.getElementById('overlay').classList.remove('open');
  document.querySelector('nav').classList.remove('blurred');
  document.querySelector('main').classList.remove('blurred');
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('overlay')) closeModal();
}