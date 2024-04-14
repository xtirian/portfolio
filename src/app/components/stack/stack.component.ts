import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stack-card',
  standalone: true,
  imports: [],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss',
})
export class StackCardComponent {
  @Input() title = '';
  @Input() timeExperience = '';
}
