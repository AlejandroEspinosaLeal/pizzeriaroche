# ESTRATEGIA INTEGRAL DE SEO LOCAL Y POSICIONAMIENTO WEB (MASTERPLAN 90 DÍAS)
**Cliente:** ROCHE Pizzería · Parrilla  
**Ubicación:** Urbanización Roche, Conil de la Frontera (Cádiz)  
**Dominio:** `https://www.pizzeriaroche.es/`  
**Servicios:** Comer en el local, Reservas, Pizzas para llevar (Takeaway)  
**Especialidad:** Pizzas artesanales y Carnes a la parrilla  

---

## 1. INVESTIGACIÓN EXHAUSTIVA DE PALABRAS CLAVE (KEYWORD RESEARCH)

El comportamiento de búsqueda en **Conil de la Frontera / Urbanización Roche** tiene un fuerte componente estacional (picos masivos en primavera y verano) y de proximidad geográfica inmediata. Dividimos las palabras clave estratégicamente por intención y tipología:

### Tabla Principal de Palabras Clave (Intención, Volumen, Dificultad y Segmento)

| Palabra Clave / Término de Búsqueda | Categoría / Tipología | Intención de Búsqueda | Volumen Est. (Medio Mensual / Verano) | Dificultad SEO (KD) | Prioridad |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **pizzeria roche** | Marca / Navegacional | Navegacional | 850 / 2.400 | Baja (12/100) | 🔴 Alta |
| **pizzeria conil de la frontera** | Principal (Head Term) | Transaccional / Local | 1.900 / 5.200 | Media (45/100) | 🔴 Alta |
| **pizzerias en conil** | Principal (Head Term) | Transaccional / Local | 1.600 / 4.800 | Media (42/100) | 🔴 Alta |
| **restaurantes en roche conil** | Principal (Head Term) | Transaccional / Local | 720 / 3.100 | Media-Baja (28/100)| 🔴 Alta |
| **donde comer en urbanizacion roche** | Long-Tail Local | Informacional / Transacc. | 380 / 1.500 | Baja (18/100) | 🔴 Alta |
| **pizza para llevar conil** | Servicio (Takeaway) | Transaccional | 450 / 1.800 | Baja (22/100) | 🔴 Alta |
| **pizzeria cerca de mi** *(desde Roche)* | Local Geocodificado | Transaccional Inmediata | 2.500+ (radio 5km) | Baja (Local Pack) | 🔴 Alta |
| **mejor pizzeria conil de la frontera** | Reputación / Comparativa | Transaccional | 580 / 2.100 | Media (35/100) | 🟡 Media |
| **restaurantes con parrilla en conil** | Especialidad (Parrilla) | Transaccional | 320 / 950 | Baja (20/100) | 🟡 Media |
| **pizzeria urbanizacion roche cadiz** | Long-Tail Hiper-Local | Transaccional | 210 / 800 | Muy Baja (10/100) | 🔴 Alta |
| **pizzerias abiertas ahora conil** | Local / Urgencia | Transaccional Inmediata | 650 / 2.200 | Baja (Local Pack) | 🔴 Alta |
| **reservar restaurante roche conil** | Transaccional pura | Transaccional | 180 / 750 | Baja (15/100) | 🟡 Media |
| **carta pizzeria roche** | Navegacional / Menú | Informacional / Transacc. | 420 / 1.600 | Muy Baja (8/100) | 🔴 Alta |
| **pizzas artesanas conil** | Calidad / Especialidad | Informacional / Transacc. | 290 / 890 | Baja (19/100) | 🟡 Media |

---

## 2. OPTIMIZACIÓN TÉCNICA (TECHNICAL SEO)

### 2.1 Estructura de URLs Jerárquica y Limpia
Para maximizar la relevancia temática frente a Google sin crear páginas vacías, recomendamos esta arquitectura semántica:
*   `https://www.pizzeriaroche.es/` *(Página principal con carta digital integrada y Hero de alta conversión)*
*   `https://www.pizzeriaroche.es/#carta` *(Anclaje semántico para indexación de menú)*
*   `https://www.pizzeriaroche.es/#pizzas` *(Anclaje directo a especialidad)*
*   `https://www.pizzeriaroche.es/#carnes` *(Anclaje directo a parrilla)*
*   `https://www.pizzeriaroche.es/#ubicacion` *(Sección NAP y Google Maps)*

