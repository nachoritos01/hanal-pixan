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

interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
  aspectRatio: string;
}

@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./gallery.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  // Signal para fotos de la galería - COLECCIÓN COMPLETA de la tradición Hanal Pixán 2024
  readonly galleryPhotos = computed<GalleryPhoto[]>(() => [
    // === PREPARACIÓN MATUTINA (09:22 - 09:36) ===
    {
      src: "assets/images/general/galery/IMG_20241102_092238.jpg",
      alt: "Preparación matutina del altar",
      caption: "Iniciando la preparación del altar familiar en la madrugada",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_092354.jpg",
      alt: "Elementos del altar",
      caption: "Colocando los primeros elementos sagrados del altar",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_092400.jpg",
      alt: "Preparativos familiares",
      caption: "La familia organiza todos los elementos necesarios",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_092404.jpg",
      alt: "Detalles del altar",
      caption: "Cada detalle del altar tiene un significado especial",
      aspectRatio: "aspect-[4/3]",
    },

    // === PREPARACIÓN DE LA MASA (09:30 - 09:36) ===
    {
      src: "assets/images/general/galery/IMG_20241102_093053.jpg",
      alt: "Masa tradicional del pib",
      caption: "Preparando la masa con ingredientes tradicionales mayas",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_093059.jpg",
      alt: "Amasado tradicional",
      caption: "El arte ancestral de amasar con las manos",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_093311.jpg",
      alt: "Textura perfecta",
      caption: "Consiguiendo la textura perfecta de la masa",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_093312.jpg",
      alt: "Manos expertas",
      caption: "Las manos expertas de la abuela trabajando la masa",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_093442.jpg",
      alt: "Proceso artesanal",
      caption: "El proceso artesanal que se ha preservado por generaciones",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_093444.jpg",
      alt: "Ingredientes naturales",
      caption: "Solo ingredientes naturales siguiendo la receta ancestral",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_093606.jpg",
      alt: "Masa lista",
      caption: "La masa está lista para formar el mucbipollo",
      aspectRatio: "aspect-[3/4]",
    },

    // === PREPARACIÓN DE OFRENDAS (09:46 - 09:51) ===
    {
      src: "assets/images/general/galery/IMG_20241102_094629.jpg",
      alt: "Colocación de ofrendas",
      caption: "Disponiendo cuidadosamente las ofrendas en el altar",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_094639.jpg",
      alt: "Altar familiar",
      caption: "El altar familiar toma forma con cada ofrenda",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_094837.jpg",
      alt: "Elementos sagrados",
      caption: "Cada elemento tiene su lugar sagrado en el altar",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_095117.jpg",
      alt: "Fotografías familiares",
      caption: "Las fotografías de nuestros seres queridos presiden el altar",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_095121.jpg",
      alt: "Recuerdos eternos",
      caption: "Cada fotografía cuenta una historia de amor eterno",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_095137.jpg",
      alt: "Memoria viva",
      caption: "Manteniendo viva la memoria de nuestros ancestros",
      aspectRatio: "aspect-[3/4]",
    },

    // === FLORES Y VELAS SAGRADAS (10:24 - 10:29) ===
    {
      src: "assets/images/general/galery/IMG_20241102_102451.jpg",
      alt: "Flores de cempasúchil",
      caption: "Flores doradas que guían a las almas de vuelta a casa",
      aspectRatio: "aspect-[5/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_102504.jpg",
      alt: "Pétalos dorados",
      caption: "Los pétalos dorados forman el camino sagrado",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_102511.jpg",
      alt: "Arreglos florales",
      caption: "Hermosos arreglos florales adornan el altar",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_102519.jpg",
      alt: "Velas ceremoniales",
      caption: "Las velas ceremoniales esperan ser encendidas",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_102520.jpg",
      alt: "Luz sagrada",
      caption: "La luz sagrada que conecta mundos",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_102537.jpg",
      alt: "Preparación ritual",
      caption: "Cada vela se coloca con intención y respeto",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_102541.jpg",
      alt: "Momento sagrado",
      caption: "El momento sagrado de preparar la luz",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_102549.jpg",
      alt: "Tradición luminosa",
      caption: "La tradición de iluminar el camino de las almas",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_102551.jpg",
      alt: "Llama eterna",
      caption: "Cada llama representa una conexión eterna",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_102636.jpg",
      alt: "Encendido de velas sagradas",
      caption: "Las velas iluminan el camino de nuestros ancestros",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_102647.jpg",
      alt: "Luz y sombra",
      caption: "El juego de luz y sombra crea una atmósfera sagrada",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_102654.jpg",
      alt: "Resplandor dorado",
      caption: "El resplandor dorado baña todo el altar",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_102710.jpg",
      alt: "Ambiente místico",
      caption: "Se crea un ambiente místico y reverente",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_102714.jpg",
      alt: "Espiritualidad maya",
      caption: "La espiritualidad maya se hace presente",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_102726.jpg",
      alt: "Conexión ancestral",
      caption: "Sintiendo la conexión con nuestros ancestros",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_102742.jpg",
      alt: "Altar iluminado",
      caption: "El altar completamente iluminado es hermoso",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_102836.jpg",
      alt: "Belleza sagrada",
      caption: "La belleza sagrada del Hanal Pixán",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_102936.jpg",
      alt: "Momento de reflexión",
      caption: "Un momento de reflexión ante el altar",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_103001.jpg",
      alt: "Tradición viva",
      caption: "La tradición cobra vida en cada detalle",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_103008.jpg",
      alt: "Herencia cultural",
      caption: "Nuestra herencia cultural se mantiene viva",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_103018.jpg",
      alt: "Respeto ancestral",
      caption: "El profundo respeto hacia nuestros ancestros",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_103357.jpg",
      alt: "Altar completo",
      caption: "El altar está completo y listo para recibir",
      aspectRatio: "aspect-[3/4]",
    },

    // === PREPARACIÓN DEL PIB (10:44 - 10:47) ===
    {
      src: "assets/images/general/galery/IMG_20241102_104441.jpg",
      alt: "Relleno del pib",
      caption: "Preparando el relleno tradicional con pollo y especias",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_104607.jpg",
      alt: "Ingredientes frescos",
      caption: "Solo los mejores ingredientes frescos",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_104609.jpg",
      alt: "Sazón tradicional",
      caption: "El sazón tradicional que se pasa de generación en generación",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_104611.jpg",
      alt: "Mezcla perfecta",
      caption: "Consiguiendo la mezcla perfecta de sabores",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_104618.jpg",
      alt: "Armado del pib",
      caption: "Comenzando a armar el mucbipollo",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_104702.jpg",
      alt: "Técnica ancestral",
      caption: "Aplicando la técnica ancestral de armado",
      aspectRatio: "aspect-[4/3]",
    },

    // === ENVOLVIENDO EN HOJAS (11:30 - 11:31) ===
    {
      src: "assets/images/general/galery/IMG_20241102_113016.jpg",
      alt: "Envolviendo en hojas de plátano",
      caption: "El arte ancestral de envolver el pib en hojas de plátano",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_113032.jpg",
      alt: "Hojas preparadas",
      caption: "Las hojas de plátano previamente preparadas y limpias",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_113039.jpg",
      alt: "Envolviendo con cuidado",
      caption: "Envolviendo con todo el cuidado del mundo",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_113131.jpg",
      alt: "Pib envuelto",
      caption: "El pib perfectamente envuelto y listo",
      aspectRatio: "aspect-[4/3]",
    },

    // === ALTAR TERMINADO (11:41 - 11:43) ===
    {
      src: "assets/images/general/galery/IMG_20241102_114141.jpg",
      alt: "Altar completo con fotos familiares",
      caption: "El altar terminado con fotografías de nuestros seres queridos",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_114203.jpg",
      alt: "Vista panorámica del altar",
      caption: "Una vista panorámica del hermoso altar familiar",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_114340.jpg",
      alt: "Detalles finales",
      caption: "Los últimos detalles que hacen perfecto el altar",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_114342.jpg",
      alt: "Altar majestuoso",
      caption: "El altar luce majestuoso y lleno de amor",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_114346.jpg",
      alt: "Obra de arte familiar",
      caption: "Una verdadera obra de arte familiar",
      aspectRatio: "aspect-[4/3]",
    },

    // === PREPARACIÓN PARA ENTERRAR (11:47 - 11:48) ===
    {
      src: "assets/images/general/galery/IMG_20241102_114701.jpg",
      alt: "Preparación para el entierro",
      caption: "Listos para enterrar el pib en las brasas sagradas",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_114704.jpg",
      alt: "Hoyo preparado",
      caption: "El hoyo está preparado con las brasas perfectas",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_114707.jpg",
      alt: "Momento crucial",
      caption: "El momento crucial de enterrar el pib",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_114714.jpg",
      alt: "Colocación cuidadosa",
      caption: "Colocando el pib con extremo cuidado",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_114723.jpg",
      alt: "Enterrando tradición",
      caption: "Enterrando no solo comida, sino tradición",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_114725.jpg",
      alt: "Tierra sagrada",
      caption: "La tierra sagrada que cocinará nuestro pib",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_114730.jpg",
      alt: "Sellando el hoyo",
      caption: "Sellando el hoyo con tierra y amor",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_114744.jpg",
      alt: "Paciencia ancestral",
      caption: "Ahora toca esperar con paciencia ancestral",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_114847.jpg",
      alt: "Manos de barro",
      caption: "Las manos manchadas de barro son símbolo de trabajo",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_114852.jpg",
      alt: "Esperando el milagro",
      caption: "Esperando el milagro de la cocción bajo tierra",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_114856.jpg",
      alt: "Tradición enterrada",
      caption: "La tradición literalmente enterrada en la tierra",
      aspectRatio: "aspect-[3/4]",
    },

    // === REUNIÓN FAMILIAR (11:50 - 11:57) ===
    {
      src: "assets/images/general/galery/IMG_20241102_115045.jpg",
      alt: "Familia reunida",
      caption: "Tres generaciones unidas en la tradición del Hanal Pixán",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115048.jpg",
      alt: "Generaciones juntas",
      caption: "Generaciones juntas compartiendo conocimiento",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115052.jpg",
      alt: "Sabiduría compartida",
      caption: "La sabiduría se comparte en estos momentos",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115059.jpg",
      alt: "Historias familiares",
      caption: "Contando historias familiares mientras esperamos",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115104.jpg",
      alt: "Amor familiar",
      caption: "El amor familiar se siente en el ambiente",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115109.jpg",
      alt: "Unión familiar",
      caption: "La unión familiar es lo más importante",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115117.jpg",
      alt: "Transmitiendo tradición",
      caption: "Transmitiendo la tradición a los más jóvenes",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115130.jpg",
      alt: "Momento especial",
      caption: "Un momento especial que quedará en la memoria",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115145.jpg",
      alt: "Conexión generacional",
      caption: "La conexión generacional es palpable",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115151.jpg",
      alt: "Respeto mutuo",
      caption: "El respeto mutuo entre generaciones",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115156.jpg",
      alt: "Legado vivo",
      caption: "El legado maya vivo en cada gesto",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115336.jpg",
      alt: "Momento de oración",
      caption: "Momento sagrado de conexión con nuestros ancestros",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115339.jpg",
      alt: "Espiritualidad familiar",
      caption: "La espiritualidad familiar se manifiesta",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115341.jpg",
      alt: "Recogimiento",
      caption: "Momento de recogimiento y reflexión",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115345.jpg",
      alt: "Paz interior",
      caption: "La paz interior que brinda la tradición",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115531.jpg",
      alt: "Contemplación",
      caption: "Momentos de contemplación ante el altar",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115538.jpg",
      alt: "Devoción familiar",
      caption: "La devoción familiar hacia los ancestros",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115543.jpg",
      alt: "Tradición heredada",
      caption: "Una tradición heredada con orgullo",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115546.jpg",
      alt: "Cultura maya viva",
      caption: "La cultura maya sigue viva en nuestras familias",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115548.jpg",
      alt: "Identidad cultural",
      caption: "Fortaleciendo nuestra identidad cultural",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115602.jpg",
      alt: "Orgullo ancestral",
      caption: "El orgullo de nuestras raíces ancestrales",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115726.jpg",
      alt: "Esperando juntos",
      caption: "Esperando juntos que el pib termine de cocinarse",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_115727.jpg",
      alt: "Paciencia compartida",
      caption: "La paciencia compartida mientras esperamos",
      aspectRatio: "aspect-[4/3]",
    },

    // === DESENTERRANDO EL PIB (13:52 - 14:04) ===
    {
      src: "assets/images/general/galery/IMG_20241102_135212.jpg",
      alt: "Desenterrando el pib",
      caption:
        "El momento especial de destapar el pib después de horas bajo tierra",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_135224.jpg",
      alt: "Excavando con cuidado",
      caption: "Excavando con cuidado para no dañar nuestro tesoro",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_140457.jpg",
      alt: "Pib al descubierto",
      caption: "El pib al descubierto después de horas de cocción",
      aspectRatio: "aspect-[4/3]",
    },

    // === PIB TERMINADO (14:11 - 14:33) ===
    {
      src: "assets/images/general/galery/IMG_20241102_141144.jpg",
      alt: "Pib recién salido de la tierra",
      caption:
        "El pib recién salido de la tierra, dorado, listo para compartir en familia",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_141155.jpg",
      alt: "Perfección culinaria",
      caption: "La perfección culinaria lograda con métodos ancestrales",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_143331.jpg",
      alt: "Resultado magnífico",
      caption: "El resultado magnífico de horas de preparación",
      aspectRatio: "aspect-[4/3]",
    },

    // === CELEBRACIÓN Y COMPARTIR (15:02 - 15:15) ===
    {
      src: "assets/images/general/galery/IMG_20241102_150228.jpg",
      alt: "Compartiendo la tradición",
      caption: "El momento más especial: compartir el pib con toda la familia",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_150231.jpg",
      alt: "Mesa familiar",
      caption: "La mesa familiar se llena de alegría y tradición",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_150236.jpg",
      alt: "Degustación familiar",
      caption: "Toda la familia degusta el fruto de su trabajo",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_150924.jpg",
      alt: "Niños aprendiendo la tradición",
      caption:
        "Los pequeños aprenden de sus abuelos la importancia del Hanal Pixán",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_150927.jpg",
      alt: "Transmisión cultural",
      caption: "La transmisión cultural de padres a hijos",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_150930.jpg",
      alt: "Aprendizaje vivencial",
      caption: "El aprendizaje vivencial es el más valioso",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_150935.jpg",
      alt: "Sabiduría ancestral",
      caption: "La sabiduría ancestral se transmite en cada bocado",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_150937.jpg",
      alt: "Generaciones unidas",
      caption: "Las generaciones unidas por el amor y la tradición",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_150944.jpg",
      alt: "Felicidad compartida",
      caption: "La felicidad compartida en momentos como este",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_150945.jpg",
      alt: "Tradición viva",
      caption: "Una tradición que sigue viva gracias a familias como esta",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_150954.jpg",
      alt: "Momento perfecto",
      caption: "Un momento perfecto que perdurará en la memoria",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_151002.jpg",
      alt: "Alegría familiar",
      caption: "La alegría familiar se refleja en cada rostro",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_151206.jpg",
      alt: "Celebración familiar",
      caption: "Unidos en tradición, amor y memoria de nuestros seres queridos",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_151210.jpg",
      alt: "Unión eterna",
      caption: "La unión eterna que trasciende generaciones",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_151539.jpg",
      alt: "Final perfecto",
      caption: "Un final perfecto para una tradición perfecta",
      aspectRatio: "aspect-[4/3]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_151544.jpg",
      alt: "Memoria eterna",
      caption: "Estos momentos quedarán en nuestra memoria eterna",
      aspectRatio: "aspect-[3/4]",
    },
    {
      src: "assets/images/general/galery/IMG_20241102_151554.jpg",
      alt: "Hanal Pixán 2024",
      caption: "Hanal Pixán 2024: Una celebración inolvidable",
      aspectRatio: "aspect-[4/3]",
    },
  ]);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeLucideIcons();
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
