const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const message = document.getElementById('message');

yesButton.addEventListener('click', () => {
  message.textContent = 'Wise decision!  Now go spread some positivity.';
  // No need to disable yesButton, it's the only clickable option
});

// Disable the noButton initially and visually indicate it's disabled
noButton.disabled = false;