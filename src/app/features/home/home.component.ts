import { Component, ChangeDetectionStrategy, OnInit, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { CommonModule } from '@angular/common';

interface OfferingItem {
  title: string;
  description: string;
  delay: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    CardComponent
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  // Signals para estado reactivo
  readonly isDownloading = signal(false);
  
  // Computed properties para datos
  readonly pibSteps = computed(() => [
    {
      title: '1. Ingredientes',
      description: 'Masa de maíz, recaudo rojo, pollo/pavo, tomate, cebolla, epazote y hojas de plátano.'
    },
    {
      title: '2. Preparación', 
      description: 'Se sazona el guiso, se amasa y se forma el pib; se envuelve con hojas soasadas.'
    },
    {
      title: '3. Cocción en tierra',
      description: 'Se hornea en pib (hornilla bajo tierra) cubierto con hojas y tierra; sabor ahumado único.'
    }
  ]);
  
  readonly galleryImages = computed(() => [
    {
      src: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1200&auto=format&fit=crop',
      alt: 'Amasado del pib'
    },
    {
      src: 'https://images.unsplash.com/photo-1555243896-c709bfa0b564?q=80&w=1200&auto=format&fit=crop',
      alt: 'Hojas de plátano'
    },
    {
      src: 'https://images.unsplash.com/photo-1586201375754-1421e0aa2fda?q=80&w=1200&auto=format&fit=crop',
      alt: 'Cocción bajo tierra'
    }
  ]);
  
  readonly offeringItems = computed<OfferingItem[]>(() => [
    {
      title: 'Mucbipollo',
      description: 'Protagonista de la mesa; masa y guiso envueltos en hoja de plátano.',
      delay: 0
    },
    {
      title: 'Atole',
      description: 'Bebida tibia para el alma: maíz, canela y piloncillo.',
      delay: 50
    },
    {
      title: 'Dulce de calabaza',
      description: 'Cocido lentamente con canela y clavo.',
      delay: 100
    },
    {
      title: 'Frutas',
      description: 'Naranja, mandarina y plátano; aromas que guían el regreso.',
      delay: 150
    }
  ]);
  
  readonly memorialImages = computed(() => [
    {
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
      alt: 'Retrato enmarcado',
      quote: 'Mientras haya memoria, hay camino de regreso.'
    },
    {
      src: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146e?q=80&w=1200&auto=format&fit=crop',
      alt: 'Velas encendidas',
      quote: 'Compartimos el pan y el tiempo: los vivos y las ánimas.'
    }
  ]);
  
  readonly downloadButtonText = computed(() => 
    this.isDownloading() ? 'Descargando...' : 'Descargar receta (PDF)'
  );

  ngOnInit(): void {
    // Initialize scroll-based animations if needed
    if (isPlatformBrowser(this.platformId)) {
      this.initializeScrollAnimations();
    }
  }

  downloadRecipe(): void {
    this.isDownloading.set(true);
    
    // Simulate download process
    setTimeout(() => {
      // In a real app, this would trigger an actual PDF download
      console.log('Downloading recipe PDF...');
      this.isDownloading.set(false);
    }, 2000);
  }

  private initializeScrollAnimations(): void {
    // Initialize AOS or custom scroll animations
    if (typeof window !== 'undefined') {
      import('aos').then((AOSModule) => {
        const AOS = AOSModule.default || AOSModule;
        AOS.init({
          once: true,
          duration: 700,
          easing: 'ease-out-cubic'
        });
      }).catch(error => {
        console.warn('AOS animation library failed to load:', error);
      });
    }
  }
}