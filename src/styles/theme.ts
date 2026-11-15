export const theme = {
  colors: {
    rojo: '#ED1E1E',
    rojoHover: '#B31414',
    blanco: '#FFFFFF',
    negro: '#141414',
    grisTexto: '#4A4A48',
    grisLinea: '#E4E1D8',
    crema: '#FAF9F6',
    exito: '#1E7B34',
  },
  fonts: {
    editorial: "'Playfair Display', serif",
    ui: "'Barlow', sans-serif",
  },
  breakpoints: {
    tablet: '860px',
    mobile: '600px',
  },
} as const;

export type Theme = typeof theme;