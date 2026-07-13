# ROCHE Pizzeria Parrilla

Carta web digital del restaurante ROCHE Pizzeria Parrilla. Construida con React, TypeScript, Tailwind CSS y Vite.

## Características

- Diseño elegante con paleta de colores cálidos inspirada en la carta física
- Menú completo: Entrantes, Ensaladas, Pizzas, Pasta, Lasañas, Carnes, Parrilladas, Hamburguesas y Postres
- Botón de llamada flotante con número de teléfono 647 338 806
- Animaciones suaves con GSAP ScrollTrigger
- Totalmente responsive (móvil, tablet, desktop)
- Optimizado para SEO y rendimiento

## Stack Tecnológico

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 3.4
- GSAP (animaciones)
- Lenis (smooth scroll)
- Lucide React (iconos)

## Cómo subir a GitHub

1. Crea un nuevo repositorio en GitHub (sin README, .gitignore ni licencia)
2. Ejecuta estos comandos en la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/NOMBRE_REPO.git
git push -u origin main
```

## Cómo desplegar en Vercel

### Opción 1: Importar desde GitHub (recomendada)

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Click en "Add New Project"
3. Importa tu repositorio de GitHub
4. En "Framework Preset" selecciona **Vite**
5. En "Output Directory" escribe: `dist`
6. Click en "Deploy"

### Opción 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

Sigue las instrucciones y selecciona:
- Framework: **Vite**
- Output directory: **dist**

### Opción 3: Arrastrar y soltar (más rápida)

1. Ejecuta `npm run build` para generar la carpeta `dist`
2. Ve a [vercel.com/new](https://vercel.com/new)
3. Selecciona la opción "Upload" y arrastra la carpeta `dist`
4. Click en "Deploy"

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Compilar para producción

```bash
npm run build
```

La carpeta `dist/` contiene los archivos estáticos listos para desplegar.

## Contacto

- Teléfono: [647 338 806](tel:+34647338806)
