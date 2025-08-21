import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
  PLATFORM_ID,
  OnInit,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { CommonModule } from "@angular/common";
import { CardComponent } from "../../shared/components/card/card.component";

interface TraditionalQuote {
  text: string;
  author?: string;
  delay: number;
}

interface AudioTestimony {
  title: string;
  author: string;
  description: string;
  duration: string;
  isPlaying: boolean;
}

@Component({
  selector: "app-testimonials",
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: "./testimonials.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  // Signals para estado del componente
  readonly isPlaying = signal(false);

  // Computed para frases tradicionales
  readonly traditionalQuotes = computed<TraditionalQuote[]>(() => [
    {
      text: "Si fuera facil, cualquiera lo haría. El pib es un arte que se hereda con amor y paciencia.",
      author: "Don gilberto - Abuelo materno",
      delay: 0,
    },
    {
      text: "En el Hanal Pixán, la muerte no es el final, sino el inicio de otra forma de estar presente",
      delay: 200,
    },
    {
      text: "El aroma del pib los llama, el amor los mantiene cerca",
      author: "Tradición Familiar",
      delay: 400,
    },
    {
      text: "Mientras haya memoria, hay camino de regreso",
      delay: 600,
    },
  ]);

  // Computed para testimonio de audio
  readonly audioTestimony = computed<AudioTestimony>(() => ({
    title: "Testimonios Familiares",
    author: "Doña María - Abuela materna",
    description: "Cómo preparaba el pib en los tiempos de antes",
    duration: "3:45",
    isPlaying: this.isPlaying(),
  }));

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeLucideIcons();
    }
  }

  toggleAudio(): void {
    this.isPlaying.set(!this.isPlaying());

    // Simular reproducción de audio
    if (this.isPlaying()) {
      setTimeout(() => {
        this.isPlaying.set(false);
      }, 5000); // Simula 5 segundos de reproducción
    }
  }

  private initializeLucideIcons(): void {
    if (typeof window !== "undefined") {
      import("lucide")
        .then((lucide) => {
          lucide.createIcons();
        })
        .catch((error) => {
          console.warn("Lucide icons failed to load:", error);
        });
    }
  }
}
