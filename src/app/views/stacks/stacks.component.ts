import { Component } from '@angular/core';
import { StackCardComponent } from '../../components/stack/stack.component';

@Component({
  selector: 'app-stacks',
  standalone: true,
  imports: [StackCardComponent],
  templateUrl: './stacks.component.html',
  styleUrl: './stacks.component.scss'
})
export class StacksComponent {
  cards = [
    {
      cardText: 'Typescript',
      cardExperience: '1'
    },
    {
      cardText: 'Node',
      cardExperience: '1'
    },
    {
      cardText: 'React',
      cardExperience: '2'
    },
    {
      cardText: 'Angular',
      cardExperience: '1'
    },
    {
      cardText: 'SQL',
      cardExperience: '1'
    },
    {
      cardText: 'NoSQL',
      cardExperience: '1'
    },
    {
      cardText: 'API',
      cardExperience: '1'
    },

  ]
}
