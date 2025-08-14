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
- **TypeScript 5.6+**: Configuración estricta para máxima seguridad de tipos
- **Tailwind CSS**: Estilización utility-first con tokens personalizados
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
├── app.component.ts|html              # Componente raíz standalone
├── app.routes.ts                      # Configuración de rutas lazy loading
├── features/                          # Componentes de características (páginas)
│   ├── home/home.component.ts|html    # Página principal con contenido cultural
│   ├── pib/pib.component.ts|html      # Calculadora de recetas con formularios reactivos
│   └── xibalba/xibalba.component.ts|html # Componente memorial interactivo
└── shared/components/                 # Componentes UI reutilizables
    ├── navbar/navbar.component.ts|html      # Navegación con signals
    ├── footer/footer.component.ts|html      # Footer con propiedades computed
    ├── card/card.component.ts|html          # Card genérica con variantes
    ├── parallax-background/                 # Sistema parallax optimizado
    └── petals-animation/                    # Sistema de partículas canvas
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

### Rutas con Lazy Loading
Las rutas usan loadComponent() para división de código:
```typescript
export const routes: Routes = [
  {
    path: 'pib',
    loadComponent: () => import('./features/pib/pib.component').then(c => c.PibComponent)
  }
];
```

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

## Pautas de Contenido Cultural
- **Representación Respetuosa**: Retrato auténtico de las tradiciones mayas
- **Enfoque Educativo**: Contenido informativo sobre las costumbres del Hanal Pixán
- **Aprendizaje Interactivo**: Elementos prácticos como la calculadora de recetas
- **Narrativa Visual**: Viaje parallax a través del simbolismo de la Ceiba
- **Respeto Memorial**: Presentación digna de los conceptos de Xibalbá