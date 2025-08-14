# 🚀 **Prompt Genérico para Migración HTML → Angular 20**

## 📋 **Prompt Principal - Aplicación Web Genérica**

```
Actúa como un Angular 20 Expert especializado en migraciones y arquitecturas modernas. Tu objetivo es convertir cualquier plantilla HTML estática en una aplicación Angular 20 de última generación siguiendo las mejores prácticas de 2024-2025.

INSTRUCCIONES PRINCIPALES:

1. ANÁLISIS INICIAL:
   - Analiza completamente la plantilla HTML proporcionada
   - Identifica tipo de aplicación: portfolio, landing page, dashboard, e-commerce, blog, etc.
   - Mapea secciones, componentes, funcionalidades y assets
   - Preserva EXACTAMENTE el diseño visual y CSS original
   - No hagas cambios de diseño - solo modernización técnica

2. ARQUITECTURA ANGULAR 20 MODERNA:
   - Usar exclusivamente Standalone Components (sin NgModules)
   - Implementar Angular Signals para todo el state management
   - Usar patrón inject() en lugar de constructor injection
   - Aplicar OnPush ChangeDetection en todos los componentes
   - TypeScript 5.8.2+ en modo strict obligatorio
   - Templates externos separados (templateUrl, no inline templates)

3. CONFIGURACIÓN TÉCNICA ACTUALIZADA (2025):
   - package.json con Angular 20.1.0+ y dependencias compatibles
   - TypeScript ~5.8.2 (requerimiento crítico para Angular 20)
   - Nuevo builder @angular/build:application (no @angular-devkit/build-angular)
   - Zone.js ~0.15.0 para compatibilidad Angular 20
   - tsconfig.json con moduleResolution: "bundler"
   - Configuración angular.json con builder moderno
   - Eliminación de polyfills.ts innecesarios

4. STRUCTURE PACKAGE.JSON CORRECTA:
   - Dependencies: @angular/* en versión ^20.1.0
   - DevDependencies: @angular/build ^20.1.5, @angular/cli ^20.1.5
   - TypeScript EXACTAMENTE ~5.8.2 (no 5.5, no 5.6, no 5.7)
   - Zone.js ~0.15.0 (no 0.14.x que causa incompatibilidades)
   - Tslib ^2.3.0 mínimo
   - RxJS ~7.8.0 para compatibilidad

5. CONFIGURACIÓN ANGULAR.JSON MODERNA:
   - builder: "@angular/build:application" (no browser builder)
   - Propiedad "browser" en lugar de "main" 
   - Polyfills como array: ["zone.js"] directamente en options
   - OutputPath moderno: "dist/[project-name]"
   - Assets simplificados: src/assets, src/favicon.ico
   - Serve builder: "@angular/build:dev-server" (no @angular-devkit)
   - Extract-i18n builder: "@angular/build:extract-i18n"
   - Test builder: "@angular/build:karma"
   - Eliminación de configuraciones legacy

6. TSCONFIG.JSON ANGULAR 20:
   - moduleResolution: "bundler" (obligatorio)
   - target: "ES2022" mínimo
   - module: "ES2022"
   - lib: ["ES2022", "dom"]
   - strict: true con todas las opciones strict habilitadas
   - baseUrl: "./" para resolución de imports

7. ESTRUCTURA DE SERVICIOS ADAPTATIVA:
   - DataService: Gestión centralizada de datos con Signals
   - ConfigurationService: Configuración de la aplicación
   - TranslationService: Sistema i18n completo (si es necesario)
   - NotificationService: Sistema de notificaciones/alertas
   - HttpService: Wrapper para llamadas HTTP (si aplicable)
   - ThemeService: Gestión de temas (si aplicable)

8. COMPONENTIZACIÓN INTELIGENTE:
   - Analizar HTML y crear componentes lógicos por funcionalidad
   - Componentes reutilizables para elementos comunes (botones, cards, modals)
   - Componentes de layout (header, footer, sidebar)
   - Componentes específicos del dominio de la aplicación
   - Lazy loading preparado para secciones grandes
   - Templates externos SIEMPRE (templateUrl: './component.html')
   - Separación HTML/TypeScript obligatoria

9. SISTEMA DE CONFIGURACIÓN FLEXIBLE:
   - Interfaces TypeScript para tipado de datos
   - Archivos de configuración separados por entorno
   - Variables de entorno para configuraciones sensibles
   - Estructura escalable para múltiples features

10. OPTIMIZACIONES ESPECÍFICAS ANGULAR 20:
    - Framework CSS: detectar y mantener (Bootstrap, TailwindCSS, etc.)
    - Configuración Tailwind personalizada con design tokens culturales
    - Sistema de colores escalable con CSS custom properties
    - Formularios reactivos si hay forms en el HTML
    - Animaciones: mantener las existentes, mejorar con Angular Animations
    - Assets: optimizar imágenes y recursos estáticos
    - Build optimizado con el nuevo sistema @angular/build
    - Tree-shaking automático mejorado
    - Configuración @tailwindcss/typography para contenido tipográfico

REQUERIMIENTOS ESPECÍFICOS DE COMPATIBILIDAD:

✅ Angular 20.1.0+: Versión LTS más reciente con todas las features
✅ TypeScript 5.8.2: Versión EXACTA requerida (crítico para dependencias)
✅ Nuevo Build System: @angular/build en lugar de webpack builders legacy
✅ Zone.js 0.15.0: Compatibilidad con change detection Angular 20
✅ Bundler Resolution: moduleResolution "bundler" para ESM imports
✅ Standalone Everything: Componentes, directivas, pipes standalone
✅ External Templates: Separación HTML/TS obligatoria para mantenibilidad
✅ Signals Everywhere: Reemplazo completo de Observables para estado local

ENTREGABLES ADAPTATIVOS:

1. package.json con dependencias Angular 20 compatibles
2. angular.json con builder @angular/build:application moderno
3. tsconfig.json optimizado para bundler resolution
4. tailwind.config.js con sistema de colores culturales y animaciones personalizadas
5. styles.scss con design tokens y variables CSS globales
6. Aplicación Angular 20 completamente funcional
7. Servicios con Signals adaptados al tipo de aplicación
8. Componentes modulares específicos del dominio con templates externos
9. Build de producción optimizado con nuevo sistema
10. Documentación técnica específica con comandos Angular 20
11. README con setup, dependencias y deploy instructions
12. Estructura de testing compatible con Angular 20

CONFIGURACIÓN CRÍTICA PARA EVITAR ERRORES ERESOLVE:

1. NUNCA usar Angular versiones < 20.1.0
2. NUNCA usar TypeScript != 5.8.2 (exacta)
3. NUNCA usar @angular-devkit/build-angular en Angular 20
4. NUNCA usar moduleResolution: "node" en tsconfig
5. NUNCA usar Tailwind CSS v4+ (incompatible con Angular 20)
6. NUNCA usar @import en Sass (deprecado en Dart Sass 3.0)
7. SIEMPRE verificar compatibilidad Zone.js 0.15.0
8. SIEMPRE usar @angular/build para builder moderno
9. SIEMPRE usar Tailwind CSS v3.4.17 con PostCSS
10. SIEMPRE usar @use en lugar de @import en Sass
11. SIEMPRE separar templates HTML de TypeScript
12. SIEMPRE usar standalone: true en componentes nuevos

TIPOS DE APLICACIÓN SOPORTADOS:

🎭 Portfolio/Landing Page: PersonalInfoService, ContactService, ProjectService
📊 Dashboard/Admin: DataService, ChartService, UserService, MetricsService
🛒 E-commerce: ProductService, CartService, OrderService, PaymentService
📝 Blog/CMS: ContentService, CategoryService, CommentService, SEOService
📱 SaaS/App: FeatureService, SubscriptionService, AnalyticsService, AuthService
🎯 Marketing: CampaignService, LeadService, ConversionService, TrackingService
🏛️ Cultural/Educational: ContentService, TranslationService, MediaService

ANÁLISIS AUTOMÁTICO MEJORADO:

Al recibir el HTML, automáticamente:
1. Detecta el tipo de aplicación basado en estructura y contenido
2. Identifica componentes y servicios necesarios específicos del dominio
3. Propone arquitectura Angular 20 específica para el caso de uso
4. Sugiere optimizaciones de performance pertinentes
5. Recomienda herramientas adicionales compatibles con Angular 20
6. Genera package.json con dependencias exactas y compatibles
7. Configura build system moderno automáticamente

WORKFLOW DE MIGRACIÓN SISTEMÁTICO:

1. **Análisis**: Detectar tipo de app y arquitectura necesaria
2. **Setup**: Crear package.json con dependencias Angular 20 exactas
3. **Configuración**: angular.json y tsconfig.json modernos
4. **Estructura**: Crear carpetas y archivos base con standalone components
5. **Migración**: Convertir HTML a componentes con templates externos
6. **Servicios**: Implementar servicios con Signals según el dominio
7. **Optimización**: Aplicar lazy loading y performance optimizations
8. **Testing**: Configurar testing compatible con Angular 20
9. **Build**: Verificar build de producción con nuevo sistema
10. **Documentación**: README completo con setup instructions

IMPORTANTE CRÍTICO: 
- NO cambies el diseño visual original
- NO agregues funcionalidades no presentes en el HTML
- SÍ moderniza la arquitectura técnica completamente
- SÍ usa EXACTAMENTE las versiones de dependencias compatibles
- SÍ implementa separación HTML/TypeScript obligatoria
- SÍ verifica compatibilidad package.json antes de generar
- SÍ usa el nuevo build system @angular/build sin excepciones
- SÍ implementa Signals para todo el estado de la aplicación

¿Estás listo para comenzar? Proporciona el archivo HTML y te ayudo a crear una aplicación Angular 20 moderna, completamente compatible y optimizada específicamente para su propósito.
```

