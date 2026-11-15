import type { FormErrors, FormValues } from '../types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateNombre(nombre: string): string | undefined {
  return nombre.trim() ? undefined : 'Por favor, ingresa tu nombre.';
}

export function validateEmail(email: string): string | undefined {
  const value = email.trim();

  if (!value) return 'Ingresa tu correo electrónico.';
  if (!EMAIL_REGEX.test(value)) return 'El correo no tiene un formato válido.';
  return undefined;
}

export function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const nombreError = validateNombre(values.nombre);
  const emailError = validateEmail(values.email);

  if (nombreError) errors.nombre = nombreError;
  if (emailError) errors.email = emailError;

  return errors;
}