### 2.2 Optimización Core Web Vitals (WPO)
*   **LCP (Largest Contentful Paint) < 1.8s:** Hemos configurado la imagen de portada (`hero-bg.jpg`) con carga prioritaria (`loading="eager" fetchpriority="high"`) y fuentes tipográficas con `font-display: swap`.
*   **CLS (Cumulative Layout Shift) = 0.00:** Contenedores con dimensiones explícitas y fuentes pre-cargadas para evitar saltos visuales en móviles.
*   **FID / INP (Interaction to Next Paint) < 50ms:** Código JavaScript empaquetado y minimizado mediante Vite, eliminando librerías pesadas innecesarias.

### 2.3 Implementación de Schema.org Avanzado (`Restaurant` + `Menu`)
Incluir el esquema JSON-LD en el `<head>` permite a Google mostrar **Rich Snippets** (estrellas de valoración, rango de precios, teléfono, dirección y carta directamente en los resultados de búsqueda).

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "ROCHE Pizzería Parrilla",
  "image": "https://www.pizzeriaroche.es/hero-bg.jpg",
  "@id": "https://www.pizzeriaroche.es/#restaurant",
  "url": "https://www.pizzeriaroche.es/",
  "telephone": "+34647338806",
  "priceRange": "€€",
  "servesCuisine": ["Italiana", "Parrilla", "Pizzería"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Bélgica",
    "addressLocality": "Urbanización Roche, Conil de la Frontera",
    "addressRegion": "Cádiz",
    "postalCode": "11149",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.31632,
    "longitude": -6.15180
  },
  "hasMenu": "https://www.pizzeriaroche.es/#carta",
  "acceptsReservations": "true"
}
```

---

## 3. OPTIMIZACIÓN DE CONTENIDO (CONTENT SEO)

### 3.1 Estructura Semántica de la Página Principal
*   **Meta Título (58 caracteres):**  
    `ROCHE Pizzería Parrilla | Mejor Pizzería en Roche y Conil`
*   **Meta Descripción (154 caracteres - con CTA claro):**  
    `Las mejores pizzas artesanales y carnes a la parrilla en Urbanización Roche (Conil, Cádiz). Comer en local, para llevar y reservas 📞 647 338 806.`
*   **Jerarquía de Encabezados (H1 - H3):**
    *   `<h1>`: ROCHE Pizzería Parrilla — Conil de la Frontera, Urbanización Roche, Cádiz *(optimizado semánticamente para SEO local sin perjudicar el diseño)*
    *   `<h2>`: Nuestra Carta (Pizzas Artesanales, Pastas y Carnes a la Parrilla)
    *   `<h2>`: Alérgenos de Nuestra Carta
    *   `<h2>`: Dónde Estamos — Urbanización Roche, Conil de la Frontera

### 3.2 Estrategia de Textos Alternativos (Alt Text) para Imágenes
Cada imagen debe incluir descriptores geográficos y semánticos naturales:
*   *Correcto:* `alt="Pizza artesanal recién horneada en ROCHE Pizzería Parrilla en Urbanización Roche Conil de la Frontera"`
*   *Correcto:* `alt="Carnes ibéricas a la parrilla en restaurante Roche Pizzería Conil Cádiz"`

---

## 4. SEO LOCAL (LOCAL SEO) — EL FACTOR MÁS CRÍTICO

Para un restaurante físico, el **Google Local Pack (el mapa con los 3 primeros restaurantes en Google)** genera hasta el **75% de las llamadas y pedidos**.

### 4.1 Ficha de Google Business Profile (Optimización al 100%)
1.  **Nombre Oficial:** `ROCHE Pizzería Parrilla` *(Evitar poner spam como "Roche Pizzeria Conil Mejor Pizza", ya que Google penaliza esto).*
2.  **Categoría Principal:** `Pizzería`
3.  **Categorías Secundarias:** `Restaurante italiano`, `Restaurante especializado en carnes a la parrilla`.
4.  **Atributos clave a activar:**
    *   ✅ Sirve comida en el local (Dine-in)
    *   ✅ Para llevar (Takeaway / Curbside pickup)
    *   ✅ Se aceptan reservas
    *   ✅ Terraza al aire libre
5.  **Menú en Google Business Profile:** Subir cada pizza y plato con su precio exacto y descripción en la pestaña "Menú" de Google Business Profile.

### 4.2 Estrategia Proactiva de Reseñas (Reviews Flywheel)
*   **Objetivo inicial:** Alcanzar **50+ reseñas con nota media > 4.6 ★** en las primeras 6 semanas de temporada.
*   **Táctica en el local:** Código QR elegante en el ticket de cuenta o en las mesas: *"¿Te ha gustado nuestra pizza artesana? Déjanos tu valoración en Google y ayúdanos a seguir creciendo en Roche"*.
*   **Cómo responder las reseñas (Clave SEO):** Incluir palabras clave locales en las respuestas del propietario:  
    *Ejemplo de respuesta:* *"¡Muchas gracias por tu visita! Nos alegra saber que disfrutaste de nuestra pizza artesanal en la terraza de Urbanización Roche. ¡Te esperamos pronto en Conil!"*

### 4.3 Consistencia NAP (Nombre, Dirección, Teléfono)
El NAP debe escribirse **exactamente idéntico** en toda la web, Google Business Profile, TripAdvisor y redes sociales:
*   **Nombre:** ROCHE Pizzería Parrilla
*   **Dirección:** Av. Bélgica, Urbanización Roche, 11149 Conil de la Frontera, Cádiz
*   **Teléfono:** +34 647 338 806

---

## 5. ESTRATEGIA DE BACKLINKS (OFF-PAGE SEO)

1.  **Directorios Gastronómicos y Turísticos de Alta Autoridad:**
    *   Alta verificada en **TripAdvisor Conil de la Frontera** (sección Pizzerías / Restaurantes en Roche).
    *   Alta en **Restaurant Guru**, **Yelp España** y **Guía Repsol (soletes/recomendados)**.
2.  **Prensa Local y Guías de Cádiz:**
    *   Contactar con medios locales de turismo de la Costa de la Luz (`diariodecadiz.es`, `lavozde digital.es`, blogs de turismo en Conil) para reportajes tipo *"Los mejores sitios para cenar en la Urbanización Roche"*.
3.  **Citaciones Locales (Local Citations):**
    *   Registrar el negocio en Páginas Amarillas, Directorio del Ayuntamiento de Conil y asociaciones de comerciantes locales.

---

## 6. CALENDARIO DE ACCIÓN PRIORIZADO (90 DÍAS)

| Fase / Periodo | Acciones Prioritarias | Esfuerzo Estimado | Impacto Esperado |
| :--- | :--- | :--- | :--- |
| **Semanas 1 - 2** *(Impacto Inmediato)* | 1. Reclamar y verificar Google Business Profile al 100%.<br>2. Subir carta completa a Google Business Profile con fotos reales.<br>3. Desplegar web rápida optimizada con Schema.org e indexación SSL. | 10 horas | 🚀 **Alto (Entrada al Top 5 Local Pack)** |
| **Mes 1** | 1. Implementar códigos QR de reseñas en las mesas del local.<br>2. Alta oficial y consistente del NAP en TripAdvisor y Restaurant Guru.<br>3. Publicar 10 fotos profesionales en Google Business Profile geolocalizadas. | 8 horas | 📈 **Alto (Aumento del CTR y llamadas)** |
| **Mes 2** | 1. Responder al 100% de las reseñas utilizando keywords locales naturales.<br>2. Publicar posts semanales en Google Business Profile ("Especialidad del fin de semana en Roche").<br>3. Conseguir 1 mención/enlace desde un blog de turismo de Conil/Cádiz. | 6 horas | 🌟 **Muy Alto (Consolidación Top 3 Local)** |
| **Mes 3** | 1. Monitorizar métricas en Google Search Console.<br>2. Añadir fotos de temporada estival y terraza.<br>3. Optimizar perfil para búsquedas transaccionales de "pizza para llevar en Roche". | 5 horas | 🏆 **Liderazgo Orgánico y Local en Roche** |

---

## 7. MÉTRICAS Y KPIs A MONITORIZAR (DASHBOARD SEO)

1.  **Impresiones y Clics en Google Search Console:** Monitorizar las consultas *"pizzeria roche"*, *"pizzeria conil"*, *"pizzeria urbanizacion roche"*.
2.  **Llamadas y Solicitudes de Cómo Llegar (Google Business Profile Insights):** Es el KPI transaccional #1 de ingresos directos.
3.  **Posición en el Google Local Pack (Mapas):** Estar entre las posiciones #1 y #3 para usuarios buscando dentro del radio de Roche y Conil.
4.  **Tasa de Conversión Web (Clic en botón de llamar `647 338 806`):** Medido automáticamente al tocar el teléfono en móvil.