## 🎨 **Configuración Tailwind Personalizada**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss,css}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Colores principales del tema específico
        'primary': 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        'primary-light': 'var(--color-primary-light)',
        'secondary': 'var(--color-secondary)',
        'accent': 'var(--color-accent)',
        
        // Sistema de textos y fondos
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-card': 'var(--color-bg-card)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 0 0 rgba(var(--color-accent-rgb), 0.4)' },
          '70%': { boxShadow: '0 0 0 20px rgba(var(--color-accent-rgb), 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(var(--color-accent-rgb), 0)' }
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(var(--color-accent-rgb), 0.3)',
        'cultural': '0 4px 25px -5px rgba(255, 215, 0, 0.1), 0 10px 10px -5px rgba(30, 193, 184, 0.04)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

## 🎯 **Styles.scss con Design Tokens**

```scss
/* Global styles y Design Tokens */
@use 'tailwindcss/base';
@use 'tailwindcss/components';
@use 'tailwindcss/utilities';

:root {
  /* === SISTEMA DE COLORES ADAPTATIVOS === */
  --color-primary: #1EC1B8;
  --color-primary-dark: #00A693;
  --color-primary-light: #4FD1C7;
  --color-secondary: #FF6F00;
  --color-accent: #FFD700;
  --color-accent-rgb: 255, 215, 0;
  
  /* === TEXTOS Y FONDOS === */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #E0E0E0;
  --color-text-muted: #9E9E9E;
  --color-bg-primary: #000000;
  --color-bg-secondary: #0A0A0A;
  --color-bg-card: rgba(20, 20, 20, 0.8);
  
  /* === BORDES === */
  --color-border: rgba(255, 255, 255, 0.1);
  --color-border-focus: #1EC1B8;
}

html, body {
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-family: 'Inter', system-ui, sans-serif;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
}

/* === CLASES UTILITARIAS GLOBALES === */
.text-gradient {
  background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bg-glass {
  background: var(--color-bg-card);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-border);
}

.shadow-cultural {
  box-shadow: 0 4px 25px -5px rgba(255, 215, 0, 0.1), 0 10px 10px -5px rgba(30, 193, 184, 0.04);
}

.transition-cultural {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🔧 **Package.json Template Angular 20 Compatible**

```json
{
  "name": "angular-20-app",
  "version": "1.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build --configuration production",
    "build:analyze": "ng build --configuration production --stats-json && npx webpack-bundle-analyzer dist/[app-name]/stats.json",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "lint": "ng lint"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "^20.1.0",
    "@angular/compiler": "^20.1.0",
    "@angular/core": "^20.1.0",
    "@angular/forms": "^20.1.0",
    "@angular/platform-browser": "^20.1.0",
    "@angular/router": "^20.1.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.15.0"
  },
  "devDependencies": {
    "@angular/build": "^20.1.5",
    "@angular/cli": "^20.1.5",
    "@angular/compiler-cli": "^20.1.0",
    "@tailwindcss/typography": "^0.5.16",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.8.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "tailwindcss": "^3.4.17",
    "postcss": "^8.5.6",
    "autoprefixer": "^10.4.21",
    "typescript": "~5.8.2"
  }
}
```

## 🏗️ **Angular.json Template Moderno**

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "app-name": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss",
          "standalone": true,
          "inlineTemplate": false
        },
        "@schematics/angular:directive": {
          "standalone": true
        },
        "@schematics/angular:pipe": {
          "standalone": true
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "outputPath": "dist/app-name",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": ["zone.js"],
            "tsConfig": "tsconfig.app.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": ["src/styles.scss"],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kB",
                  "maximumError": "4kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "app-name:build:production"
            },
            "development": {
              "buildTarget": "app-name:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular/build:extract-i18n",
          "options": {
            "buildTarget": "app-name:build"
          }
        },
        "test": {
          "builder": "@angular/build:karma",
          "options": {}
        }
      }
    }
  },
  "cli": {
    "analytics": false
  }
}
```

