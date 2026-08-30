# CARAS — Newsletter Landing Page

Landing page de suscripción al newsletter de **CARAS**, con la agenda social, de moda y cultura de México. Construida con HTML y SCSS (compilado a CSS), sin frameworks de JavaScript. Proyecto personal de práctica de maquetación.

## Estructura

```
CARAS/
├── index.html          # Marcado de la página (header, formulario, beneficios, testimonios, footer)
├── styles/
│   └── main.css        # CSS compilado a partir de scss/ — no editar a mano
├── scss/
│   ├── main.scss              # Punto de entrada: importa partials y define custom properties
│   ├── abstracts/
│   │   ├── _variables.scss    # Paleta, tipografía y breakpoints
│   │   ├── _mixins.scss       # Mixin respond-to() para media queries
│   │   └── _index.scss        # Reexporta variables + mixins
│   ├── base/
│   │   └── _reset.scss        # Reset y estilos base (body, img, a, headings)
│   ├── layout/
│   │   ├── _header.scss
│   │   └── _footer.scss
│   └── components/
│       ├── _suscripcion.scss
│       ├── _beneficios.scss
│       └── _testimonios.scss
├── package.json        # Scripts de compilación de Sass
└── README.md
```

## Secciones

- **Header** — logo, título y subtítulo de presentación.
- **Suscripción** — formulario (nombre y correo) con layout en grid.
- **Beneficios** — grid de 3 columnas con las razones para suscribirse.
- **Testimonios** — layout flexbox con citas de lectores.
- **Footer** — redes sociales y datos de contacto.

## Diseño

- **Paleta:** Rojo `#ED1E1E` · Blanco `#FFFFFF` · Negro `#141414` (texto)
- **Tipografía:** [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (títulos y texto editorial) · [Barlow](https://fonts.google.com/specimen/Barlow) (UI y etiquetas)
- **Layout:** CSS Grid (formulario y beneficios) y Flexbox (testimonios y footer)
- **Responsive:** breakpoints en `860px` y `600px`
