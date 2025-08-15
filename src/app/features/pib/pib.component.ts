import { Component, ChangeDetectionStrategy, signal, computed, effect, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/components/card/card.component';

interface Ingredient {
  name: string;
  amount: string;
  unit: string;
  essential: boolean;
}

interface RecipeStep {
  title: string;
  description: string;
  tips?: string;
  duration?: string;
}

@Component({
  selector: 'app-pib',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardComponent
  ],
  templateUrl: './pib.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PibComponent {
  private fb = inject(FormBuilder);
  
  // Signal para porciones base
  private basePortions = signal(8);
  
  // Form reactivo para calculadora
  readonly portionsForm = this.fb.group({
    portions: [8, [Validators.required, Validators.min(2), Validators.max(20)]]
  });
  
  // Signal para porciones calculadas
  private portionsMultiplier = signal(1);
  
  // Computed para porciones finales
  readonly calculatedPortions = computed(() => {
    const formValue = this.portionsForm.get('portions')?.value || 8;
    return formValue;
  });
  
  // Effect para actualizar multiplicador cuando cambie el form
  constructor() {
    effect(() => {
      const formValue = this.portionsForm.get('portions')?.value || 8;
      this.portionsMultiplier.set(formValue / this.basePortions());
    });
  }
  
  // Computed para ingredientes ajustados
  readonly massaIngredients = computed<Ingredient[]>(() => {
    const multiplier = this.portionsMultiplier();
    return [
      { name: 'Masa de maíz', amount: `${(2 * multiplier).toFixed(1)}`, unit: 'kg', essential: true },
      { name: 'Manteca de cerdo', amount: `${(250 * multiplier).toFixed(0)}`, unit: 'g', essential: true },
      { name: 'Sal', amount: `${(2 * multiplier).toFixed(1)}`, unit: 'cdtas', essential: true },
      { name: 'Caldo de pollo', amount: `${(500 * multiplier).toFixed(0)}`, unit: 'ml', essential: false },
      { name: 'Polvo de hornear', amount: `${(1 * multiplier).toFixed(1)}`, unit: 'cdta', essential: false }
    ];
  });
  
  readonly fillingIngredients = computed<Ingredient[]>(() => {
    const multiplier = this.portionsMultiplier();
    return [
      { name: 'Pollo', amount: `${(1.5 * multiplier).toFixed(1)}`, unit: 'kg', essential: true },
      { name: 'Recaudo rojo', amount: `${(100 * multiplier).toFixed(0)}`, unit: 'g', essential: true },
      { name: 'Jitomate', amount: `${(4 * multiplier).toFixed(0)}`, unit: 'pzas', essential: true },
      { name: 'Cebolla blanca', amount: `${(2 * multiplier).toFixed(0)}`, unit: 'pzas', essential: true },
      { name: 'Epazote', amount: `${(1 * multiplier).toFixed(0)}`, unit: 'manojo', essential: true },
      { name: 'Hojas de plátano', amount: `${(6 * multiplier).toFixed(0)}`, unit: 'hojas', essential: true },
      { name: 'Sal y pimienta', amount: 'al gusto', unit: '', essential: true }
    ];
  });
  
  readonly recipeSteps = computed<RecipeStep[]>(() => [
    {
      title: 'Preparar el recaudo',
      description: 'Disuelve el recaudo rojo en un poco de caldo tibio hasta formar una pasta homogénea. Reserva.',
      duration: '10 min',
      tips: 'Si no tienes recaudo rojo, puedes hacer uno casero con achiote, comino, orégano, pimienta y ajo.'
    },
    {
      title: 'Cocinar el guiso',
      description: 'En una olla grande, cocina el pollo cortado en piezas con cebolla, jitomate picado y el recaudo. Condimenta con sal, pimienta y epazote. Cocina hasta que el pollo esté tierno.',
      duration: '45 min',
      tips: 'El guiso debe quedar jugoso pero no caldoso, ya que la masa absorberá parte del líquido.'
    },
    {
      title: 'Preparar la masa',
      description: 'Mezcla la masa de maíz con manteca derretida, sal y un poco de caldo del guiso. Amasa hasta obtener una consistencia suave y maleable.',
      duration: '15 min',
      tips: 'La masa debe quedar húmeda pero no pegajosa. Puedes agregar más caldo si está seca.'
    },
    {
      title: 'Armar el pib',
      description: 'Extiende masa en el centro de una hoja de plátano soasada. Coloca el guiso encima y cubre con más masa. Envuelve bien con la hoja.',
      duration: '20 min',
      tips: 'Soasa las hojas de plátano sobre fuego directo hasta que cambien de color. Esto las hace más flexibles.'
    },
    {
      title: 'Cocinar en el pib',
      description: 'Tradicional: entierra en brasas. Moderno: hornea a 180°C por 1.5-2 horas, cubriendo con papel aluminio.',
      duration: '1.5-2 hrs',
      tips: 'Si usas horno convencional, coloca un recipiente con agua en la base para mantener la humedad.'
    }
  ]);
}