## 📊 **TSConfig.json Optimizado Angular 20**

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "bundler",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
```

## 🔧 **Servicios Genéricos Base Mejorados**

### **DataService Moderno con Signals:**
```typescript
import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface AppData {
  id: string;
  name: string;
  title: string;
  description: string;
  metadata: Record<string, any>;
  settings: AppSettings;
  content: ContentItem[];
  lastUpdated: Date;
}

export interface AppSettings {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  features: Record<string, boolean>;
  configuration: Record<string, any>;
}

export interface ContentItem {
  id: string;
  type: string;
  title: string;
  content: any;
  visible: boolean;
  order: number;
  metadata: Record<string, any>;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private http = inject(HttpClient);
  
  private appData = signal<AppData>({
    id: 'app-001',
    name: 'My Application',
    title: 'Modern Web Application',
    description: 'A modern web application built with Angular 20',
    metadata: {},
    settings: {
      theme: 'light',
      language: 'en',
      features: {},
      configuration: {}
    },
    content: [],
    lastUpdated: new Date()
  });
  
  private isLoading = signal(false);
  private error = signal<string | null>(null);
  
  // Computed signals para acceso optimizado
  readonly data = computed(() => this.appData());
  readonly name = computed(() => this.appData().name);
  readonly title = computed(() => this.appData().title);
  readonly description = computed(() => this.appData().description);
  readonly settings = computed(() => this.appData().settings);
  readonly content = computed(() => this.appData().content);
  readonly theme = computed(() => this.appData().settings.theme);
  readonly language = computed(() => this.appData().settings.language);
  readonly loading = computed(() => this.isLoading());
  readonly hasError = computed(() => this.error() !== null);
  readonly errorMessage = computed(() => this.error());
  
  // Computed para contenido filtrado y ordenado
  readonly visibleContent = computed(() => 
    this.content().filter(item => item.visible).sort((a, b) => a.order - b.order)
  );
  
  readonly contentByType = (type: string) => computed(() => 
    this.visibleContent().filter(item => item.type === type)
  );
  
  readonly currentYear = computed(() => new Date().getFullYear());
  readonly hasContent = computed(() => this.content().length > 0);
  readonly contentCount = computed(() => this.content().length);
  readonly visibleContentCount = computed(() => this.visibleContent().length);

  // Métodos de actualización con error handling
  updateAppData(newData: Partial<AppData>): void {
    try {
      this.appData.update(current => ({
        ...current,
        ...newData,
        lastUpdated: new Date()
      }));
      this.error.set(null);
    } catch (err) {
      this.error.set('Error updating app data');
      console.error('DataService: Error updating app data', err);
    }
  }

  updateSettings(newSettings: Partial<AppSettings>): void {
    try {
      this.appData.update(current => ({
        ...current,
        settings: { ...current.settings, ...newSettings },
        lastUpdated: new Date()
      }));
      this.error.set(null);
    } catch (err) {
      this.error.set('Error updating settings');
      console.error('DataService: Error updating settings', err);
    }
  }

  updateContent(content: ContentItem[]): void {
    try {
      this.appData.update(current => ({
        ...current,
        content,
        lastUpdated: new Date()
      }));
      this.error.set(null);
    } catch (err) {
      this.error.set('Error updating content');
      console.error('DataService: Error updating content', err);
    }
  }

  addContentItem(item: ContentItem): void {
    try {
      this.appData.update(current => ({
        ...current,
        content: [...current.content, item],
        lastUpdated: new Date()
      }));
      this.error.set(null);
    } catch (err) {
      this.error.set('Error adding content item');
      console.error('DataService: Error adding content item', err);
    }
  }

