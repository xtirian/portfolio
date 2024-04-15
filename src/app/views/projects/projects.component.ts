import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { IProjectProps } from '../../../assets/libs/models/IProject.model';

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
  // IMPORT FROM API
  projects: IProjectProps[] =[
    {title: 'BMI CALCULATOR',
      description: 'BMI Calculator is a web application which allows the user to calculate his Body Mass Index. The user can input his weight and height in metric or imperial units and the application will calculate the BMI and display the result. The user can also see the BMI category and a description of the category. The application is responsive and can be used on mobile devices. The application is built using HTML, CSS, and JavaScript.',
      tags: ['JAVASCRIPT','HTML','CSS'],
      image: 'assets/images/projects/project1.webp' ,
      link: 'https://bmi-calculator-blond-two.vercel.app/' ,
      github: 'https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/bmi-calculator' ,
    },

  ]

}
