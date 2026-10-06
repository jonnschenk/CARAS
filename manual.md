# Proyecto: CARAS — Landing page de suscripción al newsletter

## Contexto
Proyecto académico con un roadmap de **7 entregas incrementales**. Cada entrega
añade una capa técnica nueva sobre el mismo diseño visual, sin rediseñar desde
cero. 

## Identidad de marca (INMUTABLE — no modificar bajo ninguna circunstancia)
- Rojo oficial: `#ED1E1E`
- Blanco oficial: `#FFFFFF`
- Título / subtítulo: Playfair Display Bold
- Leyendas de fotos / nombres destacados: Playfair Display Regular Italic
- Texto de lectura: Playfair Display Regular
- Nombre de secciones: Barlow Bold
- Fechas: Barlow Light

Neutros funcionales ya definidos (no forman parte del manual de marca, pero se
usan de forma consistente para texto y fondo porque el manual no los define):
- Texto de lectura sobre fondo claro: `#141414`
- Texto secundario: `#4A4A48`
- Líneas divisorias: `#E4E1D8`
- Fondo de página: `#FAF9F6`

## Estilo de diseño
Editorial contemporáneo, minimalista, jerarquía tipográfica fuerte, uso
intencional del espacio negativo, foco en eventos/cultura. Evitar plantillas
genéricas: layouts asimétricos con intención, no simetría de "hero + 3 columnas"
por defecto.

## Roadmap técnico (enunciados reales del curso, uno por entrega)

### Entrega 1 — HTML + CSS (Flexbox/Grid), landing de suscripción
Estructura semántica (header/main/footer), logo + título + subtítulo de
newsletter, formulario de suscripción (nombre, correo, submit) maquetado con
Grid o Flexbox, sección destacada de beneficios, testimonios simulados,
footer con redes sociales y contacto. Responsive. Sin JS ni SASS.

### Entrega 2 — Refactorizar CSS con Sass
- Estructura de carpetas modular: `base/`, `components/`, `layouts/`, con
  parciales prefijados con `_` (ej. `_variables.scss`, `_mixins.scss`).
- Variables Sass para colores, tipografías y medidas (mapeadas 1:1 a la
  identidad de marca de este archivo).
- Mixins reutilizables (ej. botón estandarizado) y mixins de media queries
  para responsive.
- Nesting con `&` para BEM (pseudoclases, pseudoelementos, modificadores).
- Organización con `@import` en orden lógico: variables/mixins primero, luego
  estilos específicos.
- Funciones Sass personalizadas (ej. conversión px → rem).
- `@extend` para compartir estilos entre variantes (ej. botones por color).
- Comentarios y documentación exhaustiva en el código Sass.
- Validar que el Sass compile correctamente a CSS y se vea bien cross-browser.

### Entrega 3 — JavaScript: validación del formulario
- Crear `script.js` y enlazarlo en el HTML.
- El formulario ya debe tener un `id` único (ej. `id="subscriptionForm"`) y
  un contenedor de error (`<span>`/`<div>`) junto a cada campo.
- En JS: seleccionar formulario y campos, prevenir el envío por defecto
  (`preventDefault`), y validar:
  - Nombre no vacío → mensaje de error específico si falla.
  - Correo con formato válido vía regex → mensaje de error específico si falla.
  - Si todo es válido → mensaje de éxito de suscripción; si no, mensaje
    indicando que corrija los errores.
- CSS para mensajes de error (rojo, negrita, visualmente notorio) y de éxito
  (verde, texto más grande) — usar clases dedicadas.

### Entrega 4 — Refactorizar con React + TypeScript
- Estructura: `src/components`, `src/hooks`, `src/styles`.
- Componentes: `Header` (logo/título/subtítulo), `SubscriptionForm`
  (nombre, correo, submit), `FeaturedSection` (beneficios + imágenes),
  `Testimonials`, `Footer` (redes sociales + contacto).
- Estado del formulario con `useState`; funciones para manejar cambios de
  input y submit.
- TypeScript: interfaces/types para los datos de la app; props y state
  tipados en todos los componentes.
- Estilos con Styled Components, de forma modular por componente.

### Entrega 5 — Tests con Jest
- Carpeta `src/tests`, un archivo de test por componente
  (`Header.test.tsx`, `SubscriptionForm.test.tsx`, etc.).
