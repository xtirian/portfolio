import { Component, ElementRef, Input } from '@angular/core';
import { IProjectProps } from '../../../assets/libs/models/IProject.model';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent],
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
  ViewProjectLabel = 'View Project';
  isHovered: boolean = false;

  constructor() {}

  ngAfterViewInit() {
    this.isHovered = false;
  }

  onMouseEnter() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}

