# CARAS — Newsletter Landing Page

Landing page de suscripción al newsletter de **CARAS**, con la agenda social, de moda y cultura de México. Proyecto académico de práctica, construido en entregas incrementales donde cada fase parte del resultado de la anterior sin rediseñar desde cero.

🔗 Demo: [https://jonnschenk.github.io/CARAS/](https://jonnschenk.github.io/CARAS/)

## Roadmap

- [x] **Estructura HTML semántica y CSS base responsive**
  Header/main/footer, logo y presentación del newsletter, formulario de suscripción (nombre, correo), sección de beneficios y testimonios simulados, maquetados con Grid/Flexbox. Sin JS ni Sass.
- [x] **Refactor de CSS a Sass**
  Arquitectura modular por partials (`base/`, `layout/`, `components/`, `abstracts/`), variables y mixins mapeados 1:1 a la identidad de marca, mixin `respond-to()` para media queries, nesting con `&`.
- [ ] **Validación del formulario con JavaScript**
  `script.js` vanilla: prevenir el submit por defecto, validar nombre no vacío y correo con regex, mensajes de error/éxito visibles con clases dedicadas.
- [ ] **Refactor a React + TypeScript**
  Componentes tipados (`Header`, `SubscriptionForm`, `FeaturedSection`, `Testimonials`, `Footer`), estado del formulario con `useState`, estilos modulares con Styled Components.
- [ ] **Tests con Jest**
  Tests de renderizado y de comportamiento por componente, lógica de validación extraída a funciones testeadas de forma independiente, cobertura verificada.
- [ ] **Accesibilidad (WCAG)**
  `lang` en HTML, semántica bien anidada, `alt` descriptivo, `label` enlazados a cada campo, contraste mínimo 4.5:1 / 3:1, `aria-role`/`aria-label` donde corresponda.
- [ ] **SEO, conversión, performance y deploy**
  Meta tags y jerarquía de encabezados, CTAs más persuasivos con lógica de A/B testing, optimización de imágenes y lazy loading, medición con Lighthouse/PageSpeed, deploy final en Netlify.


## Tecnologías utilizadas

- HTML5 semántico
- [Sass / SCSS](arquitectura por partials con `@use`/`@forward`)
- CSS3 — Grid y Flexbox
- [Google Fonts]: Playfair Display · Barlow

## Requisitos previos

- [Node.js] y npm (para compilar el SCSS), o el CLI de [Dart Sass] instalado globalmente
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
├── index.html          # Marcado de la página (topbar, header/nav, hero, formulario, beneficios, testimonios, footer)
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

- **Topbar** — fecha y enlaces a redes sociales.
- **Header** — logo, navegación principal (Estilo, Eventos, Cultura, Entrevistas, Sociales, Newsletter) y botón de suscripción; colapsa a menú hamburguesa en mobile (CSS puro, sin JS).
- **Hero** — título y subtítulo de presentación del newsletter.
- **Suscripción** — formulario (nombre y correo) con layout en grid.
- **Beneficios** — grid de 3 columnas con las razones para suscribirse.
- **Testimonios** — layout flexbox con citas de lectores.
- **Footer** — redes sociales y datos de contacto.

## Diseño

- **Paleta:** Rojo `#ED1E1E` · Blanco `#FFFFFF` · Negro `#141414` (texto)
- **Tipografía:** Playfair Display (títulos y texto editorial) · Barlow (UI y etiquetas)
- **Layout:** CSS Grid (formulario y beneficios) y Flexbox (topbar, header, testimonios y footer)
- **Responsive:** breakpoints en `860px` y `600px`

## Autor

Jonathan M. Ramírez

- Email: [jonathanrott.dev@gmail.com](mailto:jonathanrott.dev@gmail.com)
- GitHub: [github.com/jonnschenk](https://github.com/jonnschenk)
- LinkedIn: [linkedin.com/in/jonathan-ramírez](https://www.linkedin.com/in/jonathan-ramírez-2b0043246/)

---

© 2026 Jonathan Ramírez.