  removeContentItem(id: string): void {
    try {
      this.appData.update(current => ({
        ...current,
        content: current.content.filter(item => item.id !== id),
        lastUpdated: new Date()
      }));
      this.error.set(null);
    } catch (err) {
      this.error.set('Error removing content item');
      console.error('DataService: Error removing content item', err);
    }
  }

  updateContentItem(id: string, updates: Partial<ContentItem>): void {
    try {
      this.appData.update(current => ({
        ...current,
        content: current.content.map(item => 
          item.id === id ? { ...item, ...updates } : item
        ),
        lastUpdated: new Date()
      }));
      this.error.set(null);
    } catch (err) {
      this.error.set('Error updating content item');
      console.error('DataService: Error updating content item', err);
    }
  }

  // Método para cargar datos desde API (ejemplo)
  async loadData(url?: string): Promise<void> {
    if (!url) return;
    
    this.isLoading.set(true);
    this.error.set(null);
    
    try {
      const data = await this.http.get<AppData>(url).toPromise();
      if (data) {
        this.appData.set(data);
      }
    } catch (err) {
      this.error.set('Error loading data from server');
      console.error('DataService: Error loading data', err);
    } finally {
      this.isLoading.set(false);
    }
  }

  // Método para reset completo
  reset(): void {
    this.appData.set({
      id: 'app-001',
      name: 'My Application',
      title: 'Modern Web Application',
      description: 'A modern web application built with Angular 20',
      metadata: {},
      settings: {
        theme: 'light',
        language: 'en',
        features: {},
        configuration: {}
      },
      content: [],
      lastUpdated: new Date()
    });
    this.error.set(null);
    this.isLoading.set(false);
  }
}
```

### **ConfigurationService Angular 20:**
```typescript
import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface AppConfiguration {
  app: {
    name: string;
    version: string;
    environment: 'development' | 'staging' | 'production';
  };
  features: Record<string, boolean>;
  api: {
    baseUrl: string;
    timeout: number;
    retries: number;
  };
  ui: {
    theme: string;
    language: string;
    animations: boolean;
    accessibility: boolean;
  };
  external: {
    analytics?: string;
    emailService?: string;
    storage?: string;
  };
}

@Injectable({ providedIn: 'root' })
export class ConfigurationService {
  private platformId = inject(PLATFORM_ID);
  
  private config = signal<AppConfiguration>({
    app: {
      name: 'Angular App',
      version: '1.0.0',
      environment: 'development'
    },
    features: {
      darkMode: true,
      multiLanguage: false,
      analytics: false,
      notifications: true,
      accessibility: true
    },
    api: {
      baseUrl: '/api',
      timeout: 5000,
      retries: 3
    },
    ui: {
      theme: 'light',
      language: 'en',
      animations: true,
      accessibility: true
    },
    external: {}
  });
  
  // Computed signals para acceso fácil
  readonly configuration = computed(() => this.config());
  readonly appInfo = computed(() => this.config().app);
  readonly features = computed(() => this.config().features);
  readonly apiConfig = computed(() => this.config().api);
  readonly uiConfig = computed(() => this.config().ui);
  readonly externalConfig = computed(() => this.config().external);
  
  // Feature flags con mejor tipo safety
  readonly isFeatureEnabled = (feature: string) => computed(() => 
    this.features()[feature] ?? false
  );
  
  readonly isDevelopment = computed(() => 
    this.appInfo().environment === 'development'
  );
  
  readonly isProduction = computed(() => 
    this.appInfo().environment === 'production'
  );

  readonly isBrowser = computed(() => 
    isPlatformBrowser(this.platformId)
  );

  // Computed para configuraciones específicas
  readonly shouldShowAnimations = computed(() => 
    this.uiConfig().animations && this.isBrowser()
  );

  readonly currentTheme = computed(() => 
    this.uiConfig().theme
  );

  readonly isDarkMode = computed(() => 
    this.currentTheme() === 'dark'
  );

  updateConfiguration(updates: Partial<AppConfiguration>): void {
    this.config.update(current => ({
      ...current,
      ...updates
    }));
    this.saveToLocalStorage();
  }

  enableFeature(feature: string): void {
    this.config.update(current => ({
      ...current,
      features: { ...current.features, [feature]: true }
    }));
    this.saveToLocalStorage();
  }

  disableFeature(feature: string): void {
    this.config.update(current => ({
      ...current,
      features: { ...current.features, [feature]: false }
    }));
    this.saveToLocalStorage();
  }

  toggleFeature(feature: string): void {
    const isEnabled = this.isFeatureEnabled(feature)();
    if (isEnabled) {
      this.disableFeature(feature);
    } else {
      this.enableFeature(feature);
    }
  }

  updateApiConfig(apiUpdates: Partial<AppConfiguration['api']>): void {
    this.config.update(current => ({
      ...current,
      api: { ...current.api, ...apiUpdates }
    }));
    this.saveToLocalStorage();
  }

  updateUIConfig(uiUpdates: Partial<AppConfiguration['ui']>): void {
    this.config.update(current => ({
      ...current,
      ui: { ...current.ui, ...uiUpdates }
    }));
    this.saveToLocalStorage();
  }

  setTheme(theme: string): void {
    this.updateUIConfig({ theme });
  }

  setLanguage(language: string): void {
    this.updateUIConfig({ language });
  }

  // Persistencia en localStorage (solo en browser)
  private saveToLocalStorage(): void {
    if (this.isBrowser()) {
      try {
        localStorage.setItem('app-configuration', JSON.stringify(this.config()));
      } catch (error) {
        console.error('ConfigurationService: Error saving to localStorage', error);
      }
    }
  }

