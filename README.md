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
- **Formularios**: Reactive Forms con validaciones
- **Animaciones**: Canvas API + RequestAnimationFrame + Tailwind animations
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
│   ├── app.component.ts|html          # Componente raíz standalone
│   ├── app.routes.ts                  # Configuración de rutas lazy
│   ├── features/                      # Componentes de páginas
│   │   ├── home/                      # Página principal
│   │   ├── pib/                       # Receta y calculadora
│   │   └── xibalba/                   # Memorial interactivo
│   └── shared/                        # Componentes reutilizables
│       └── components/
│           ├── navbar/                # Navegación responsive
│           ├── footer/                # Footer con computed properties
│           ├── card/                  # Sistema de variantes UI
│           ├── parallax-background/   # Animación parallax optimizada
│           └── petals-animation/      # Sistema de partículas
├── styles.scss                       # Estilos globales
└── main.ts                          # Bootstrap de la aplicación
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

### HomeComponent
- **Estado reactivo** con signals para galleries y ofertas
- **Integración AOS** para animaciones en scroll
- **Descarga simulada** de recetas PDF

### PibComponent  
- **Calculadora interactiva** de porciones con reactive forms
- **Computed ingredients** que se ajustan automáticamente
- **Effects** para sincronización form ↔ signals
- **Pasos de receta** con tips tradicionales

### XibalbaComponent
- **Estado complejo** para memorial gallery interactiva
- **Sistema de rituales** con elementos activables
- **Animaciones del cenote** con controles reactivos
- **Gestión de contenido** dinámico

### Shared Components
- **CardComponent**: Sistema de variantes (`default`, `accent`, `cenote`, `glass`)
- **NavbarComponent**: Navegación con estado de sección activa
- **FooterComponent**: Footer con copyright dinámico
- **ParallaxBackgroundComponent**: Sistema de capas optimizado
- **PetalsAnimationComponent**: Animación de partículas canvas

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