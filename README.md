# Portafolio — David Paz

## Desarrollo local

1. Instalar dependencias (una sola vez):
   ```
   npm install
   ```

2. Modo desarrollo (recompila el CSS automáticamente al guardar cambios):
   ```
   npm run dev
   ```

3. Abre `public/index.html` en el navegador. Recomendado: usa la extensión
   "Live Server" de VS Code sobre la carpeta `public/` para que recargue
   solo al guardar.

## Build de producción

```
npm run build
```

Genera `public/dist/output.css` minificado. Netlify corre este comando
automáticamente en cada deploy — normalmente no necesitas ejecutarlo tú
mismo, salvo para probar localmente cómo se ve la versión final.

## Estructura del proyecto

- `public/` — todo lo que se publica en el sitio real (páginas HTML +
  CSS compilado). **Toda página nueva que agregues va aquí dentro.**
- `src/input.css` — archivo fuente de Tailwind (no se despliega).
- `netlify.toml` — configuración de build y despliegue para Netlify.
- `tailwind.config.js` — le dice a Tailwind dónde buscar clases usadas
  (`public/**/*.html`).

## Despliegue

El sitio está conectado a Netlify vía GitHub. Cada `git push` a la rama
principal dispara un build (`npm run build`) y un deploy automático —
no hace falta subir el CSS compilado a mano.
