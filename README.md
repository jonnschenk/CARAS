# CARAS — Newsletter Landing Page

Landing page de suscripción al newsletter de **CARAS**, con la agenda social, de moda y cultura de México. Proyecto personal de práctica de maquetación con HTML y SCSS, sin frameworks de JavaScript.

## Demostración

Aún no cuenta con despliegue en línea. Mientras tanto, puedes verla abriendo `index.html` localmente (ver sección [Uso](#uso)).

## Tecnologías utilizadas

- HTML5 semántico
- [Sass / SCSS](https://sass-lang.com/) (arquitectura por partials con `@use`/`@forward`)
- CSS3 — Grid y Flexbox
- [Google Fonts](https://fonts.google.com/): Playfair Display · Barlow

## Requisitos previos

- [Node.js](https://nodejs.org/) y npm (para compilar el SCSS), o el CLI de [Dart Sass](https://sass-lang.com/dart-sass/) instalado globalmente
- Un navegador web moderno

## Instalación y configuración

```bash
git clone <url-del-repositorio>
cd CARAS
npm install
```

No requiere variables de entorno ni configuración adicional.

## Uso

Compilar el SCSS a CSS:

```bash
npm run sass:build   # compila scss/main.scss → styles/main.css una vez
npm run sass:watch   # recompila automáticamente al guardar cambios
```

Luego abre `index.html` directamente en tu navegador.

**Importante:** edita solo los archivos dentro de `scss/`; `styles/main.css` se regenera con los comandos de arriba y no debe modificarse a mano.

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
- **Tipografía:** Playfair Display (títulos y texto editorial) · Barlow (UI y etiquetas)
- **Layout:** CSS Grid (formulario y beneficios) y Flexbox (testimonios y footer)
- **Responsive:** breakpoints en `860px` y `600px`

## Autor

**Jonathan M. Ramírez**

- GitHub: https://github.com/jonnschenk
- LinkedIn: https://www.linkedin.com/in/jonathan-ram%C3%ADrez-2b0043246/
