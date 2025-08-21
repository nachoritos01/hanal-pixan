import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  effect,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "../../shared/components/card/card.component";

interface Memorial {
  id: string;
  src: string;
  alt: string;
  quote: string;
  category: string;
  title?: string;
  description?: string;
  details?: Array<{ label: string; value: string }>;
}

interface RitualElement {
  name: string;
  icon: string;
  description: string;
  isActive: () => boolean;
}

@Component({
  selector: "app-xibalba",
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: "./xibalba.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XibalbaComponent {
  // Signals para estado reactivo
  readonly selectedMemorial = signal<string | null>(null);
  private activeRitualElements = signal<Set<string>>(new Set());
  readonly isRitualActive = signal(false);
  readonly cenoteAnimationDuration = signal(3000);

  // Computed para memorial seleccionado
  readonly selectedMemorialData = computed(() => {
    const selectedId = this.selectedMemorial();
    if (!selectedId) return null;

    const memorial = this.memorialImages().find((m) => m.id === selectedId);
    if (!memorial) return null;

    // Datos extendidos para el memorial seleccionado
    const memorialData: Record<string, any> = {
      "memory-1": {
        title: "Tradición Ancestral",
        description:
          "Los altares familiares representan la continuidad de la tradición maya, donde cada elemento tiene un significado profundo y sagrado.",
        details: [
          { label: "Origen", value: "Tradición Maya" },
          { label: "Elementos", value: "Velas, flores, retratos" },
          { label: "Propósito", value: "Conexión espiritual" },
        ],
      },
      "memory-2": {
        title: "Luz Eterna",
        description:
          "Las velas encendidas simbolizan la luz que guía a las ánimas de regreso a casa, manteniendo viva la conexión entre mundos.",
        details: [
          { label: "Simbolismo", value: "Guía espiritual" },
          { label: "Duración", value: "Toda la noche" },
          { label: "Color", value: "Blanco y amarillo" },
        ],
      },
    };

    return {
      ...memorial,
      ...memorialData[selectedId],
    };
  });

  // Computed para elementos del ritual
  readonly ritualElements = computed<RitualElement[]>(() => {
    const activeElements = this.activeRitualElements();

    return [
      {
        name: "Velas",
        icon: "🕯️",
        description: "Luz que guía a las ánimas",
        isActive: () => activeElements.has("Velas"),
      },
      {
        name: "Incienso",
        icon: "💨",
        description: "Aromas sagrados que purifican",
        isActive: () => activeElements.has("Incienso"),
      },
      {
        name: "Flores",
        icon: "🌸",
        description: "Belleza que honra la memoria",
        isActive: () => activeElements.has("Flores"),
      },
    ];
  });

  // Computed para imágenes memoriales
  readonly memorialImages = computed<Memorial[]>(() => [
    {
      id: "memory-1",
      src: "assets/images/general/galery/IMG_20241102_150935.jpg",
      alt: "Retrato enmarcado en altar familiar",
      quote: "Mientras haya memoria, hay camino de regreso.",
      category: "Tradición",
    },
    {
      id: "memory-2",
      src: "assets/images/general/galery/IMG_20241102_143331.jpg",
      alt: "Velas encendidas iluminando fotografías",
      quote: "Compartimos el pan y el tiempo: los vivos y las ánimas.",
      category: "Luz",
    },
  ]);

  // Computed para texto del botón del ritual
  readonly ritualButtonText = computed(() =>
    this.isRitualActive() ? "Ritual en curso..." : "Activar ritual del cenote"
  );

  // Effect para animar el cenote cuando el ritual está activo
  constructor() {
    effect(() => {
      if (this.isRitualActive()) {
        this.cenoteAnimationDuration.set(1500); // Más rápido durante ritual

        // Desactivar después de 10 segundos
        setTimeout(() => {
          this.isRitualActive.set(false);
          this.cenoteAnimationDuration.set(3000); // Volver a velocidad normal
        }, 10000);
      }
    });
  }

  // Métodos para interacciones
  selectMemorial(memorialId: string): void {
    this.selectedMemorial.set(
      this.selectedMemorial() === memorialId ? null : memorialId
    );
  }

  closeMemorialDetails(): void {
    this.selectedMemorial.set(null);
  }

  toggleRitualElement(elementName: string): void {
    const current = new Set(this.activeRitualElements());

    if (current.has(elementName)) {
      current.delete(elementName);
    } else {
      current.add(elementName);
    }

    this.activeRitualElements.set(current);
  }

  activateCenoteRitual(): void {
    if (this.isRitualActive()) return;

    // Activar todos los elementos del ritual
    this.activeRitualElements.set(new Set(["Velas", "Incienso", "Flores"]));
    this.isRitualActive.set(true);
  }
}
