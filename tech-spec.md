# Tech Spec — ROCHE Pizzeria Parrilla

## Dependencias

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| gsap | ^3.12 | Animaciones ScrollTrigger + secuencias de entrada |
| lenis | ^1.1 | Smooth scroll |
| lucide-react | ^0.400 | Iconos (phone, pizza, beef, flame, cake, chevron-down) |

> No se necesitan más dependencias. Tailwind CSS ya está incluido en el proyecto base.

---

## Inventario de Componentes

### Layout (compartidos)

| Componente | Fuente | Notas |
|------------|--------|-------|
| Navbar | Custom | Fija, backdrop-blur, sombra al scrollear |
| PhoneFAB | Custom | Botón flotante fijo con pulso CSS + tooltip |
| Footer | Custom | 3 columnas, info alérgenos, teléfono clickable |

### Secciones (página única)

| Componente | Fuente | Notas |
|------------|--------|-------|
| HeroSection | Custom | Full-viewport, imagen de fondo + overlay gradiente, CTA teléfono |
| EntrantesSection | Custom | 2-columnas: Entrantes + De la Huerta |
| PizzasSection | Custom | Card ancho completo, grid 2-col interno (30 items) |
| PastaSection | Custom | 2-columnas: Pasta + Lasañas |
| CarnesSection | Custom | Card ancho, grid 3 subsecciones (Ternera/Cerdo/Pollo) |
| ParrilladasSection | Custom | Card centrada |
| HamburguesasSection | Custom | Card ancho, lista con descripciones |
| PostresSection | Custom | Card centrada |
| PhoneCTASection | Custom | Banner full-width terracotta, CTA principal |

### Componentes Reutilizables

| Componente | Fuente | Uso |
|------------|--------|-----|
| MenuCard | Custom | Wrapper de card con animación ScrollTrigger (usado en todas las secciones de menú) |
| MenuItem | Custom | Fila de ítem: nombre + descripción opcional + precio |
| SectionHeader | Custom | Título centrado + divider decorativo terracotta |

---

## Plan de Animaciones

| Animación | Librería | Enfoque | Complejidad |
|-----------|----------|---------|-------------|
| Entrada hero (texto + botón) | GSAP timeline | Secuencia con stagger y back.out | Baja |
| Scroll indicator bounce | CSS keyframes | translateY infinito, solo CSS | Baja |
| ScrollTrigger secciones | GSAP ScrollTrigger | translateY(40px) → 0, opacity, stagger 0.1 | Media |
| Hover cards menú | CSS | translateY(-4px) + sombra, solo CSS | Baja |
| Pulse FAB | CSS keyframes | Ring radial scale+fade infinito | Baja |
| Tooltip FAB | CSS | Aparece arriba en hover con flecha | Baja |
| Navbar shadow scroll | GSAP ScrollTrigger | Activa sombra al pasar hero | Baja |

---

## Estado y Lógica

No se requiere estado global ni librería de estado. Solo:
- **Lenis**: Inicializado en App.tsx, disponible globalmente para smooth scroll en anchor links.
- **GSAP ScrollTrigger**: Registrado una vez en App.tsx, usado en cada sección vía useEffect local.
- **Mobile menu**: Estado local `useState(false)` en Navbar para toggle del menú móvil (hamburger).

---

## Otras Decisiones Clave

- **Imagen hero**: Se generará con `generate_image` y se guardará en `public/hero-bg.jpg`. No se usa placeholder ni texto.
- **Datos del menú**: Hardcodeados en cada componente. No hay API ni CMS.
- **Teléfono**: Todos los enlaces usan `tel:+34647338806` (formato E.164). El número visible se formatea como "647 338 806".
- **Responsive**: Breakpoint único en `768px` (md:). Layouts 2-col se apilan en móvil vía `grid-cols-1 md:grid-cols-2`.
- **Fuentes**: Playfair Display (Google Fonts) + Inter (ya disponible). Se cargan vía `<link>` en `index.html`.
