import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParallaxBackgroundComponent } from './shared/components/parallax-background/parallax-background.component';
import { PetalsAnimationComponent } from './shared/components/petals-animation/petals-animation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ParallaxBackgroundComponent,
    PetalsAnimationComponent
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'hanal-pixan';
}