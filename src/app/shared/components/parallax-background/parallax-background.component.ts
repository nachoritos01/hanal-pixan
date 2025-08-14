import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, signal, inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface ParallaxLayer {
  id: string;
  factor: number;
  element?: HTMLElement;
}

@Component({
  selector: 'app-parallax-background',
  standalone: true,
  templateUrl: './parallax-background.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParallaxBackgroundComponent implements OnInit, OnDestroy {
  private document = inject(DOCUMENT);
  private elementRef = inject(ElementRef);
  
  private scrollY = signal(0);
  private isScrolling = signal(false);
  
  private layers: ParallaxLayer[] = [
    { id: 'sky', factor: 0.1 },
    { id: 'canopy', factor: 0.25 },
    { id: 'trunk', factor: 0.45 },
    { id: 'roots', factor: 0.7 }
  ];
  
  private rafId?: number;
  private scrollTimeout?: number;

  ngOnInit(): void {
    this.initializeLayers();
    this.bindScrollEvents();
    this.updateParallax();
  }

  ngOnDestroy(): void {
    this.cleanup();
  }

  private initializeLayers(): void {
    this.layers.forEach(layer => {
      const element = this.document.getElementById(layer.id);
      if (element) {
        layer.element = element;
      }
    });
  }

  private bindScrollEvents(): void {
    this.document.addEventListener('scroll', this.onScroll, { passive: true });
  }

  private onScroll = (): void => {
    const currentScrollY = this.document.documentElement.scrollTop || window.pageYOffset;
    this.scrollY.set(currentScrollY);
    
    this.isScrolling.set(true);
    
    // Debounce scroll end detection
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    
    this.scrollTimeout = window.setTimeout(() => {
      this.isScrolling.set(false);
    }, 150);
    
    if (!this.rafId) {
      this.rafId = requestAnimationFrame(this.updateParallax);
    }
  };

  private updateParallax = (): void => {
    const scrollY = this.scrollY();
    
    this.layers.forEach(layer => {
      if (layer.element) {
        const translateY = -scrollY * layer.factor;
        layer.element.style.transform = `translate3d(0, ${translateY}px, 0)`;
        
        // Special opacity handling for roots layer
        if (layer.id === 'roots') {
          const opacity = Math.min(1, 0.3 + scrollY / 1200);
          layer.element.style.opacity = opacity.toString();
        }
      }
    });
    
    this.rafId = undefined;
  };

  private cleanup(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    
    this.document.removeEventListener('scroll', this.onScroll);
  }
}