# CLAUDE.md

Este archivo proporciona orientación a Claude Code (claude.ai/code) al trabajar con código en este repositorio.

## Visión General del Proyecto
Esta es una aplicación web Angular 20 que documenta las tradiciones del "Hanal Pixán" (Día de los Muertos) en Yucatán, México. Es un sitio web cultural moderno e interactivo que presenta las tradiciones mayas, la preparación del "pib" (mucbipollo), y el viaje simbólico a través del sagrado árbol Ceiba hacia Xibalbá.

## Arquitectura
- **Aplicación Angular 20**: Componentes standalone modernos con signals
- **TypeScript Estricto**: Seguridad de tipos completa y características ECMAScript modernas
- **Componentes Standalone**: Sin NgModules, arquitectura centrada en componentes
- **Lazy Loading**: División de código basada en rutas con loadComponent()
- **Estado basado en Signals**: Gestión de estado reactiva con Angular Signals

## Tecnologías Clave
- **Angular 20**: Última versión con componentes standalone y signals
- **TypeScript 5.8.2**: Configuración estricta para máxima seguridad de tipos (versión exacta requerida)
- **Tailwind CSS v3.4.17**: Estilización utility-first con design tokens culturales mayas
- **PostCSS + Autoprefixer**: Procesamiento CSS optimizado para Angular 20
- **Canvas API**: Sistema de animación de pétalos personalizado con optimización de rendimiento
- **Reactive Forms**: FormBuilder con validadores e integración de effects
- **Jest**: Framework de testing configurado para componentes standalone de Angular

## Características Principales
1. **Arquitectura de Componentes Moderna**: Todos los componentes usan standalone: true
2. **Reactividad basada en Signals**: Gestión de estado con signal(), computed(), effect()
3. **Lazy Loading**: Las rutas cargan componentes bajo demanda
4. **Elementos Interactivos**: Calculadora de recetas, galería memorial, controles rituales
5. **Optimizado para Rendimiento**: Detección OnPush change detection, animaciones RequestAnimationFrame
6. **Diseño Responsivo**: Mobile-first con utilidades Tailwind
7. **Accesibilidad**: Respeta prefers-reduced-motion y pautas WCAG

## Comandos de Desarrollo
- **Desarrollo**: `npm start` - Ejecuta servidor dev en http://localhost:4200
- **Build**: `npm run build` - Build de producción con optimizaciones
- **Testing**: `npm test` - Ejecuta suite de tests Jest
- **Linting**: `npm run lint` - Reglas ESLint + Angular ESLint
- **Análisis Bundle**: `npm run build:analyze` - Analizador de bundle Webpack

## Estructura del Proyecto
```
src/app/
├── app.component.ts|html                      # Componente raíz standalone
├── app.routes.ts                              # Configuración de rutas lazy loading con layout
├── features/                                  # Componentes de características (páginas lazy loaded)
│   ├── home/home.component.ts|html            # Página principal con contenido cultural
│   ├── pib/pib.component.ts|html              # Calculadora de recetas con formularios reactivos
│   ├── xibalba/xibalba.component.ts|html      # Componente memorial interactivo
│   ├── cultural-elements/cultural-elements.component.ts|html  # Tradiciones mayas educativas
│   ├── gallery/gallery.component.ts|html      # Galería familiar con masonry CSS Grid
│   ├── testimonials/testimonials.component.ts|html  # Testimonios con audio player
│   └── social-sharing/social-sharing.component.ts|html  # Sistema de compartir cultural
└── shared/                                    # Componentes y layouts reutilizables
    ├── layouts/
    │   └── main-layout/main-layout.component.ts|html  # Layout orquestador con navbar, footer, scroll-to-top
    └── components/                            # Componentes UI reutilizables
        ├── navbar/navbar.component.ts|html            # Navegación con routerLinkActive automático
        ├── footer/footer.component.ts|html            # Footer expandido con redes sociales y enlaces externos
        ├── card/card.component.ts|html                # Card genérica con variantes avanzadas
        ├── parallax-background/                       # Sistema parallax multicapa optimizado
        └── petals-animation/                          # Sistema de partículas canvas con RequestAnimationFrame
```

## Patrones Modernos de Angular Utilizados

