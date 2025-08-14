import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  private currentYear = signal(new Date().getFullYear());
  
  readonly copyrightText = computed(() => 
    `© ${this.currentYear()} Hanal Pixán – Proyecto familiar. Hecho con respeto a la tradición maya yucateca.`
  );
  
  readonly footerLinks = computed<FooterLink[]>(() => [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Receta', href: '#pib' },
    { label: 'Xibalbá', href: '#xibalba' }
  ]);
}