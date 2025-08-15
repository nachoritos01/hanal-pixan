import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

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
}