# Assets Structure - Hanal Pixán

Esta estructura de assets está optimizada para Angular 20 y sigue las mejores prácticas de organización cultural del proyecto.

## 📁 Estructura de Carpetas

```
src/assets/
├── images/                    # Imágenes del proyecto
│   ├── maya/                 # Elementos culturales mayas
│   │   ├── ceiba-tree/       # Imágenes del árbol sagrado
│   │   ├── glyphs/           # Glifos y símbolos mayas
│   │   └── patterns/         # Patrones decorativos
│   ├── ceiba/                # Secciones del árbol Ceiba
│   │   ├── canopy/           # Copa del árbol (hero section)
│   │   ├── trunk/            # Tronco (contenido principal)
│   │   └── roots/            # Raíces (secciones profundas)
│   ├── xibalba/              # Elementos del inframundo
│   │   ├── cenote/           # Imágenes de cenotes
│   │   ├── offerings/        # Ofrendas tradicionales
│   │   └── memorial/         # Elementos memoriales
│   ├── pib/                  # Receta y preparación del pib
│   │   ├── ingredients/      # Ingredientes del mucbipollo
│   │   ├── process/          # Pasos de preparación
│   │   └── final/            # Resultado final
│   └── general/              # Imágenes generales
│       ├── backgrounds/      # Fondos y texturas
│       ├── decorative/       # Elementos decorativos
│       └── ui/               # Elementos de interfaz
├── icons/                    # Iconos SVG
│   ├── navbar/               # Iconos de navegación
│   ├── social/               # Redes sociales
│   ├── cultural/             # Iconos culturales mayas
│   └── ui/                   # Iconos de interfaz
├── fonts/                    # Fuentes tipográficas
│   ├── maya-inspired/        # Fuentes con inspiración maya
│   └── modern/               # Fuentes modernas
├── data/                     # Archivos de datos
│   ├── traditions.json       # Datos de tradiciones
│   ├── recipes.json          # Recetas tradicionales
│   └── calendar.json         # Calendario maya
├── videos/                   # Videos y animaciones
│   ├── rituals/              # Videos de rituales
│   └── background/           # Videos de fondo
├── audio/                    # Archivos de audio
│   ├── ambient/              # Sonidos ambientales
│   └── cultural/             # Música tradicional
├── animations/               # Animaciones
│   └── lottie/               # Animaciones Lottie
└── styles/                   # Recursos de estilos
    └── themes/               # Archivos de temas
```

## 🎨 Convenciones de Nomenclatura

### Imágenes
- **Formato**: `kebab-case.extension`
- **Ejemplos**: 
  - `ceiba-tree-canopy.jpg`
  - `maya-glyph-death.svg`
  - `pib-ingredients-masa.png`

### Iconos
- **Formato**: `action-element.svg`
- **Ejemplos**:
  - `nav-home.svg`
  - `social-facebook.svg`
  - `cultural-copal.svg`

### Videos/Audio
- **Formato**: `type-description.extension`
- **Ejemplos**:
  - `ambient-cenote-sounds.mp3`
  - `ritual-fire-ceremony.mp4`

## 📱 Formatos Recomendados

### Imágenes
- **Hero/Backgrounds**: `.webp` o `.jpg` (optimizadas)
- **Iconos/Glifos**: `.svg` (vectoriales)
- **UI Elements**: `.png` (con transparencia)
- **Thumbnails**: `.webp` (máximo 300kb)

### Videos
- **Background**: `.webm` (comprimido, loop)
- **Documentales**: `.mp4` (H.264)

### Audio
- **Ambiente**: `.mp3` (128kbps)
- **Música**: `.mp3` (192kbps)

## 🔧 Uso en Angular 20

### En Componentes
```typescript
// Importación directa de assets
export class HomeComponent {
  readonly ceibaImage = 'assets/images/maya/ceiba-tree/sacred-tree.webp';
  readonly mayaIcon = 'assets/icons/cultural/ceiba-symbol.svg';
}
```

### En Templates
```html
<!-- Imagen responsiva con lazy loading -->
<img 
  [src]="ceibaImage" 
  alt="Árbol Ceiba sagrado"
  loading="lazy"
  class="w-full h-auto">

<!-- Icono SVG inline -->
<img [src]="mayaIcon" class="w-6 h-6" alt="Símbolo Ceiba">
```

### En Estilos SCSS
```scss
// Background con path relativo
.hero-section {
  background-image: url('assets/images/general/backgrounds/xibalba-mist.jpg');
}
```

## 🚀 Optimización

### Build Process
- Angular automáticamente copia `src/assets/` a `dist/assets/`
- Las imágenes se optimizan durante el build
- Los assets no utilizados no se incluyen en el bundle final

### Lazy Loading
```typescript
// Carga diferida de imágenes
@Component({
  template: `
    <img 
      [src]="imageUrl" 
      loading="lazy"
      [class.loaded]="imageLoaded"
      (load)="onImageLoad()">
  `
})
```

### Performance
- Usar `.webp` para imágenes modernas
- Implementar `loading="lazy"` en imágenes
- Optimizar SVGs con herramientas como SVGO
- Comprimir videos para web

## 📋 Checklist de Assets

- [ ] Imágenes optimizadas (<500kb para hero, <100kb para thumbnails)
- [ ] SVGs minificados y sin código innecesario
- [ ] Videos comprimidos con formatos web
- [ ] Audio en calidad web apropiada
- [ ] Alt text descriptivo para accesibilidad
- [ ] Nombres de archivo descriptivos en kebab-case
- [ ] Respaldo en formatos fallback (.jpg para .webp)

## 🌐 Consideraciones Culturales

### Representación Respetuosa
- Usar imágenes auténticas de tradiciones mayas
- Evitar apropiación cultural inapropiada
- Incluir contexto educativo en alt text
- Respetar la sacralidad de elementos rituales

### Fuentes de Contenido
- Fotografías originales de celebraciones reales
- Ilustraciones culturalmente apropiadas
- Símbolos mayas con significado correcto
- Contenido educativo verificado por expertos

---

*Estructura creada para el proyecto Hanal Pixán - Angular 20*