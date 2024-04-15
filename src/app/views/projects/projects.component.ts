import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  buttonProps = {
    buttonLink: null,
    buttonText: 'Contact Me'
  };
}
