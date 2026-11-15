import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { FormErrors, FormStatus, FormValues } from '../types';
import { validateEmail, validateForm, validateNombre } from '../utils/validation';

const INITIAL_VALUES: FormValues = { nombre: '', email: '' };

const validators: Record<keyof FormValues, (value: string) => string | undefined> = {
  nombre: validateNombre,
  email: validateEmail,
};

export function useSubscriptionForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const field = name as keyof FormValues;

    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: validators[field](value) }));
    setStatus(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newErrors = validateForm(values);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStatus({ type: 'success', message: '¡Gracias! Tu suscripción fue enviada con éxito.' });
      setValues(INITIAL_VALUES);
    } else {
      setStatus({ type: 'error', message: 'Corrige los errores para continuar.' });
    }
  };

  return { values, errors, status, handleChange, handleSubmit };
}