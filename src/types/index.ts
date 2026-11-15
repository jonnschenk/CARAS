// Un beneficio de la sección "Por qué suscribirte"
export interface Benefit {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

// Valores que el usuario escribe en el formulario
export interface FormValues {
  nombre: string;
  email: string;
}

// Errores por campo: el "?" significa que puede no existir
export interface FormErrors {
  nombre?: string;
  email?: string;
}

// Mensaje general debajo del botón
export type FormStatus = {
  type: 'success' | 'error';
  message: string;
} | null;

export interface Testimonial {
  id: number;
  author: string;
  quote: string;
  avatar: string;
  avatarAlt: string;
}

export interface SocialLink {
  name: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}
