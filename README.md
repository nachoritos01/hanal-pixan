# Hanal Pixán - La Ceiba y el Pib Familiar

Una aplicación web Angular 20 moderna que documenta las tradiciones del **Hanal Pixán** (Día de los Muertos) en Yucatán, México. Explora el ritual simbólico desde la copa de la Ceiba Sagrada hasta las profundidades de Xibalbá, compartiendo la rica tradición del pib familiar.

## Características Principales

- **Experiencia Inmersiva**: Animaciones parallax y sistema de partículas canvas
- **Responsive Design**: Optimizado para todos los dispositivos
- **Angular 20 Moderno**: Standalone components, signals y lazy loading
- **Calculadora de Recetas**: Sistema interactivo para el pib familiar
- **Memorial Interactivo**: Sección dedicada a Xibalbá con elementos rituales
- **Accesibilidad**: Respeta `prefers-reduced-motion` y estándares WCAG

## Tecnologías Utilizadas

- **Framework**: Angular 20 con standalone components
- **Estado Reactivo**: Angular Signals (`signal`, `computed`, `effect`)
- **Estilos**: Tailwind CSS v3.4.17 con design tokens culturales mayas
- **Sistema de Colores**: Variables CSS custom properties para escalabilidad
- **Iconografía**: Lucide Icons con carga desde CDN y fallback automático
- **Navegación**: RouterLink y RouterLinkActive para estados activos automáticos
- **Layout**: Sistema de layout centralizado con componente orquestador
- **Formularios**: Reactive Forms con validaciones y signals bidireccionales
- **Animaciones**: Canvas API + RequestAnimationFrame + Tailwind animations + AOS
- **Testing**: Jest + Angular Testing Library
- **TypeScript**: Configuración estricta para máxima type safety
- **PostCSS**: Autoprefixer + Tailwind CSS optimizado para Angular 20

## Inicio Rápido

### Prerrequisitos
- Node.js 18+ (LTS recomendado)
- npm 9+ o yarn 3+
- Angular CLI 20+

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/usuario/hanal-pixan.git
cd hanal-pixan

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# La aplicación estará disponible en http://localhost:4200
```

### Scripts Disponibles

```bash
# Desarrollo
npm start                 # Servidor de desarrollo con hot reload
npm run watch            # Build en modo watch

# Producción
npm run build            # Build optimizado para producción
npm run build:analyze    # Build con análisis de bundle

# Calidad de Código
npm test                 # Ejecutar tests con Jest
npm run lint             # Linting con ESLint + Angular ESLint
npm run e2e              # Tests end-to-end (cuando estén configurados)

