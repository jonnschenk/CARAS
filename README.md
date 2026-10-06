# CARAS — Newsletter Landing Page

Landing page de suscripción al newsletter de **CARAS**, con la agenda social, de moda y cultura de México. Proyecto académico de práctica, construido en entregas incrementales donde cada fase parte del resultado de la anterior sin rediseñar desde cero.

🔗 Demo: [https://jonnschenk.github.io/CARAS/](https://jonnschenk.github.io/CARAS/)

## Roadmap

- [x] **Estructura HTML semántica y CSS base responsive**
  Header/main/footer, logo y presentación del newsletter, formulario de suscripción (nombre, correo), sección de beneficios y testimonios simulados, maquetados con Grid/Flexbox. Sin JS ni Sass.
- [x] **Refactor de CSS a Sass**
  Arquitectura modular por partials (`base/`, `layout/`, `components/`, `abstracts/`), variables y mixins mapeados 1:1 a la identidad de marca, mixin `respond-to()` para media queries, clases con metodología BEM y nesting con `&`.
- [x] **Validación del formulario con JavaScript**
  `script.js` vanilla: prevenir el submit por defecto, validar nombre no vacío y correo con regex, mensajes de error/éxito visibles con modificadores BEM (`campo--error`, `suscripcion__status--error`, `suscripcion__status--success`).
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
- Sass / SCSS (arquitectura por partials con `@use`/`@forward`)
- CSS3 — Grid y Flexbox
- Metodología BEM para el nombrado de clases
- JavaScript vanilla (validación del formulario)
- Google Fonts: Playfair Display · Barlow

## Requisitos previos

- Node.js y npm (para compilar el SCSS), o el CLI de Dart Sass instalado globalmente
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
npm run sass:build   # compila scss/main.scss → css/styles.css una vez
npm run sass:watch   # recompila automáticamente al guardar cambios
```

Luego abre `index.html` directamente en tu navegador.

**Importante:** edita solo los archivos dentro de `scss/`; `css/styles.css` se regenera con los comandos de arriba y no debe modificarse a mano.

## Estructura

```
CARAS/
├── index.html          # Marcado de la página (topbar, header/nav, hero, formulario, beneficios, testimonios, footer)
├── script.js           # Validación del formulario de suscripción
├── css/
│   └── styles.css      # CSS compilado a partir de scss/ — no editar a mano
├── scss/
│   ├── main.scss              # Punto de entrada: importa partials y define custom properties
│   ├── abstracts/
│   │   ├── _variables.scss    # Paleta, tipografía y breakpoints
│   │   ├── _functions.scss    # Función px-to-rem() para tamaños de fuente
│   │   ├── _mixins.scss       # Mixin respond-to() (media queries por mapa de breakpoints) y btn-base()
│   │   ├── _placeholders.scss # %btn-rojo — variante de color compartida vía @extend
│   │   └── _index.scss        # Reexporta variables + funciones + mixins + placeholders
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
- **Suscripción** — formulario (nombre y correo) con layout en grid y validación en JavaScript.
- **Beneficios** — grid de 3 columnas con las razones para suscribirse.
- **Testimonios** — layout flexbox con citas de lectores.
- **Footer** — redes sociales y datos de contacto.

## Convención de clases (BEM)

Cada sección es un bloque; sus partes son elementos (`bloque__elemento`) y sus variantes o estados son modificadores (`bloque__elemento--modificador`). En SCSS se anidan con `&__` y `&--`.

| Bloque | Elementos principales |
|---|---|
| `topbar` | `__fecha`, `__redes`, `__link` |
| `header` | `__logo`, `__actions`, `__btn`, `__toggle`, `__toggle-input`, `__toggle-linea` |
| `nav` | `__list`, `__item`, `__link`, `__link--activo` |
| `hero` | `__titulo`, `__subtitulo` |
| `suscripcion` | `__texto`, `__eyebrow`, `__titulo`, `__descripcion`, `__form`, `__btn`, `__status` |
| `campo` | `__label`, `__input`, `__error`, `campo--error` |
| `beneficios` / `beneficio` | `__titulo`, `__grid` / `__img`, `__titulo`, `__texto` |
| `testimonios` / `testimonio` | `__titulo`, `__grid` / `__avatar`, `__cita`, `__autor` |
| `footer` | `__contenido`, `__logo`, `__redes`, `__contacto`, `__link`, `__legal` |

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