### Componentes Standalone
Todos los componentes usan `standalone: true` e importan sus dependencias directamente:
```typescript
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

### Estado basado en Signals
Reemplazar Observables con signals para mejor rendimiento:
```typescript
private data = signal<DataType[]>([]);
readonly filteredData = computed(() => this.data().filter(item => item.active));
readonly isLoading = signal(false);
```

### Inyección de Dependencias Moderna
Usar la función `inject()` en lugar de inyección por constructor:
```typescript
private fb = inject(FormBuilder);
private router = inject(Router);
private platformId = inject(PLATFORM_ID);
```

### Rutas con Lazy Loading y Layout Centralizado
Las rutas usan loadComponent() con layout wrapper para división de código optimizada:
```typescript
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/layouts/main-layout.component').then(c => c.MainLayoutComponent),
    children: [
      { path: '', loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent) },
      { path: 'pib', loadComponent: () => import('./features/pib/pib.component').then(c => c.PibComponent) },
      { path: 'cultura', loadComponent: () => import('./features/cultural-elements/cultural-elements.component').then(c => c.CulturalElementsComponent) },
      { path: 'galeria', loadComponent: () => import('./features/gallery/gallery.component').then(c => c.GalleryComponent) },
      { path: 'testimonios', loadComponent: () => import('./features/testimonials/testimonials.component').then(c => c.TestimonialsComponent) },
      { path: 'xibalba', loadComponent: () => import('./features/xibalba/xibalba.component').then(c => c.XibalbaComponent) },
      { path: 'compartir', loadComponent: () => import('./features/social-sharing/social-sharing.component').then(c => c.SocialSharingComponent) }
    ]
  }
];
```

### RouterLinkActive Automático
Implementación de navegación con estados activos automáticos:
```typescript
// navbar.component.html
<a 
  [routerLink]="item.href"
  class="hover:text-accent-light transition-colors duration-200 relative"
  routerLinkActive="text-accent-light font-semibold after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-accent-light after:rounded-full"
  [routerLinkActiveOptions]="{ exact: item.href === '/' }"
>
  {{ item.label }}
</a>
```

### Sistema de Layout Orquestador
Componente centralizado que maneja elementos comunes:
```typescript
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, PetalsAnimationComponent],
  templateUrl: './main-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  // Scroll to top functionality
  private scrollY = signal(0);
  readonly showScrollButton = computed(() => this.scrollY() > 300);
  
  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}

## Estructura de Contenido
La aplicación sigue una estructura narrativa que representa el descenso por la Ceiba sagrada:
1. **Copa (Canopy)**: Sección hero con parallax interactivo
2. **Tronco (Trunk)**: Significado cultural e importancia del Hanal Pixán
3. **Raíces superficiales**: Receta interactiva del pib con calculadora
4. **Cámaras subterráneas**: Galería de ofrendas con sistema de cards
5. **Cenote/Xibalbá**: Memorial interactivo con elementos rituales

## Optimizaciones de Rendimiento
- **OnPush Change Detection**: Todos los componentes usan estrategia OnPush
- **Lazy Loading**: Rutas divididas en bundles separados
- **Tree Shaking**: Código no utilizado eliminado automáticamente
- **Optimización de Imágenes**: Imágenes responsivas con loading="lazy"
- **Rendimiento Canvas**: RequestAnimationFrame con throttling
- **Gestión de Memoria**: Limpieza adecuada en hooks OnDestroy

## Estrategia de Testing
- **Configuración Jest**: Optimizada para componentes standalone de Angular
- **Testing de Componentes**: Probar signals, propiedades computed y effects
- **Testing de Formularios**: Formularios reactivos con testing de validación
- **Testing de Accesibilidad**: Screen reader y navegación por teclado
- **Testing de Rendimiento**: Métricas de tamaño de bundle y rendimiento runtime

## Documentación
- **[README.modernization.md](README.modernization.md)**: Explicaciones técnicas detalladas de la modernización
- **[upgrade-report.md](upgrade-report.md)**: Métricas completas de actualización con diagramas Mermaid
- **[README.md](README.md)**: Visión general del proyecto e instrucciones de configuración

## 🎨 Sistema de Design Tokens y Colores