# Utilidades
npm run serve            # Servir build de producción localmente
```

## Arquitectura del Proyecto

```
src/
├── app/
│   ├── app.component.ts|html              # Componente raíz standalone
│   ├── app.routes.ts                      # Configuración de rutas lazy con layout
│   ├── features/                          # Componentes de páginas (lazy loaded)
│   │   ├── home/                          # Página principal cultural
│   │   ├── pib/                           # Calculadora de recetas interactiva
│   │   ├── xibalba/                       # Memorial interactivo
│   │   ├── cultural-elements/             # Tradiciones mayas
│   │   ├── gallery/                       # Galería familiar con masonry
│   │   ├── testimonials/                  # Testimonios con audio player
│   │   └── social-sharing/                # Sistema de compartir cultural
│   └── shared/                            # Componentes reutilizables
│       ├── layouts/
│       │   └── main-layout/               # Layout orquestador central
│       └── components/
│           ├── navbar/                    # Navegación con routerLinkActive
│           ├── footer/                    # Footer expandido con redes sociales
│           ├── card/                      # Sistema de variantes UI avanzado
│           ├── parallax-background/       # Sistema parallax multicapa
│           └── petals-animation/          # Animación de partículas canvas
├── assets/
│   ├── icons/                             # Iconos Lucide personalizados
│   └── images/                            # Recursos visuales culturales
├── styles.scss                           # Design tokens y variables CSS
├── index.html                             # CDN scripts (Lucide, Tailwind)
└── main.ts                               # Bootstrap de la aplicación
```

### Patrones de Arquitectura Implementados

- **Standalone Components**: Eliminación completa de NgModules
- **Signal-based State**: Estado reactivo con `signal()`, `computed()`, `effect()`
- **Modern DI**: Uso de `inject()` en lugar de constructor injection
- **Lazy Loading**: Carga bajo demanda con `loadComponent()`
- **OnPush Strategy**: Optimización de change detection
- **External Templates**: Separación HTML/TypeScript
- **Reactive Forms**: FormBuilder con validaciones robustas

## Componentes Principales

### Arquitectura con Main Layout
- **MainLayoutComponent**: Componente orquestador central con navbar, footer, petals animation y router-outlet
- **Scroll to Top**: Botón flotante con signals para visibilidad automática basada en scroll
- **Background Management**: Sistema de capas parallax con efectos optimizados

### Feature Components

#### HomeComponent
- **Estado reactivo** con signals para galleries y ofertas culturales
- **Integración AOS** para animaciones en scroll suave
- **Descarga simulada** de recetas PDF tradicionales

#### PibComponent  
- **Calculadora interactiva** de porciones con reactive forms
- **Computed ingredients** que se ajustan automáticamente por multiplicador
- **Effects** para sincronización bidireccional form ↔ signals
- **Pasos de receta** detallados con tips tradicionales auténticos

#### XibalbaComponent
- **Memorial gallery** interactiva con estado complejo
- **Sistema de rituales** con elementos activables dinámicos
- **Animaciones del cenote** con controles reactivos
- **Gestión de contenido** dinámico para experiencia inmersiva

#### CulturalElementsComponent
- **Tradiciones mayas** organizadas en cards interactivas
- **Elementos culturales** con iconos Lucide y animaciones AOS
- **Contenido educativo** con quotes y descripciones auténticas

#### GalleryComponent
- **Masonry layout** con CSS Grid responsivo
- **Galería de fotos** familiares con lazy loading
- **Aspect ratios** dinámicos para diseño optimal

#### TestimonialsComponent
- **Audio testimonials** con sistema de reproducción interactivo
- **Player controls** con estados reactivos (play/pause)
- **Visualización de ondas** de audio con animaciones CSS

#### SocialSharingComponent
- **Sistema de compartir** en múltiples plataformas sociales
- **Tracking de compartidas** con estadísticas familiares
- **Call-to-action** cultural para preservación de tradiciones

### Shared Components & Layout
- **CardComponent**: Sistema de variantes avanzado (`default`, `accent`, `cenote`, `glass`)
- **NavbarComponent**: Navegación con `routerLinkActive` automático y estilos dinámicos
- **FooterComponent**: 
  - Footer expandido con redes sociales (Facebook, Instagram, Twitter, YouTube, TikTok)
  - Enlaces externos a recursos culturales (INAH, Secretaría de Cultura, etc.)
  - Navegación completa con `routerLinkActive` para estado activo
  - Design responsivo en grid 4 columnas
- **ParallaxBackgroundComponent**: Sistema de capas optimizado con múltiples elementos
- **PetalsAnimationComponent**: Sistema de partículas canvas con RequestAnimationFrame

## 🎨 Sistema de Diseño y Colores

### Tailwind CSS Personalizado
El proyecto utiliza un sistema de design tokens culturales mayas:

```bash
# Archivos de configuración
├── tailwind.config.js        # Configuración personalizada con colores mayas
├── postcss.config.js         # PostCSS con Tailwind y Autoprefixer
└── src/styles.scss           # Variables CSS y clases utilitarias
```

### Paleta de Colores Cultural
- **Maya Gold** (`--color-maya-gold`): #FFD700 - Dorado tradicional
- **Ceiba Green** (`--color-ceiba-green`): #2E7D32 - Verde sagrado del árbol
- **Xibalba Purple** (`--color-xibalba-purple`): #4A148C - Místico del inframundo
- **Cenote Blue** (`--color-cenote-blue`): #0277BD - Azul cristalino de cenotes

### Uso en Componentes
```html
<!-- Clases Tailwind personalizadas -->
<div class="bg-primary text-maya-gold shadow-cultural">
  <h2 class="text-gradient-maya">Título Cultural</h2>