  loadFromLocalStorage(): void {
    if (this.isBrowser()) {
      try {
        const saved = localStorage.getItem('app-configuration');
        if (saved) {
          const parsedConfig = JSON.parse(saved);
          this.config.set(parsedConfig);
        }
      } catch (error) {
        console.error('ConfigurationService: Error loading from localStorage', error);
      }
    }
  }

  resetToDefaults(): void {
    this.config.set({
      app: {
        name: 'Angular App',
        version: '1.0.0',
        environment: 'development'
      },
      features: {
        darkMode: true,
        multiLanguage: false,
        analytics: false,
        notifications: true,
        accessibility: true
      },
      api: {
        baseUrl: '/api',
        timeout: 5000,
        retries: 3
      },
      ui: {
        theme: 'light',
        language: 'en',
        animations: true,
        accessibility: true
      },
      external: {}
    });
    this.saveToLocalStorage();
  }
}
```

### **NotificationService Avanzado:**
```typescript
import { Injectable, signal, computed, effect } from '@angular/core';

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  persistent?: boolean;
  actions?: NotificationAction[];
  timestamp: Date;
  read?: boolean;
  priority?: 'low' | 'normal' | 'high' | 'urgent';
}

export interface NotificationAction {
  label: string;
  action: () => void;
  style?: 'primary' | 'secondary' | 'danger';
  icon?: string;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notifications = signal<Notification[]>([]);
  private nextId = 1;
  private maxNotifications = signal(5);
  private globalDuration = signal(5000);
  
  // Computed signals
  readonly allNotifications = computed(() => this.notifications());
  
  readonly activeNotifications = computed(() => 
    this.notifications()
      .filter(n => !this.isExpired(n))
      .slice(0, this.maxNotifications())
  );
  
  readonly unreadNotifications = computed(() =>
    this.activeNotifications().filter(n => !n.read)
  );
  
  readonly hasNotifications = computed(() => 
    this.activeNotifications().length > 0
  );

  readonly hasUnreadNotifications = computed(() =>
    this.unreadNotifications().length > 0
  );

  readonly notificationsByType = computed(() => {
    const notifications = this.activeNotifications();
    return {
      success: notifications.filter(n => n.type === 'success'),
      error: notifications.filter(n => n.type === 'error'),
      warning: notifications.filter(n => n.type === 'warning'),
      info: notifications.filter(n => n.type === 'info')
    };
  });

  readonly urgentNotifications = computed(() =>
    this.activeNotifications().filter(n => n.priority === 'urgent')
  );

  readonly notificationCount = computed(() => this.activeNotifications().length);
  readonly unreadCount = computed(() => this.unreadNotifications().length);

  constructor() {
    // Effect para limpiar notificaciones expiradas periódicamente
    effect(() => {
      const interval = setInterval(() => {
        this.cleanExpiredNotifications();
      }, 1000);

      return () => clearInterval(interval);
    });
  }

  show(notification: Omit<Notification, 'id' | 'timestamp'>): string {
    const id = `notification-${this.nextId++}`;
    const newNotification: Notification = {
      ...notification,
      id,
      timestamp: new Date(),
      duration: notification.duration ?? this.globalDuration(),
      read: false,
      priority: notification.priority ?? 'normal'
    };

    this.notifications.update(current => {
      const updated = [...current, newNotification];
      // Mantener solo las más recientes si excede el máximo
      return updated.slice(-50); // Máximo 50 en historia
    });

    // Auto remove si no es persistente
    if (!notification.persistent && newNotification.duration) {
      setTimeout(() => {
        this.remove(id);
      }, newNotification.duration);
    }

    return id;
  }

  success(title: string, message: string, duration?: number): string {
    return this.show({ 
      type: 'success', 
      title, 
      message, 
      duration,
      priority: 'normal'
    });
  }

  error(title: string, message: string, persistent = true): string {
    return this.show({ 
      type: 'error', 
      title, 
      message, 
      persistent,
      priority: 'high'
    });
  }

  warning(title: string, message: string, duration?: number): string {
    return this.show({ 
      type: 'warning', 
      title, 
      message, 
      duration,
      priority: 'normal'
    });
  }

  info(title: string, message: string, duration?: number): string {
    return this.show({ 
      type: 'info', 
      title, 
      message, 
      duration,
      priority: 'low'
    });
  }

  urgent(title: string, message: string, actions?: NotificationAction[]): string {
    return this.show({
      type: 'error',
      title,
      message,
      persistent: true,
      priority: 'urgent',
      actions
    });
  }

  remove(id: string): void {
    this.notifications.update(current => 
      current.filter(n => n.id !== id)
    );
  }

  markAsRead(id: string): void {
    this.notifications.update(current =>
      current.map(n => n.id === id ? { ...n, read: true } : n)
    );
  }

  markAllAsRead(): void {
    this.notifications.update(current =>
      current.map(n => ({ ...n, read: true }))
    );
  }

  clear(): void {
    this.notifications.set([]);
  }

  clearRead(): void {
    this.notifications.update(current =>
      current.filter(n => !n.read || !this.isExpired(n))
    );
  }

  setMaxNotifications(max: number): void {
    this.maxNotifications.set(Math.max(1, max));
  }

  setGlobalDuration(duration: number): void {
    this.globalDuration.set(Math.max(1000, duration));
  }

  private isExpired(notification: Notification): boolean {
    if (notification.persistent || !notification.duration) {
      return false;
    }
    
    const now = Date.now();
    const created = notification.timestamp.getTime();
    return (now - created) > notification.duration;
  }

  private cleanExpiredNotifications(): void {
    this.notifications.update(current =>
      current.filter(n => !this.isExpired(n))
    );
  }

  // Métodos para obtener notificaciones específicas
  getNotification(id: string): Notification | undefined {
    return this.allNotifications().find(n => n.id === id);
  }

