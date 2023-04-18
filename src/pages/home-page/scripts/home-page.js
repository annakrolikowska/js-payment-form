import '../styles/home-page.scss'

const form = document.querySelector('.home-page__form');
const submitBtn = form.querySelector('.home-page__button');
const inputs = form.querySelectorAll('input');

function validateInputs() {
  let isValid = true;
  inputs.forEach(input => {
    if (!input.checkValidity()) {
      isValid = false;
    }
  });
  return isValid;
}

inputs.forEach(input => {
  input.addEventListener('change', () => {
    if (validateInputs()) {
      submitBtn.disabled = false;
      console.log('kitek')
    } else {
      submitBtn.disabled = true;
      console.log('pawcio')
    }
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateInputs()) {
    window.alert("Success")
    form.submit();
  }
});