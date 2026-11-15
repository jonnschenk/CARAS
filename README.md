# CARAS — Newsletter Landing Page

Landing page de suscripción al newsletter de **CARAS**, con la agenda social, de moda y cultura de México. Proyecto académico de práctica, construido en entregas incrementales donde cada fase parte del resultado de la anterior sin rediseñar desde cero.

🔗 Demo: [https://jonnschenk.github.io/CARAS/](https://jonnschenk.github.io/CARAS/)

## Roadmap

- [x] **Estructura HTML semántica y CSS base responsive**
  Header/main/footer, logo y presentación del newsletter, formulario de suscripción (nombre, correo), sección de beneficios y testimonios simulados, maquetados con Grid/Flexbox. Sin JS ni Sass.
- [x] **Refactor de CSS a Sass**
  Arquitectura modular por partials, variables y mixins mapeados 1:1 a la identidad de marca, mixin `respond-to()` para media queries, clases con metodología BEM y nesting con `&`.
- [x] **Validación del formulario con JavaScript**
  `script.js` vanilla: prevenir el submit por defecto, validar nombre no vacío y correo con regex, mensajes de error/éxito visibles.
- [x] **Refactor a React + TypeScript**
  Componentes tipados (`Header`, `SubscriptionForm`, `FeaturedSection`, `Testimonials`, `Footer`), estado del formulario con `useState` en un hook propio, estilos modulares con Styled Components y tema de marca tipado.
- [ ] **Tests con Jest**
  Tests de renderizado y de comportamiento por componente, lógica de validación testeada de forma independiente, cobertura verificada.
- [ ] **Accesibilidad (WCAG)**
  `lang` en HTML, semántica bien anidada, `alt` descriptivo, `label` enlazados a cada campo, contraste mínimo 4.5:1 / 3:1, atributos ARIA donde corresponda.
- [ ] **SEO, conversión, performance y deploy**
  Meta tags y jerarquía de encabezados, CTAs con lógica de A/B testing, optimización de imágenes y lazy loading, medición con Lighthouse/PageSpeed, deploy final en Netlify.

## Tecnologías utilizadas

- React 19 + TypeScript
- Vite (entorno de desarrollo y build)
- Styled Components (estilos modulares por componente y tema de marca)
- ESLint
- Google Fonts: Playfair Display · Barlow

> **Nota sobre Create React App:** el enunciado sugiere iniciar el proyecto con Create React App. Se usó **Vite** con la plantilla `react-ts` porque CRA está descontinuado y presenta conflictos con React 19. El resultado cumple los mismos requisitos: proyecto React con TypeScript y estructura `src/components`, `src/hooks` y `src/styles`.

## Requisitos previos

- Node.js 20 o superior y npm
- Un navegador web moderno

## Instalación

```bash
git clone https://github.com/jonnschenk/CARAS.git
cd CARAS
npm install
```

No requiere variables de entorno.

## Uso

```bash
npm run dev       # servidor de desarrollo en http://localhost:5173
npm run build     # revisa los tipos con TypeScript y genera la versión de producción en dist/
npm run preview   # sirve localmente la versión de producción
npm run lint      # revisa el código con ESLint
```

## Estructura

```
CARAS/
├── index.html                  # HTML base: idioma, meta tags, fuentes y <div id="root">
├── src/
│   ├── main.tsx                # Punto de entrada: ThemeProvider + GlobalStyles + App
│   ├── App.tsx                 # Arma la página con los componentes y les pasa los datos por props
│   ├── components/
│   │   ├── Header/             # Topbar, logo, navegación con menú hamburguesa y hero
│   │   ├── SubscriptionForm/   # Formulario de suscripción con inputs controlados
│   │   ├── FeaturedSection/    # Beneficios de suscribirse
│   │   ├── Testimonials/       # Testimonios de lectores
│   │   └── Footer/             # Redes sociales y contacto
│   ├── hooks/
│   │   └── useSubscriptionForm.ts  # Estado del formulario (useState), handleChange y handleSubmit
│   ├── utils/
│   │   └── validation.ts       # Funciones puras de validación de nombre y correo
│   ├── data/                   # Contenido tipado: beneficios, testimonios, navegación y redes
│   ├── types/
│   │   └── index.ts            # Interfaces y tipos de la aplicación
│   └── styles/
│       ├── theme.ts            # Colores, fuentes y breakpoints de la marca
│       ├── styled.d.ts         # Tipado del tema para Styled Components
│       ├── GlobalStyles.ts     # Reset y estilos base
│       └── mixins.ts           # Estilos reutilizables de botón
└── legacy/                     # Versión HTML + Sass + JS de las entregas 1 a 3, como referencia
```

Cada componente vive en su propia carpeta con dos archivos: `Componente.tsx` (estructura y lógica) y `Componente.styles.ts` (estilos con Styled Components).

## Arquitectura

- **Datos tipados:** el contenido (beneficios, testimonios, redes, navegación) vive en `src/data/` como listas tipadas con las interfaces de `src/types/`. Los componentes lo reciben por props, sin texto escrito dentro.
- **Estado del formulario:** el hook `useSubscriptionForm` maneja los valores, errores y mensaje de estado con tres `useState` tipados. El componente `SubscriptionForm` solo dibuja la interfaz.
- **Validación separada:** `src/utils/validation.ts` contiene funciones puras, independientes de React, listas para probarse en la entrega de tests.
- **Tema de marca:** los valores de la identidad visual viven en `src/styles/theme.ts` y se leen desde cualquier componente con `ThemeProvider`. Los modificadores de BEM se reemplazaron por props de estilo transitorias (`$error`, `$activo`, `$abierto`).

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