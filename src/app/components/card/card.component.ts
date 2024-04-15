import { Component, Input } from '@angular/core';
import { IProjectProps } from '../../../assets/libs/models/IProject.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() project: IProjectProps = {
    title: '',
    description: '',
    tags: [],
    image: '',
    link: '',
    github: '',
  };
}