### Configuración Tailwind Cultural
El proyecto utiliza un sistema de colores culturales mayas organizados en design tokens:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Colores principales del tema Hanal Pixán
        'maya-gold': 'var(--color-maya-gold)',        // #FFD700
        'maya-orange': 'var(--color-maya-orange)',    // #FF6F00
        'ceiba-green': 'var(--color-ceiba-green)',    // #2E7D32
        'xibalba-purple': 'var(--color-xibalba-purple)', // #4A148C
        'cenote-blue': 'var(--color-cenote-blue)',    // #0277BD
        
        // Sistema adaptativos
        'primary': 'var(--color-primary)',           // #1EC1B8
        'accent': 'var(--color-accent)',             // #FFD700
        'text-primary': 'var(--color-text-primary)', // #FFFFFF
        'bg-card': 'var(--color-bg-card)',           // rgba(20,20,20,0.8)
      },
      animation: {
        'float-petal': 'floatPetal 15s linear infinite',
        'dance-fire': 'danceFire 2s ease-in-out infinite alternate',
        'glow-candle': 'glowCandle 3s ease-in-out infinite',
        'ripple-cenote': 'rippleCenote 4s ease-in-out infinite',
      }
    }
  }
}
```

### Clases Utilitarias Globales
```scss
// src/styles.scss - Clases personalizadas
.text-gradient-maya {
  background: var(--gradient-maya-sunset);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-glass {
  background: var(--color-bg-card);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-border);
}

.shadow-cultural {
  box-shadow: 0 4px 25px -5px rgba(255, 215, 0, 0.1), 
              0 10px 10px -5px rgba(30, 193, 184, 0.04);
}
```

### Uso en Componentes Angular
```html
<!-- home.component.html -->
<section class="bg-primary text-maya-gold">
  <h1 class="text-gradient-maya animate-fade-in">
    Hanal Pixán
  </h1>
  <div class="bg-glass shadow-cultural">
    <p class="text-text-secondary">Contenido cultural</p>
  </div>
</section>
```

### Precauciones Críticas

⚠️ **IMPORTANTE**: Usar únicamente Tailwind CSS v3.4.17
```bash
# ✅ Correcto
npm install tailwindcss@^3.4.17 --save-dev

# ❌ Incorrecto (incompatible con Angular 20)
npm install tailwindcss@^4.0.0 --save-dev
```

⚠️ **PostCSS Configuration**: Sintaxis de objeto obligatoria
```javascript
// ✅ Correcto - postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// ❌ Incorrecto (array sintaxis)
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
```

⚠️ **Sass Import**: Usar @use en lugar de @import
```scss
// ✅ Correcto - styles.scss
@use 'tailwindcss/base';
@use 'tailwindcss/components';
@use 'tailwindcss/utilities';

// ❌ Incorrecto (deprecado en Dart Sass 3.0)
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

### Integración de Iconos Lucide
Sistema robusto de iconos con múltiples estrategias de carga:

#### Configuración en index.html
```html
<!-- Lucide Icons CDN -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>

<!-- Initialize Lucide Icons -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  function initLucideIcons() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
      console.log('Lucide icons initialized from CDN');
    }
  }
  
  // Múltiples intentos de inicialización
  initLucideIcons();
  setTimeout(initLucideIcons, 500);
  setTimeout(initLucideIcons, 1000);
  
  // Observer para re-inicializar con nuevos elementos
  const observer = new MutationObserver(function(mutations) {
    // Lógica de detección de cambios en DOM
  });
  observer.observe(document.body, { childList: true, subtree: true });
});
</script>
```

#### Implementación en Main Layout
```typescript
private initializeLucideIcons(): void {
  if (typeof window !== 'undefined') {
    import('lucide').then((lucide) => {
      setTimeout(() => {
        lucide.createIcons();
        console.log('Lucide icons initialized');
      }, 50);
    }).catch(error => {
      console.error('Lucide icons failed to load:', error);
      this.loadLucideFromCDN(); // Fallback automático
    });
  }
}

private loadLucideFromCDN(): void {
  if (typeof document !== 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.js';
    script.onload = () => {
      setTimeout(() => {
        (window as any).lucide?.createIcons();
      }, 100);
    };
    document.head.appendChild(script);
  }
}
```

#### Uso en Componentes
```html
<!-- Iconos dinámicos con data-lucide -->
<i [attr.data-lucide]="audioTestimony().isPlaying ? 'pause' : 'play'" 
   class="w-5 h-5 text-inverse group-hover:scale-110 transition-transform"></i>

<!-- Iconos estáticos -->
<i data-lucide="heart" class="w-4 h-4 text-maya-orange"></i>
<i data-lucide="external-link" class="w-3 h-3"></i>
```

