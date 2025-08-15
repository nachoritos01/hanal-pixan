import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CardVariant = 'default' | 'accent' | 'cenote' | 'glass';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  // Input signals para propiedades del componente
  readonly variant = input<CardVariant>('default');
  readonly padding = input<string>('p-6');
  readonly customClasses = input<string>('');
  
  // Computed para clases CSS dinámicas
  readonly cardClasses = computed(() => {
    const baseClasses = 'rounded-2xl backdrop-blur transition-all duration-300';
    const variantClasses = this.getVariantClasses();
    const paddingClass = this.padding();
    const custom = this.customClasses();
    
    return `${baseClasses} ${variantClasses} ${paddingClass} ${custom}`.trim();
  });
  
  private getVariantClasses(): string {
    const variants: Record<CardVariant, string> = {
      default: 'bg-card ring-1 ring-border hover:bg-card',
      accent: 'bg-accent/10 ring-1 ring-accent/20 hover:bg-accent/15',
      cenote: 'bg-cenote-blue/10 ring-1 ring-cenote-blue/20 hover:bg-cenote-blue/15',
      glass: 'bg-overlay ring-1 ring-border hover:bg-overlay'
    };
    
    return variants[this.variant()];
  }
}