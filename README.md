# Portafolio de Said

Sitio estático personal en HTML, CSS y JavaScript. No requiere Node.js, base de datos, framework ni servicios externos.

## Contenido

- Inicio editorial y adaptable a móvil.
- Sección de proyectos enlazados a repositorios de GitHub.
- Laboratorio de IA, sistemas verificables y producto.
- Bitácora para artículos, con página de lectura individual.
- Contenido editable desde un único archivo: `content.js`.

## Publicar en GitHub Pages

Este repositorio usa la publicación integrada de GitHub Pages desde la rama `main`. No necesita GitHub Actions.

1. Abre **Settings → Pages** en este repositorio.
2. En **Build and deployment → Source**, selecciona **Deploy from a branch**.
3. En **Branch**, selecciona `main`.
4. En la carpeta, selecciona `/(root)`.
5. Pulsa **Save**.
6. Espera a que GitHub publique el sitio. La dirección de este repositorio es:

   **https://said1235.github.io/portfolio/**

Si la URL muestra 404, comprueba que Pages esté configurado exactamente con `main` y `/(root)`, que el repositorio siga siendo público y que exista el archivo `index.html` en la raíz. La publicación inicial puede tardar algunos minutos.

## Editar textos y proyectos

Abre `content.js`:

- `identity`: titular, descripción y presentación.
- `links`: enlaces de contacto.
- `projects`: tarjetas de proyectos, descripción y enlace.
- `articles`: entradas de la bitácora.

No necesitas modificar el diseño para actualizar el contenido.

## Publicar una entrada en la bitácora (desde GitHub, sin instalar nada)

El blog no tiene un panel de administración ni un botón de publicar dentro de la web. El contenido se publica editando `content.js` en GitHub:

1. Abre [`content.js`](https://github.com/Said1235/portfolio/blob/main/content.js).
2. Pulsa el icono del lápiz (**Edit this file**) arriba a la derecha.
3. Busca `articles: [` casi al final del archivo.
4. Pega un objeto de artículo justo después del corchete `[`. Si ya hay artículos, sepáralos con una coma.
5. Baja hasta **Commit changes**, escribe un mensaje como `Publicar artículo: mi primera nota` y confirma el commit en la rama `main`.
6. GitHub Pages actualiza la web. Después abre [el portafolio](https://said1235.github.io/portfolio/) y recarga la página.

Plantilla de una entrada:

```js
{
  slug: "mi-primera-nota",
  title: "Mi primera nota",
  date: "2026-11-14",
  category: "PROCESO",
  excerpt: "Resumen breve que aparecerá en la lista del blog.",
  readTime: "4 MIN",
  body: [
    { type: "paragraph", text: "Primer párrafo del artículo." },
    { type: "heading", text: "Un subtítulo" },
    { type: "paragraph", text: "Desarrolla aquí la idea." },
    { type: "quote", text: "Una frase destacada." },
    { type: "list", items: ["Primer punto", "Segundo punto"] }
  ]
}
```

Reglas importantes:
- `slug`: único, en minúsculas y con guiones. Se usa en la dirección del artículo.
- `date`: formato `AAAA-MM-DD`.
- `body`: admite bloques `paragraph`, `heading`, `quote` y `list`. Cada bloque de texto va entre comillas.
- No borres la coma entre dos artículos. El último artículo del arreglo no lleva coma obligatoria.

Cuando se publique, aparecerá automáticamente en la bitácora. Al abrirlo tendrá una dirección como `article.html?slug=mi-primera-nota`.

## Probar localmente

Con Python instalado, ejecuta desde la carpeta raíz:

```bash
python -m http.server 8000
```

Abre `http://localhost:8000`.

## Personalizar

- `styles.css`: colores, tipografía, espaciado y diseño responsive.
- `content.js`: textos, proyectos y artículos.
- `app.js`: renderizado de la portada.
- `article.js`: renderizado de artículos.
- `assets/favicon.svg`: icono del sitio.

Los proyectos iniciales enlazan a repositorios públicos bajo `Said1235`. Revisa sus descripciones y enlaces antes de compartir el portafolio como presentación definitiva.