### Footer con Redes Sociales
Componente expandido con múltiples secciones:
```typescript
readonly socialLinks = computed<SocialLink[]>(() => [
  { platform: 'Facebook', url: 'https://facebook.com/hanalPixanTradicion', icon: 'facebook', color: '#1877F2' },
  { platform: 'Instagram', url: 'https://instagram.com/hanalPixanYucatan', icon: 'instagram', color: '#E4405F' },
  { platform: 'Twitter', url: 'https://twitter.com/hanalPixanMaya', icon: 'twitter', color: '#1DA1F2' },
  { platform: 'YouTube', url: 'https://youtube.com/@hanalPixanTradicion', icon: 'youtube', color: '#FF0000' },
  { platform: 'TikTok', url: 'https://tiktok.com/@hanalPixanYucatan', icon: 'video', color: '#000000' }
]);

readonly externalLinks = computed<FooterLink[]>(() => [
  { label: 'INAH Yucatán', href: 'https://inah.gob.mx/...', isExternal: true },
  { label: 'Secretaría de Cultura Yucatán', href: 'https://www.culturayucatan.com/', isExternal: true },
  { label: 'Gran Museo Maya', href: 'https://granmuseomaya.com.mx/', isExternal: true },
  { label: 'Turismo Yucatán', href: 'https://yucatan.travel/', isExternal: true }
]);
```

### Manejo de Colores y Design Tokens
```scss
// Sistema de colores semánticamente correcto
--color-text-inverse: #FFFFFF;     // Blanco para texto sobre fondos coloridos/oscuros
--color-text-primary: #FFFFFF;     // Color principal de texto (también blanco)
--color-text-secondary: #E0E0E0;   // Gris claro para texto secundario
--color-text-muted: #9E9E9E;       // Gris para texto menos importante

// Sistema de fondos negros consistente
--color-bg-primary: #000000;       // Negro principal para fondos
--color-bg-secondary: #0A0A0A;     // Negro ligeramente más claro
--color-bg-card: rgba(20, 20, 20, 0.8);  // Fondo de cards con transparencia

// Uso semánticamente correcto en componentes
.bg-bg-primary      // Negro principal para fondos de layout
.text-inverse       // PREFERIR: Blanco sobre fondos coloridos/oscuros
.text-primary       // Alternativo: texto principal (mismo color)
.bg-maya-orange     // Naranja cultural para botones
.bg-card           // Fondo semi-transparente para cards
```

### Buenas Prácticas de Colores
1. **PREFERIR `text-inverse`** sobre `text-primary` para mayor claridad semántica
2. **Usar `text-inverse`** en botones con fondos coloridos (bg-maya-orange, bg-cenote-blue)
3. **Usar `text-secondary`** para texto menos importante
4. **Usar `text-muted`** para metadatos y texto terciario
5. **Mantener contraste** suficiente para accesibilidad WCAG

### Buenas Prácticas de Desarrollo

1. **Variables CSS First**: Preferir custom properties sobre valores hardcoded
2. **Mobile-First**: Diseñar primero para móvil, luego escalar
3. **Purge CSS**: Configuración automática en producción para optimizar bundle
4. **Accesibilidad**: Respetar `prefers-reduced-motion` en animaciones
5. **Performance**: Usar `loading="lazy"` en imágenes y lazy loading en rutas
6. **Iconos Resilientes**: Múltiples estrategias de carga para Lucide Icons
7. **RouterLinkActive**: Estados automáticos para navegación consistente
8. **Layout Centralizado**: Componente orquestador para elementos comunes
9. **Separación de Templates**: SIEMPRE usar templateUrl para mantenibilidad
10. **Signals Everywhere**: Reemplazar Observables con signals para mejor performance

### Comandos de Verificación
```bash
# Verificar configuración Tailwind
npm run build                          # Debe generar CSS sin errores
ng serve                               # Servidor dev debe funcionar
npm list tailwindcss postcss autoprefixer  # Verificar versiones

# Estructura requerida
├── tailwind.config.js                 # Configuración colores mayas
├── postcss.config.js                  # PostCSS object syntax
└── src/styles.scss                    # Variables CSS con @use
```

## Pautas de Contenido Cultural
- **Representación Respetuosa**: Retrato auténtico de las tradiciones mayas
- **Enfoque Educativo**: Contenido informativo sobre las costumbres del Hanal Pixán
- **Aprendizaje Interactivo**: Elementos prácticos como la calculadora de recetas
- **Narrativa Visual**: Viaje parallax a través del simbolismo de la Ceiba
- **Respeto Memorial**: Presentación digna de los conceptos de Xibalbá