  getNotificationsByType(type: Notification['type']): Notification[] {
    return this.activeNotifications().filter(n => n.type === type);
  }

  // Estadísticas de notificaciones
  readonly stats = computed(() => ({
    total: this.allNotifications().length,
    active: this.activeNotifications().length,
    unread: this.unreadNotifications().length,
    byType: {
      success: this.notificationsByType().success.length,
      error: this.notificationsByType().error.length,
      warning: this.notificationsByType().warning.length,
      info: this.notificationsByType().info.length
    },
    urgent: this.urgentNotifications().length
  }));
}
```

## 📊 **Detección Automática de Tipo de Aplicación Mejorada**

```typescript
export interface ApplicationAnalysis {
  type: ApplicationType;
  confidence: number;
  features: string[];
  suggestedServices: string[];
  suggestedComponents: string[];
  complexity: 'low' | 'medium' | 'high';
  estimatedComponents: number;
}

export class ApplicationTypeDetector {
  static analyze(htmlContent: string): ApplicationAnalysis {
    const content = htmlContent.toLowerCase();
    const results: Array<{type: ApplicationType, score: number, features: string[]}> = [];
    
    // Portfolio/Personal Site
    const portfolioFeatures = this.checkPortfolioFeatures(content);
    if (portfolioFeatures.length > 0) {
      results.push({
        type: 'portfolio',
        score: portfolioFeatures.length * 2,
        features: portfolioFeatures
      });
    }
    
    // E-commerce
    const ecommerceFeatures = this.checkEcommerceFeatures(content);
    if (ecommerceFeatures.length > 0) {
      results.push({
        type: 'ecommerce',
        score: ecommerceFeatures.length * 3,
        features: ecommerceFeatures
      });
    }
    
    // Dashboard/Admin
    const dashboardFeatures = this.checkDashboardFeatures(content);
    if (dashboardFeatures.length > 0) {
      results.push({
        type: 'dashboard',
        score: dashboardFeatures.length * 2.5,
        features: dashboardFeatures
      });
    }
    
    // Blog/Content
    const blogFeatures = this.checkBlogFeatures(content);
    if (blogFeatures.length > 0) {
      results.push({
        type: 'blog',
        score: blogFeatures.length * 2,
        features: blogFeatures
      });
    }
    
    // Landing Page
    const landingFeatures = this.checkLandingFeatures(content);
    if (landingFeatures.length > 0) {
      results.push({
        type: 'landing',
        score: landingFeatures.length * 1.5,
        features: landingFeatures
      });
    }

    // Cultural/Educational
    const culturalFeatures = this.checkCulturalFeatures(content);
    if (culturalFeatures.length > 0) {
      results.push({
        type: 'cultural',
        score: culturalFeatures.length * 2,
        features: culturalFeatures
      });
    }
    
    // Determinar el tipo con mayor puntuación
    const topResult = results.sort((a, b) => b.score - a.score)[0];
    const detectedType = topResult?.type || 'generic';
    
    // Calcular complejidad basada en el contenido
    const complexity = this.calculateComplexity(content, detectedType);
    const estimatedComponents = this.estimateComponentCount(content, detectedType);
    
    return {
      type: detectedType,
      confidence: topResult ? Math.min(topResult.score / 10, 1) : 0.1,
      features: topResult?.features || [],
      suggestedServices: this.getSuggestedServices(detectedType),
      suggestedComponents: this.getSuggestedComponents(detectedType),
      complexity,
      estimatedComponents
    };
  }
  
  private static checkPortfolioFeatures(content: string): string[] {
    const indicators = [
      { term: 'portfolio', weight: 3 },
      { term: 'resume', weight: 2 },
      { term: 'cv', weight: 2 },
      { term: 'about me', weight: 2 },
      { term: 'my work', weight: 2 },
      { term: 'projects', weight: 2 },
      { term: 'skills', weight: 1 },
      { term: 'experience', weight: 1 },
      { term: 'contact me', weight: 1 }
    ];
    
    return indicators
      .filter(indicator => content.includes(indicator.term))
      .map(indicator => indicator.term);
  }
  
  private static checkEcommerceFeatures(content: string): string[] {
    const indicators = [
      { term: 'cart', weight: 3 },
      { term: 'product', weight: 3 },
      { term: 'shop', weight: 3 },
      { term: 'buy', weight: 2 },
      { term: 'checkout', weight: 3 },
      { term: 'price', weight: 2 },
      { term: 'add to cart', weight: 3 },
      { term: 'payment', weight: 2 },
      { term: 'shipping', weight: 2 },
      { term: 'inventory', weight: 1 }
    ];
    
    return indicators
      .filter(indicator => content.includes(indicator.term))
      .map(indicator => indicator.term);
  }
  
  private static checkDashboardFeatures(content: string): string[] {
    const indicators = [
      { term: 'dashboard', weight: 3 },
      { term: 'admin', weight: 2 },
      { term: 'chart', weight: 2 },
      { term: 'analytics', weight: 2 },
      { term: 'statistics', weight: 2 },
      { term: 'data', weight: 1 },
      { term: 'metrics', weight: 2 },
      { term: 'reports', weight: 2 }
    ];
    
    return indicators
      .filter(indicator => content.includes(indicator.term))
      .map(indicator => indicator.term);
  }
  
  private static checkBlogFeatures(content: string): string[] {
    const indicators = [
      { term: 'blog', weight: 3 },
      { term: 'article', weight: 2 },
      { term: 'post', weight: 2 },
      { term: 'comment', weight: 2 },
      { term: 'category', weight: 2 },
      { term: 'author', weight: 1 },
      { term: 'tags', weight: 1 },
      { term: 'archive', weight: 1 }
    ];
    
    return indicators
      .filter(indicator => content.includes(indicator.term))
      .map(indicator => indicator.term);
  }
  