- Tests de renderizado: Header muestra logo/título/subtítulo;
  SubscriptionForm muestra los campos, el botón y los contenedores de error.
- Tests de comportamiento: mensajes de error visibles con campos vacíos o
  inválidos; mensaje de éxito visible con datos válidos.
- Lógica de validación/manejo de datos extraída a funciones en archivos
  separados, testeadas de forma independiente.
- Verificar cobertura con `npm test -- --coverage`.

### Entrega 6 — Accesibilidad (WCAG)
- `lang` en `<html>`, y `lang` específico en elementos con texto en otro
  idioma.
- HTML semántico correcto y bien anidado (`header`, `nav`, `main`,
  `section`, `article`, `footer`).
- `alt` descriptivo en todas las imágenes.
- `<label for="...">` enlazado a cada campo del formulario.
- Contraste texto/fondo: mínimo 4.5:1 (texto normal) y 3:1 (texto grande) —
  validar con WebAIM Contrast Checker. Vigilar en especial el rojo de marca
  sobre blanco y el texto sobre el rojo de marca.
- `aria-role` / `aria-label` donde corresponda.

### Entrega 7 — SEO, conversión, performance y deploy (entrega final)
- Meta tags relevantes en `<head>`, `<title>` optimizado, jerarquía correcta
  de encabezados (`h1`, `h2`...).
- Enlaces internos/externos con `rel` apropiado (ej. `rel="noopener"`,
  `nofollow` donde aplique).
- Contenido más persuasivo y centrado en beneficios; revisar y proponer
  variantes de CTA (texto/color/posición) con lógica de A/B testing.
- Performance: minificar CSS/JS, optimizar imágenes (WebP, tamaños,
  compresión), lazy loading de imágenes donde corresponda.
- Medir con Google PageSpeed Insights y Lighthouse (Core Web Vitals: LCP,
  FID/INP, CLS) e iterar sobre las recomendaciones.
- Accesibilidad final revisada de punta a punta (retomar entrega 6).
- Deploy final en un servicio como Netlify.

## Estado actual
- Entregas 1, 2 y 3 completadas. Entrega activa: **4 de 7**.
- Alcance ya cubierto (entregas 1-3): landing de suscripción al newsletter —
  topbar + header con logo/nav/CTA, hero con título/subtítulo, formulario de
  suscripción (Grid), sección de beneficios (Grid), testimonios simulados
  (Flexbox), footer institucional (Flexbox). HTML semántico, responsive con
  media queries. CSS migrado a Sass: estructura modular `base/`, `layout/`,
  `components/`, `abstracts/` (`_variables.scss`, `_mixins.scss`), variables
  mapeadas a la identidad de marca, mixin `respond-to()` para media queries,
  nesting con `&`.
- Alcance de la entrega 3 completado: validación del formulario con
  `script.js` — prevenir submit por defecto, validar nombre no vacío y correo
  con regex, mensajes de error/éxito por clase dedicada, y enlace del script en
  el HTML.
- Alcance de la entrega 4 (próxima): migración a React + TypeScript con
  componentes, `useState` y tipado.
- Archivos base: `index.html`, `css/styles.css` (compilado desde `scss/`),
  `script.js`

## Reglas de trabajo 
- Trabajar únicamente sobre el alcance de la entrega activa (ver "Estado
  actual"). No adelantar Sass, React, TypeScript, tests, o JS de validación
  antes de que toque esa entrega, aunque el roadmap completo ya se conozca.
- Cada entrega debe partir del resultado de la anterior, no reescribir desde
  cero: la entrega 2 refactoriza el CSS existente a Sass (mismo resultado
  visual), la entrega 3 añade JS sobre el HTML/CSS ya existente, la entrega 4
  migra ese mismo HTML/CSS/JS a componentes React, etc.
- Al migrar de fase (ej. CSS plano → Sass, o HTML/CSS/JS → React), preservar
  exactamente los valores de la identidad de marca definidos arriba —
  convertirlos a variables Sass / constantes TS, no reinventarlos.
- Mantener HTML semántico y accesible desde la entrega 1, no solo en la 6 —
  la entrega 6 es una auditoría/formalización, no el primer intento.
- Al actualizar "Estado actual" tras completar una entrega, avanzar el número
  y actualizar el resumen de alcance en este archivo.