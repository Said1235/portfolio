# Portafolio de Said

Sitio estático personal en HTML, CSS y JavaScript. No requiere Node.js, base de datos, framework ni servidor propio.

## Contenido

- Inicio editorial y adaptable a móvil.
- Sección de proyectos enlazados a repositorios de GitHub.
- Laboratorio de IA, sistemas verificables y producto.
- Bitácora con páginas de lectura individuales.
- CMS conectado a GitHub para gestionar artículos desde un editor visual.

## Publicar en GitHub Pages

Este repositorio usa la publicación integrada de GitHub Pages desde la rama `main`.

1. Abre **Settings → Pages** en este repositorio.
2. En **Build and deployment → Source**, selecciona **Deploy from a branch**.
3. En **Branch**, selecciona `main`.
4. En la carpeta, selecciona `/(root)`.
5. Pulsa **Save**.

La dirección pública es **https://said1235.github.io/portfolio/**.

## Publicar artículos con Pages CMS

El blog utiliza [Pages CMS](https://pagescms.org/), un editor visual que trabaja directamente con los archivos de este repositorio. No tienes que editar JavaScript ni instalar herramientas.

### Primera conexión

1. Abre [Pages CMS](https://pagescms.org/).
2. Entra con tu cuenta de GitHub.
3. Autoriza Pages CMS para acceder a tus repositorios.
4. Selecciona **Said1235/portfolio**.
5. Abre la colección **Artículos**.

La configuración del editor está en `.pages.yml`. El CMS crea cada artículo como un archivo Markdown dentro de `content/posts/`.

### Crear o editar una publicación

1. Dentro de **Artículos**, pulsa para crear una entrada nueva o abre una existente.
2. Completa el título, slug, fecha, categoría, resumen y tiempo de lectura.
3. Escribe el contenido en el editor visual.
4. Activa **Publicado** para que la entrada aparezca en la web. Las entradas sin publicar permanecen ocultas.
5. Guarda los cambios. Pages CMS registra el cambio en GitHub y GitHub Pages actualiza el sitio.

El slug determina la dirección pública. Usa minúsculas, números y guiones, por ejemplo `mi-primera-nota`. No repitas un slug existente.

### Cómo se conecta el blog

- `.pages.yml`: define los campos y la colección que muestra Pages CMS.
- `content/posts/`: almacena los artículos en Markdown.
- `posts.js`: obtiene las publicaciones públicas desde el repositorio.
- `app.js`: presenta los artículos en la portada.
- `article.js`: presenta cada artículo en su página individual.

Los proyectos y textos de presentación siguen en `content.js`; el CMS no modifica esos datos.

## Probar localmente

Con Python instalado, ejecuta desde la carpeta raíz:

```bash
python -m http.server 8000
```

Abre `http://localhost:8000`. La bitácora consulta el contenido público de GitHub, así que las publicaciones deben estar en el repositorio para aparecer.

## Personalizar

- `styles.css`: colores, tipografía, espaciado y diseño responsive.
- `content.js`: textos de presentación y proyectos.
- `.pages.yml`: campos y opciones del CMS.
- `posts.js`: carga y formato de publicaciones.
- `app.js`: renderizado de la portada.
- `article.js`: renderizado de artículos.
- `assets/favicon.svg`: icono del sitio.

Los proyectos iniciales enlazan a repositorios públicos bajo `Said1235`. Revisa sus descripciones y enlaces antes de compartir el portafolio como presentación definitiva.
