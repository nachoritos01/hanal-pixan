import { Component, ChangeDetectionStrategy, signal, computed, inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/components/card/card.component';

interface CulturalElement {
  title: string;
  description: string;
  quote: string;
  icon: string;
  delay: number;
}

@Component({
  selector: 'app-cultural-elements',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './cultural-elements.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CulturalElementsComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  // Signal para elementos culturales
  readonly culturalElements = computed<CulturalElement[]>(() => [
    {
      title: 'Comida Tradicional',
      description: 'Dulce de calabaza, atole de masa, jícamas y mandarinas, pan de muerto, chocolate caliente y balché (bebida ceremonial) forman parte del festín ancestral.',
      quote: 'Cada platillo lleva el amor de generaciones',
      icon: 'chef-hat',
      delay: 0
    },
    {
      title: 'Paseo de las Ánimas',
      description: 'En Mérida, la procesión nocturna del 31 de octubre recorre las calles del centro histórico, recreando el camino que hacían las ánimas para visitar a sus familiares.',
      quote: 'Un espectáculo mágico que llena de misticismo la ciudad blanca',
      icon: 'users',
      delay: 200
    },
    {
      title: 'Tradición de Pomuch',
      description: 'En el municipio de Hecelchakán, las familias limpian y visten los huesos de sus difuntos, manteniendo vivo el vínculo ancestral con los antepasados.',
      quote: 'Una muestra de amor que trasciende la muerte',
      icon: 'heart',
      delay: 400
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