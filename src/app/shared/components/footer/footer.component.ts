import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  private currentYear = signal(new Date().getFullYear());
  
  readonly copyrightText = computed(() => 
    `© ${this.currentYear()} Hanal Pixán – Proyecto familiar. Hecho con respeto a la tradición maya yucateca.`
  );
  
  readonly footerLinks = computed<FooterLink[]>(() => [
    { label: 'Inicio', href: '/' },
    { label: 'El Pib', href: '/pib' },
    { label: 'Cultura', href: '/cultura' },
    { label: 'Galería', href: '/galeria' },
    { label: 'Testimonios', href: '/testimonios' },
    { label: 'Xibalbá', href: '/xibalba' },
    { label: 'Compartir', href: '/compartir' }
  ]);

  readonly socialLinks = computed<SocialLink[]>(() => [
    { 
      platform: 'Facebook', 
      url: 'https://facebook.com/hanalPixanTradicion', 
      icon: 'facebook', 
      color: '#1877F2' 
    },
    { 
      platform: 'Instagram', 
      url: 'https://instagram.com/hanalPixanYucatan', 
      icon: 'instagram', 
      color: '#E4405F' 
    },
    { 
      platform: 'Twitter', 
      url: 'https://twitter.com/hanalPixanMaya', 
      icon: 'twitter', 
      color: '#1DA1F2' 
    },
    { 
      platform: 'YouTube', 
      url: 'https://youtube.com/@hanalPixanTradicion', 
      icon: 'youtube', 
      color: '#FF0000' 
    },
    { 
      platform: 'TikTok', 
      url: 'https://tiktok.com/@hanalPixanYucatan', 
      icon: 'video', 
      color: '#000000' 
    }
  ]);

  readonly externalLinks = computed<FooterLink[]>(() => [
    { label: 'INAH Yucatán', href: 'https://inah.gob.mx/red-de-museos/334-museo-regional-de-antropologia-palacio-canton', isExternal: true },
    { label: 'Secretaría de Cultura Yucatán', href: 'https://www.culturayucatan.com/', isExternal: true },
    { label: 'Gran Museo Maya', href: 'https://granmuseomaya.com.mx/', isExternal: true },
    { label: 'Turismo Yucatán', href: 'https://yucatan.travel/', isExternal: true }
  ]);
}