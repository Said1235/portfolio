# Portafolio de Said

Sitio estático en HTML, CSS y JavaScript. No necesita Node.js, base de datos, framework ni servicios externos para funcionar. Está preparado para publicarse en GitHub Pages mediante GitHub Actions.

## Vista general

- Inicio editorial con presentación y navegación responsive.
- Proyectos conectados a repositorios reales de GitHub.
- Sección de laboratorio para IA, sistemas verificables y diseño de producto.
- Bitácora preparada para artículos editables desde `content.js`.
- Página dinámica `article.html?slug=...` para leer cada publicación.
- Flujo de despliegue automático a GitHub Pages.

## Publicar en GitHub Pages

1. Sube el contenido completo de este repositorio a la rama `main`.
2. En GitHub, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **GitHub Actions** como Source si GitHub lo solicita.
4. Ve a **Actions** y comprueba que termine el flujo **Deploy portfolio to GitHub Pages**.
5. La URL es `https://said1235.github.io/portfolio/`.

## Cambiar textos y proyectos

Abre `content.js`. Allí puedes editar:

- `identity`: nombre visible, título principal, descripción y texto de presentación.
- `links`: GitHub y correo de contacto.
- `projects`: nombre, categoría, descripción, nota, enlace y estilo visual de cada proyecto.
- `articles`: lista de publicaciones del blog.

No es necesario modificar `app.js` para añadir tarjetas de proyectos o artículos.

## Añadir un artículo

En `content.js`, dentro de `articles`, añade un objeto con esta estructura:

```js
{
  slug: "mi-primera-nota",
  title: "Mi primera nota",
  date: "2026-11-14",
  category: "PROCESO",
  excerpt: "Una breve introducción a la idea.",
  readTime: "4 MIN",
  body: [
    { type: "paragraph", text: "Escribe aquí el primer párrafo." },
    { type: "heading", text: "Una idea importante" },
    { type: "paragraph", text: "Continúa desarrollando la idea." },
    { type: "quote", text: "Una frase que quieras destacar." },
    { type: "list", items: ["Primer punto", "Segundo punto"] }
  ]
}
```

El `slug` debe ser único. La publicación aparecerá en la bitácora y se abrirá en `article.html?slug=mi-primera-nota`.

## Probar localmente

Abre `index.html` en el navegador. Para probarlo con un servidor local de Python:

```bash
python -m http.server 8000
```

Después visita `http://localhost:8000`.

## Personalización

- Colores, tipografías, espaciado y responsive: `styles.css`.
- Textos, proyectos y artículos: `content.js`.
- Renderizado y navegación: `app.js` y `article.js`.
- Icono: `assets/favicon.svg`.

## Nota

Los proyectos iniciales enlazan a repositorios públicos bajo `Said1235`. Los textos de presentación están redactados como punto de partida y puedes personalizarlos.
