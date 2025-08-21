import { Component, ChangeDetectionStrategy, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface NavItem {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  private platformId = inject(PLATFORM_ID);
  
  // Signal para el estado del menú móvil
  private isMobileMenuOpen = signal(false);
  
  // Computed para items de navegación
  readonly navItems = computed<NavItem[]>(() => [
    { label: 'Inicio', href: '/' },
    { label: 'El Pib', href: '/pib' },
    { label: 'Cultura', href: '/cultura' },
    { label: 'Galería', href: '/galeria' },
    { label: 'Testimonios', href: '/testimonios' },
    { label: 'Xibalbá', href: '/xibalba' },
    { label: 'Compartir', href: '/compartir' }
  ]);
  
  // Computed para acceder al estado del menú móvil
  readonly mobileMenuOpen = computed(() => this.isMobileMenuOpen());
  
  // Método para alternar el menú móvil
  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(current => !current);
    
    // Prevenir scroll en el body cuando el menú está abierto
    if (isPlatformBrowser(this.platformId)) {
      const body = document.body;
      if (this.isMobileMenuOpen()) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    }
  }
  
  // Método para cerrar el menú móvil
  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }
}