</div>

<!-- Variables CSS directas -->
<div style="background: var(--color-ceiba-green)">
  Elemento con color directo
</div>
```

### Animaciones Culturales
- `animate-float-petal` - Pétalos de cempasúchil flotantes
- `animate-dance-fire` - Movimiento de velas rituales  
- `animate-glow-candle` - Resplandor de luz sagrada
- `animate-ripple-cenote` - Ondas de agua de cenote

### Configuración Postcss
```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## ⚠️ Precauciones y Buenas Prácticas

### Versiones Críticas
- **Tailwind CSS**: v3.4.17 (NO usar v4+ - incompatible)
- **PostCSS**: v8.5.6+ requerido para Angular 20
- **Sass**: Usar `@use` en lugar de `@import` (deprecado)

### Problemas Comunes
```bash
# Error: "Cannot find module 'postcss'"
npm install postcss autoprefixer --save-dev

# Error: Tailwind v4 incompatibility
npm uninstall tailwindcss
npm install tailwindcss@^3.4.17 --save-dev
```

### Mejores Prácticas de Uso

1. **Variables CSS First**: Usar custom properties para temas
2. **Clases Utilitarias**: Preferir Tailwind sobre CSS custom
3. **Responsive Design**: Mobile-first con breakpoints Tailwind
4. **Performance**: Purge CSS automático en producción
5. **Accesibilidad**: Respeta `prefers-reduced-motion`

## Documentación Técnica

### Modernización Angular 20
- **[Guía de Modernización](README.modernization.md)** - Explicación detallada de todos los cambios implementados
- **[Reporte de Actualización](upgrade-report.md)** - Métricas, diagramas Mermaid y análisis de impacto

### Arquitectura y Patrones
- **[CLAUDE.md](CLAUDE.md)** - Guía completa para desarrollo y mantenimiento del proyecto

### Análisis y Métricas
El proyecto incluye documentación completa sobre:
- Componentes modernizados con estimación de esfuerzo
- Anti-patterns corregidos y soluciones implementadas  
- Diagramas de arquitectura y flujos de datos
- Scripts de automatización y herramientas de desarrollo
- Métricas de performance y calidad de código

## Contenido Cultural

### Historia del Hanal Pixán
El **Hanal Pixán** ("comida de las ánimas" en maya) es una celebración tradicional de Yucatán que honra a los ancestros del 31 de octubre al 2 de noviembre. Esta aplicación documenta:

- **Rituales y ofrendas** tradicionales familiares
- **Receta auténtica del pib** (mucbipollo) con técnicas ancestrales  
- **Simbolismo de la Ceiba** como árbol sagrado de conexión entre mundos
- **Xibalbá** como reino de transformación y encuentro espiritual

### Elementos Interactivos
- **Parallax Storytelling**: Descenso visual por la Ceiba Sagrada
- **Calculadora de Pib**: Ajuste automático de ingredientes por porciones
- **Memorial Digital**: Galería interactiva con elementos rituales
- **Animaciones Culturales**: Pétalos de cempasúchil flotantes

## Contribuciones

Este proyecto busca preservar y compartir la riqueza cultural del Hanal Pixán. Las contribuciones son bienvenidas:

### Tipos de Contribución
- **Contenido Cultural**: Tradiciones, recetas, historias familiares
- **Mejoras UX/UI**: Diseño responsive y accesibilidad  
- **Performance**: Optimizaciones y nuevas funcionalidades
- **Testing**: Cobertura de tests y casos edge
- **i18n**: Traducciones (español, inglés, maya)

### Proceso de Desarrollo
1. Fork del repositorio
2. Crear branch feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'feat: agregar nueva funcionalidad'`)
4. Push branch (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## Agradecimientos

- **Comunidades Mayas de Yucatán** por preservar estas tradiciones milenarias
- **Angular Team** por las fantásticas herramientas modernas
- **Unsplash Contributors** por las hermosas imágenes culturales
- **Familia y tradición** que inspiraron este proyecto

---

**Hecho con respeto y amor hacia la tradición maya yucateca**

> *"Mientras haya memoria, hay camino de regreso"*