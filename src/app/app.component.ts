import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

const sharedComponents = [HeaderComponent];

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
