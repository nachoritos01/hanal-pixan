import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

interface Petal {
  x: number;
  y: number;
  s: number; // size
  vx: number; // velocity x
  vy: number; // velocity y
  rot: number; // rotation
  vr: number; // rotation velocity
}

@Component({
  selector: 'app-petals-animation',
  standalone: true,
  templateUrl: './petals-animation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PetalsAnimationComponent implements OnInit, OnDestroy {
  @ViewChild('petalsCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private ctx!: CanvasRenderingContext2D;
  private petals: Petal[] = [];
  private animationId?: number;
  private W = 0;
  private H = 0;
  private last = 0;
  private readonly rate = 1000 / 60;

  ngOnInit(): void {
    this.initCanvas();
    this.startAnimation();
  }

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const context = canvas.getContext('2d');
    
    if (!context) {
      console.error('Failed to get 2D context from canvas');
      return;
    }
    
    this.ctx = context;
    this.resize();
    
    // Listen for resize
    window.addEventListener('resize', () => this.resize());
  }

  private resize(): void {
    const canvas = this.canvasRef.nativeElement;
    const dpr = window.devicePixelRatio || 1;
    
    this.W = canvas.width = window.innerWidth * dpr;
    this.H = canvas.height = window.innerHeight * dpr;
    
    // Scale canvas back down using CSS
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    
    // Scale context to match device pixel ratio
    this.ctx.scale(dpr, dpr);
  }

  private spawnPetal(): void {
    const speed = 0.3 + Math.random() * 0.8;
    const dpr = window.devicePixelRatio || 1;
    
    this.petals.push({
      x: Math.random() * this.W,
      y: -20 * dpr,
      s: (6 + Math.random() * 10) * dpr,
      vx: (-0.3 + Math.random() * 0.6) * dpr,
      vy: speed * dpr,
      rot: Math.random() * Math.PI * 2,
      vr: (-0.02 + Math.random() * 0.04)
    });
  }

  private drawPetal(p: Petal): void {
    this.ctx.save();
    this.ctx.translate(p.x / (window.devicePixelRatio || 1), p.y / (window.devicePixelRatio || 1));
    this.ctx.rotate(p.rot);
    this.ctx.beginPath();
    
    // Simple petal shape like original
    const size = p.s / (window.devicePixelRatio || 1);
    this.ctx.moveTo(0, 0);
    this.ctx.quadraticCurveTo(size * 0.8, -size * 0.6, 0, -size);
    this.ctx.quadraticCurveTo(-size * 0.8, -size * 0.6, 0, 0);
    
    this.ctx.fillStyle = 'rgba(255, 165, 0, 0.7)'; // Orange petals
    this.ctx.fill();
    this.ctx.restore();
  }

  private startAnimation(): void {
    const loop = (t: number): void => {
      if (t - this.last > this.rate) {
        this.ctx.clearRect(0, 0, this.W, this.H);
        
        // Spawn new petals
        if (this.petals.length < 60 && Math.random() < 0.6) {
          this.spawnPetal();
        }
        
        // Update petals
        this.petals.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.rot += p.vr;
        });
        
        // Remove off-screen petals
        this.petals = this.petals.filter(p => p.y < this.H + 40);
        
        // Draw petals
        this.petals.forEach(p => this.drawPetal(p));
        
        this.last = t;
      }
      
      this.animationId = requestAnimationFrame(loop);
    };
    
    this.animationId = requestAnimationFrame(loop);
  }
}