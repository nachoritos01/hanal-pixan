import { Component, ChangeDetectionStrategy, signal, computed, inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

interface SocialPlatform {
  name: string;
  platform: string;
  icon: string;
  color: string;
  delay: number;
}

@Component({
  selector: 'app-social-sharing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-sharing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialSharingComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  // Signal para feedback de copia
  readonly copySuccess = signal(false);

  // Computed para plataformas sociales
  readonly socialPlatforms = computed<SocialPlatform[]>(() => [
    {
      name: 'Facebook',
      platform: 'facebook',
      icon: 'facebook',
      color: '#1877F2',
      delay: 0
    },
    {
      name: 'Instagram',
      platform: 'instagram', 
      icon: 'instagram',
      color: '#E4405F',
      delay: 100
    },
    {
      name: 'Twitter',
      platform: 'twitter',
      icon: 'twitter',
      color: '#1DA1F2',
      delay: 200
    },
    {
      name: 'WhatsApp',
      platform: 'whatsapp',
      icon: 'message-circle',
      color: '#25D366',
      delay: 300
    },
    {
      name: 'Copiar enlace',
      platform: 'copy',
      icon: 'link',
      color: '#6B7280',
      delay: 400
    }
  ]);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeLucideIcons();
    }
  }

  shareOn(platform: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Descubre la hermosa tradición del Hanal Pixán en Mérida - La elaboración ancestral del pib');
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${text} ${url}`;
        break;
      case 'instagram':
        // Instagram no permite compartir directo, mostrar mensaje
        this.showInstagramMessage();
        return;
      case 'copy':
        this.copyToClipboard();
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  }

  private copyToClipboard(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    navigator.clipboard.writeText(window.location.href).then(() => {
      this.copySuccess.set(true);
      setTimeout(() => {
        this.copySuccess.set(false);
      }, 2000);
    }).catch(() => {
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      this.copySuccess.set(true);
      setTimeout(() => {
        this.copySuccess.set(false);
      }, 2000);
    });
  }

  private showInstagramMessage(): void {
    alert('Para compartir en Instagram, puedes tomar una captura de pantalla y subirla a tu historia mencionando nuestra tradición.');
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