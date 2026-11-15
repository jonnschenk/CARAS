const form = document.getElementById('subscriptionForm');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const formStatus = document.getElementById('formStatus');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setFieldError(input, message) {
  input.closest('.campo').classList.toggle('campo--error', Boolean(message));
  document.getElementById(`${input.name}Error`).textContent = message;
  return !message;
}

function setFormStatus(message, type) {
  formStatus.textContent = message;
  formStatus.className = type ? `suscripcion__status suscripcion__status--${type}` : 'suscripcion__status';
}

function validateName() {
  const message = nombreInput.value.trim() ? '' : 'Por favor, ingresa tu nombre.';
  return setFieldError(nombreInput, message);
}

function validateEmail() {
  const value = emailInput.value.trim();
  let message = '';

  if (!value) {
    message = 'Ingresa tu correo electrónico.';
  } else if (!emailRegex.test(value)) {
    message = 'El correo no tiene un formato válido.';
  }

  return setFieldError(emailInput, message);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();

  if (isNameValid && isEmailValid) {
    setFormStatus('¡Gracias! Tu suscripción fue enviada con éxito.', 'success');
  } else {
    setFormStatus('Corrija los errores para continuar.', 'error');
  }
});

nombreInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
form.addEventListener('input', () => setFormStatus(''));