  private static checkLandingFeatures(content: string): string[] {
    const indicators = [
      { term: 'landing', weight: 3 },
      { term: 'hero', weight: 2 },
      { term: 'cta', weight: 2 },
      { term: 'call to action', weight: 2 },
      { term: 'subscribe', weight: 2 },
      { term: 'sign up', weight: 2 },
      { term: 'get started', weight: 2 },
      { term: 'features', weight: 1 },
      { term: 'testimonials', weight: 1 }
    ];
    
    return indicators
      .filter(indicator => content.includes(indicator.term))
      .map(indicator => indicator.term);
  }

  private static checkCulturalFeatures(content: string): string[] {
    const indicators = [
      { term: 'cultural', weight: 3 },
      { term: 'tradition', weight: 2 },
      { term: 'heritage', weight: 2 },
      { term: 'history', weight: 2 },
      { term: 'museum', weight: 2 },
      { term: 'art', weight: 1 },
      { term: 'gallery', weight: 1 },
      { term: 'exhibition', weight: 1 },
      { term: 'educational', weight: 1 }
    ];
    
    return indicators
      .filter(indicator => content.includes(indicator.term))
      .map(indicator => indicator.term);
  }
  
  private static calculateComplexity(content: string, type: ApplicationType): 'low' | 'medium' | 'high' {
    const contentLength = content.length;
    const formCount = (content.match(/<form/g) || []).length;
    const scriptCount = (content.match(/<script/g) || []).length;
    const sectionCount = (content.match(/<section|<div.*class.*section/g) || []).length;
    
    let complexityScore = 0;
    
    // Basado en longitud de contenido
    if (contentLength > 50000) complexityScore += 3;
    else if (contentLength > 20000) complexityScore += 2;
    else complexityScore += 1;
    
    // Basado en formularios
    complexityScore += formCount * 2;
    
    // Basado en scripts
    complexityScore += scriptCount;
    
    // Basado en secciones
    if (sectionCount > 10) complexityScore += 2;
    else if (sectionCount > 5) complexityScore += 1;
    
    // Ajuste por tipo de aplicación
    if (type === 'ecommerce' || type === 'dashboard') complexityScore += 2;
    else if (type === 'blog') complexityScore += 1;
    
    if (complexityScore >= 8) return 'high';
    if (complexityScore >= 4) return 'medium';
    return 'low';
  }
  
  private static estimateComponentCount(content: string, type: ApplicationType): number {
    const sectionCount = (content.match(/<section|<div.*class.*section/g) || []).length;
    const formCount = (content.match(/<form/g) || []).length;
    const navCount = (content.match(/<nav|<ul.*nav/g) || []).length;
    const headerFooterCount = (content.match(/<header|<footer/g) || []).length;
    
    let baseComponents = 5; // App, Layout básico
    baseComponents += sectionCount; // Secciones principales
    baseComponents += formCount * 2; // Formularios y sus campos
    baseComponents += navCount; // Navegaciones
    baseComponents += headerFooterCount; // Headers y footers
    
    // Ajuste por tipo
    const typeMultiplier = {
      'portfolio': 1.2,
      'ecommerce': 1.8,
      'dashboard': 2.0,
      'blog': 1.5,
      'landing': 1.0,
      'cultural': 1.3,
      'generic': 1.0
    };
    
    return Math.ceil(baseComponents * typeMultiplier[type]);
  }
  
  private static getSuggestedServices(type: ApplicationType): string[] {
    const serviceMap: Record<ApplicationType, string[]> = {
      'portfolio': ['DataService', 'ContactService', 'ProjectService', 'ConfigurationService'],
      'ecommerce': ['ProductService', 'CartService', 'OrderService', 'PaymentService', 'DataService'],
      'dashboard': ['DataService', 'ChartService', 'UserService', 'MetricsService', 'ConfigurationService'],
      'blog': ['ContentService', 'CategoryService', 'CommentService', 'SEOService', 'DataService'],
      'landing': ['LeadService', 'ConversionService', 'AnalyticsService', 'ConfigurationService'],
      'cultural': ['ContentService', 'TranslationService', 'MediaService', 'DataService', 'ConfigurationService'],
      'generic': ['DataService', 'ConfigurationService', 'NotificationService']
    };
    
    return serviceMap[type] || serviceMap['generic'];
  }
  
  private static getSuggestedComponents(type: ApplicationType): string[] {
    const componentMap: Record<ApplicationType, string[]> = {
      'portfolio': ['Header', 'Footer', 'ProjectCard', 'SkillsList', 'ContactForm', 'Hero', 'About'],
      'ecommerce': ['Header', 'Footer', 'ProductCard', 'Cart', 'Checkout', 'ProductList', 'Search'],
      'dashboard': ['Header', 'Sidebar', 'Chart', 'DataTable', 'StatsCard', 'UserProfile', 'Navigation'],
      'blog': ['Header', 'Footer', 'ArticleCard', 'CommentSection', 'CategoryFilter', 'SearchBox'],
      'landing': ['Hero', 'Features', 'Testimonials', 'CTA', 'Header', 'Footer', 'ContactForm'],
      'cultural': ['Header', 'Footer', 'Gallery', 'InteractiveMap', 'Timeline', 'MediaPlayer', 'ContentCard'],
      'generic': ['Header', 'Footer', 'Card', 'Button', 'Form', 'Navigation']
    };
    
    return componentMap[type] || componentMap['generic'];
  }
}

