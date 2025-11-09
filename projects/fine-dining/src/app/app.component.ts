import { Component } from '@angular/core';
import { PageHeroComponent } from './pages/page-hero/page-hero.component';
import { PagePhilosophyComponent } from './pages/page-philosophy/page-philosophy.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageGalleryComponent } from './pages/page-gallery/page-gallery.component';
import { PageShowcaseComponent } from './pages/page-showcase/page-showcase.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PageHeroComponent,
    PagePhilosophyComponent,
    PageAboutComponent,
    PageGalleryComponent,
    PageShowcaseComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
