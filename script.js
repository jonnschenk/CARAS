const form = document.getElementById('subscriptionForm');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const formStatus = document.getElementById('formStatus');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showFieldError(input, message) {
  const field = input.closest('.campo');
  const errorElement = document.getElementById(`${input.name}Error`);

  if (!field || !errorElement) return;

  field.classList.toggle('campo--error', Boolean(message));
  field.classList.remove('campo--valid');
  errorElement.textContent = message || '';
}

function setFormStatus(message, type) {
  if (!formStatus) return;

  formStatus.textContent = message;
  formStatus.classList.remove('suscripcion__status--error', 'suscripcion__status--success');

  if (type) {
    formStatus.classList.add(`suscripcion__status--${type}`);
  }
}

function validateName() {
  const value = nombreInput.value.trim();

  if (!value) {
    showFieldError(nombreInput, 'Por favor, ingresa tu nombre.');
    return false;
  }

  showFieldError(nombreInput, '');
  return true;
}

function validateEmail() {
  const value = emailInput.value.trim();

  if (!value) {
    showFieldError(emailInput, 'Ingresa tu correo electrónico.');
    return false;
  }

  if (!emailRegex.test(value)) {
    showFieldError(emailInput, 'El correo no tiene un formato válido.');
    return false;
  }

  showFieldError(emailInput, '');
  return true;
}

function validateForm() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();

  if (!isNameValid || !isEmailValid) {
    setFormStatus('Corrija los errores para continuar.', 'error');
    return false;
  }

  setFormStatus('¡Gracias! Tu suscripción fue enviada con éxito.', 'success');
  return true;
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
  });

  [nombreInput, emailInput].forEach((input) => {
    input.addEventListener('input', () => {
      if (input === nombreInput) {
        validateName();
      }

      if (input === emailInput) {
        validateEmail();
      }

      if (nombreInput.value.trim() && emailInput.value.trim() && emailRegex.test(emailInput.value.trim())) {
        setFormStatus('', '');
      }
    });
  });
}