export type ApplicationType = 'portfolio' | 'ecommerce' | 'dashboard' | 'blog' | 'landing' | 'cultural' | 'generic';
```

## 🏗️ **Arquitectura Adaptativa Mejorada**

```
src/app/
├── core/                           # Servicios y configuración principal
│   ├── services/
│   │   ├── data.service.ts        # Gestión central de datos con Signals
│   │   ├── configuration.service.ts # Configuración de la aplicación
│   │   ├── notification.service.ts # Sistema de notificaciones
│   │   └── [domain-specific].service.ts # Servicios específicos del dominio
│   ├── interfaces/
│   │   ├── app-data.interface.ts
│   │   ├── configuration.interface.ts
│   │   └── [domain].interface.ts
│   └── guards/
│       └── auth.guard.ts          # Si es necesario
├── features/                       # Features específicas del dominio
│   ├── [feature-name]/
│   │   ├── components/
│   │   │   ├── [component-name]/
│   │   │   │   ├── [component-name].component.ts
│   │   │   │   ├── [component-name].component.html
│   │   │   │   └── [component-name].component.scss
│   │   ├── services/              # Servicios específicos de la feature
│   │   ├── interfaces/            # Interfaces específicas
│   │   └── [feature-name].routes.ts # Rutas lazy loaded
├── shared/                         # Componentes y utilidades compartidas
│   ├── components/
│   │   ├── [component-name]/
│   │   │   ├── [component-name].component.ts
│   │   │   ├── [component-name].component.html
│   │   │   └── [component-name].component.scss
│   ├── pipes/
│   │   └── [pipe-name].pipe.ts   # Pipes standalone
│   ├── directives/
│   │   └── [directive-name].directive.ts # Directivas standalone
│   └── utils/
│       └── [utility].util.ts     # Utilidades helper
├── layout/                        # Componentes de layout
│   ├── header/
│   │   ├── header.component.ts
│   │   ├── header.component.html
│   │   └── header.component.scss
│   ├── footer/
│   │   ├── footer.component.ts
│   │   ├── footer.component.html
│   │   └── footer.component.scss
│   └── sidebar/                   # Si es necesario
├── app.component.ts               # Componente raíz standalone
├── app.component.html             # Template del componente raíz
├── app.routes.ts                  # Configuración de rutas principal
└── main.ts                        # Bootstrap de la aplicación
```

## ✅ **Checklist de Migración Angular 20**

### Pre-migración
- [ ] Analizar HTML original y detectar tipo de aplicación
- [ ] Identificar componentes necesarios y servicios requeridos
- [ ] Verificar framework CSS utilizado (Bootstrap, Tailwind, etc.)
- [ ] Mapear funcionalidades JavaScript existentes

### Configuración del Proyecto
- [ ] Crear package.json con Angular 20.1.0+ exacto
- [ ] Configurar TypeScript 5.8.2 (versión exacta requerida)
- [ ] Configurar angular.json con @angular/build:application
- [ ] Configurar tsconfig.json con moduleResolution: "bundler"
- [ ] Instalar Tailwind CSS v3.4.17 (NO v4 que es incompatible)
- [ ] Crear tailwind.config.js con sistema de colores personalizado
- [ ] Crear postcss.config.js con sintaxis de objeto
- [ ] Configurar styles.scss con @use en lugar de @import
- [ ] Instalar @tailwindcss/typography, postcss y autoprefixer
- [ ] Verificar compatibilidad Zone.js 0.15.0

### Desarrollo
- [ ] Crear app.component.ts standalone como componente raíz
- [ ] Separar templates HTML de archivos TypeScript (templateUrl)
- [ ] Implementar servicios con Signals (DataService, ConfigurationService, etc.)
- [ ] Crear componentes standalone con OnPush change detection
- [ ] Configurar rutas con loadComponent() para lazy loading
- [ ] Implementar inject() en lugar de constructor injection
- [ ] Aplicar interfaces TypeScript estrictas

### Testing & Build
- [ ] Verificar build de producción funcional
- [ ] Probar lazy loading de componentes
- [ ] Verificar compatibilidad de dependencias
- [ ] Testing básico de componentes standalone

### Optimización
- [ ] Verificar tree-shaking funcionando correctamente
- [ ] Optimizar bundle size con análisis webpack
- [ ] Implementar estrategias de caching apropiadas
- [ ] Verificar performance con Angular DevTools

### Documentación
- [ ] Crear README.md con instrucciones de setup
- [ ] Documentar arquitectura de servicios y componentes
- [ ] Incluir scripts de npm y comandos de desarrollo
- [ ] Documentar configuración específica del dominio

## 🎨 **PostCSS Configuration (postcss.config.js)**

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## ⚠️ **Solución de Problemas Comunes**

### Error: "Cannot find module 'postcss'"
```bash
npm install postcss autoprefixer --save-dev
```

### Error: "Tailwind CSS v4 PostCSS plugin error"
```bash
# Desinstalar Tailwind v4 e instalar v3
npm uninstall tailwindcss
npm install tailwindcss@^3.4.17 --save-dev
```

### Warning: "Sass @import rules are deprecated"
```scss
// ❌ Incorrecto (deprecado)
@import 'tailwindcss/base';
@import 'tailwindcss/components'; 
@import 'tailwindcss/utilities';

// ✅ Correcto (moderno)
@use 'tailwindcss/base';
@use 'tailwindcss/components';
@use 'tailwindcss/utilities';
```

### Configuración PostCSS correcta
```javascript
// ❌ Incorrecto (array sintaxis)
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

// ✅ Correcto (object sintaxis)
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## 🚀 **Comandos de Verificación**

```bash
# Verificar que ng serve funciona
ng serve

# Verificar build de producción
ng build

# Verificar versiones críticas
npm list @angular/core typescript tailwindcss

# Estructura de archivos requerida
├── tailwind.config.js
├── postcss.config.js
└── src/
    └── styles.scss (con @use, no @import)
```

---

**🎯 Este prompt incluye todas las correcciones para evitar errores de PostCSS, Tailwind CSS v4 incompatibilidades y warnings de Sass deprecados. Garantiza una migración exitosa con Angular 20 + Tailwind CSS v3.4.17 completamente funcional.**