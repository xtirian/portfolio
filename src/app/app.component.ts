import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { StacksComponent } from './views/stacks/stacks.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { FooterComponent } from './views/footer/footer.component';

const sharedComponents = [HeaderComponent, HeroBannerComponent, StacksComponent, ProjectsComponent, FooterComponent];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ...sharedComponents],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-angular';
}
