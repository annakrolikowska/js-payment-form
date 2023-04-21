import '../styles/home-page.scss'
import '../styles/components/form.scss'

const form = document.querySelector('.form-component');
const submitBtn = form.querySelector('.form-component__button');
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
    } else {
      submitBtn.disabled = true;
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