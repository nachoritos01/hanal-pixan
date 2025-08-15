import { Component, ChangeDetectionStrategy, inject, PLATFORM_ID, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { PetalsAnimationComponent } from '../components/petals-animation/petals-animation.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    PetalsAnimationComponent
  ],
  templateUrl: './main-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private scrollHandler?: () => void;
  
  // Signal para controlar la visibilidad del botón scroll to top
  private scrollY = signal(0);
  readonly showScrollButton = computed(() => this.scrollY() > 300);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeParallaxEffect();
      this.initializeLucideIcons();
      
      // Re-inicializar iconos después de cambios en DOM
      setTimeout(() => {
        this.initializeLucideIcons();
      }, 100);

      // Observer para re-inicializar iconos cuando se añadan nuevos elementos
      this.setupIconObserver();
    }
  }

  private setupIconObserver(): void {
    if (typeof window !== 'undefined' && typeof MutationObserver !== 'undefined') {
      const observer = new MutationObserver(() => {
        // Debounce para evitar múltiples llamadas
        setTimeout(() => {
          this.initializeLucideIcons();
        }, 100);
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.scrollHandler) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  private initializeParallaxEffect(): void {
    if (typeof window === 'undefined') return;

    this.scrollHandler = () => {
      const scrolled = window.pageYOffset;
      
      // Actualizar signal para scroll to top button
      this.scrollY.set(scrolled);
      
      // Parallax effect
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
        const yPos = scrolled * speed;
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', this.scrollHandler, { passive: true });
  }

  private initializeLucideIcons(): void {
    if (typeof window !== 'undefined') {
      // Método más robusto para inicializar iconos Lucide
      import('lucide').then((lucide) => {
        // Usar setTimeout para asegurar que el DOM esté completamente cargado
        setTimeout(() => {
          lucide.createIcons();
          console.log('Lucide icons initialized');
        }, 50);
      }).catch(error => {
        console.error('Lucide icons failed to load:', error);
        // Fallback: intentar cargar desde CDN
        this.loadLucideFromCDN();
      });
    }
  }

  private loadLucideFromCDN(): void {
    if (typeof document !== 'undefined') {
      // Cargar Lucide desde CDN como fallback
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.js';
      script.onload = () => {
        setTimeout(() => {
          (window as any).lucide?.createIcons();
          console.log('Lucide icons loaded from CDN');
        }, 100);
      };
      document.head.appendChild(script);
    }
  }

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}