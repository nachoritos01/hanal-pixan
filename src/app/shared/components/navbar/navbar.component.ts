import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  href: string;
  section?: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  private router = inject(Router);
  
  // Signal para el estado de navegación
  private activeSection = signal<string>('inicio');
  
  // Computed para items de navegación
  readonly navItems = computed<NavItem[]>(() => [
    { label: 'Significado', href: '#significado', section: 'significado' },
    { label: 'El Pib', href: '#pib', section: 'pib' },
    { label: 'Ofrendas', href: '#ofrendas', section: 'ofrendas' },
    { label: 'Xibalbá', href: '#xibalba', section: 'xibalba' },
    { label: 'Créditos', href: '#creditos', section: 'creditos' }
  ]);
  
  // Computed para la sección activa
  readonly isActiveSection = computed(() => this.activeSection());
  
  updateActiveSection(section: string): void {
    this.activeSection.set(section);
  }
}