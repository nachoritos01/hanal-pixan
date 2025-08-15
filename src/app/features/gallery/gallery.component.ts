import { Component, ChangeDetectionStrategy, signal, computed, inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
  aspectRatio: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  // Signal para fotos de la galería
  readonly galleryPhotos = computed<GalleryPhoto[]>(() => [
    {
      src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
      alt: 'Preparación de la masa tradicional',
      caption: 'Amasando con amor la masa tradicional del pib',
      aspectRatio: 'aspect-[4/3]'
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
      alt: 'Altar familiar con fotos',
      caption: 'Nuestro altar familiar con fotos de los abuelitos',
      aspectRatio: 'aspect-[4/5]'
    },
    {
      src: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=400&h=250&fit=crop',
      alt: 'Hojas de plátano preparadas',
      caption: 'Preparando las hojas de plátano para envolver',
      aspectRatio: 'aspect-[8/5]'
    },
    {
      src: 'https://images.unsplash.com/photo-1541199249251-f713e6145474?w=400&h=350&fit=crop',
      alt: 'Flores de cempasúchil',
      caption: 'Flores de cempasúchil para decorar el altar',
      aspectRatio: 'aspect-[8/7]'
    },
    {
      src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop',
      alt: 'Proceso de cocción bajo tierra',
      caption: 'El momento sagrado de enterrar el pib',
      aspectRatio: 'aspect-square'
    },
    {
      src: 'https://images.unsplash.com/photo-1535007522776-b7755fb79669?w=400&h=280&fit=crop',
      alt: 'Familia reunida para la tradición',
      caption: 'Toda la familia reunida para mantener viva la tradición',
      aspectRatio: 'aspect-[10/7]'
    }
  ]);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeLucideIcons();
    }
  }

  private initializeLucideIcons(): void {
    if (typeof window !== 'undefined') {
      import('lucide').then((lucide) => {
        lucide.createIcons();
      }).catch(error => {
        console.warn('Lucide icons failed to load:', error);
      });
    }
  }
}