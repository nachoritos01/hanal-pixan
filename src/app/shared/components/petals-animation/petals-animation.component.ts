import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, signal, inject, ElementRef, ViewChild } from '@angular/core';

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
  private petals = signal<Petal[]>([]);
  private animationId?: number;
  private resizeObserver?: ResizeObserver;
  
  private readonly maxPetals = 60;
  private readonly spawnRate = 0.6;
  private readonly frameRate = 1000 / 60;
  
  private canvasWidth = signal(0);
  private canvasHeight = signal(0);
  private devicePixelRatio = signal(window.devicePixelRatio || 1);

  ngOnInit(): void {
    this.initializeCanvas();
    this.setupResizeObserver();
    this.startAnimation();
  }

  ngOnDestroy(): void {
    this.cleanup();
  }

  private initializeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const context = canvas.getContext('2d');
    
    if (!context) {
      console.error('Failed to get 2D context from canvas');
      return;
    }
    
    this.ctx = context;
    this.resize();
  }

  private setupResizeObserver(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.resize();
    });
    
    this.resizeObserver.observe(this.canvasRef.nativeElement);
  }

  private resize(): void {
    const canvas = this.canvasRef.nativeElement;
    const dpr = this.devicePixelRatio();
    
    const width = window.innerWidth * dpr;
    const height = window.innerHeight * dpr;
    
    canvas.width = width;
    canvas.height = height;
    
    // Scale back down using CSS
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    
    this.canvasWidth.set(width);
    this.canvasHeight.set(height);
    
    // Scale the context to match device pixel ratio
    this.ctx.scale(dpr, dpr);
  }

  private startAnimation(): void {
    let lastTime = 0;
    
    const animate = (currentTime: number): void => {
      if (currentTime - lastTime >= this.frameRate) {
        this.updatePetals();
        this.renderPetals();
        lastTime = currentTime;
      }
      
      this.animationId = requestAnimationFrame(animate);
    };
    
    this.animationId = requestAnimationFrame(animate);
  }

  private updatePetals(): void {
    const currentPetals = this.petals();
    const canvasHeight = this.canvasHeight();
    const canvasWidth = this.canvasWidth();
    
    // Spawn new petals
    if (currentPetals.length < this.maxPetals && Math.random() < this.spawnRate) {
      this.spawnPetal();
    }
    
    // Update existing petals
    const updatedPetals = currentPetals
      .map(petal => ({
        ...petal,
        x: petal.x + petal.vx,
        y: petal.y + petal.vy,
        rot: petal.rot + petal.vr
      }))
      .filter(petal => petal.y < canvasHeight + 40); // Remove petals that are off-screen
    
    this.petals.set(updatedPetals);
  }

  private spawnPetal(): void {
    const dpr = this.devicePixelRatio();
    const width = this.canvasWidth();
    const speed = 0.3 + Math.random() * 0.8;
    
    const newPetal: Petal = {
      x: Math.random() * width,
      y: -20 * dpr,
      s: (6 + Math.random() * 10) * dpr,
      vx: (-0.3 + Math.random() * 0.6) * dpr,
      vy: speed * dpr,
      rot: Math.random() * Math.PI * 2,
      vr: (-0.02 + Math.random() * 0.04)
    };
    
    this.petals.update(petals => [...petals, newPetal]);
  }

  private renderPetals(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    this.petals().forEach(petal => this.drawPetal(petal));
  }

  private drawPetal(petal: Petal): void {
    this.ctx.save();
    this.ctx.translate(petal.x / this.devicePixelRatio(), petal.y / this.devicePixelRatio());
    this.ctx.rotate(petal.rot);
    
    this.ctx.beginPath();
    const size = petal.s / this.devicePixelRatio();
    
    // Stylized petal shape
    this.ctx.moveTo(0, 0);
    this.ctx.quadraticCurveTo(size * 0.8, -size * 0.6, 0, -size);
    this.ctx.quadraticCurveTo(-size * 0.8, -size * 0.6, 0, 0);
    
    this.ctx.fillStyle = 'rgba(255, 165, 0, 0.7)';
    this.ctx.fill();
    
    this.ctx.restore();
  }

  private cleanup(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}