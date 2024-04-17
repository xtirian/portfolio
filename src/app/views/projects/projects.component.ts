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
  // TODO: CRIAR API PARA SALVAR PORTIFOLIO
  projects: IProjectProps[] =[
    {title: 'BMI CALCULATOR',
      description: 'BMI Calculator is a web application which allows the user to calculate his Body Mass Index. The user can input his weight and height in metric or imperial units and the application will calculate the BMI and display the result. The user can also see the BMI category and a description of the category. The application is responsive and can be used on mobile devices. The application is built using HTML, CSS, and JavaScript.',
      tags: ['JAVASCRIPT','HTML','CSS'],
      image: 'assets/images/projects/project1.webp' ,
      link: 'https://bmi-calculator-blond-two.vercel.app/' ,
      github: 'https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/bmi-calculator' ,
    },
    {title: 'WEBDEV QUIZ',
      description: 'WebDev Quiz App is a web application that allows the user to take a quiz on web development. The user can select the subject between HTML, CSS, Javascript and Accessibility. The application will display the questions and the user can select the answers. The application will display the score at the end of the quiz. The application is built using REACT and SASS.',
      tags: ['REACT','SASS', 'TYPESCRIPT'],
      image: 'assets/images/projects/project10.webp' ,
      link: 'https://quiz-app-xtirian.vercel.app/' ,
      github: 'https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/quiz-app' ,
    },
    {title: 'TYPEMASTER PRE-ORDER',
      description: 'Typemaster pre-order is a web Landing page for a keyboard. The user can see the features of the keyboard and the price. The user can also pre-order the keyboard. The application is responsive and can be used on mobile devices. The application is built using REACT and SASS.',
      tags: ['REACT','SASS', 'TYPESCRIPT'],
      image: 'assets/images/projects/project9.webp' ,
      link: 'https://typemaster-keyboard-landing-page.vercel.app/' ,
      github: 'https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/typemaster-keyboard-landing-page' ,
    },
    {title: 'DEVFINDER',
      description: 'DevFinder is a web application that allows the user to search for developers from Github. The user can input the name of the developer and the application will display informations form their profiles. The application is built using REACT, SASS and connecting with the Github API.',
      tags: ['REACT','SASS', 'JAVASCRIPT'],
      image: 'assets/images/projects/project8.webp' ,
      link: 'https://github-user-search-pi-fawn.vercel.app/' ,
      github: 'https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/github-user-search' ,
    },
    {title: 'MODERN ART GALLERY',
      description: 'Modern Art Gallery is a Single Page Application that displays a gallery of modern art. The user can see about the galery and find the local by using a custom map. The application is built using REACT and SASS.',
      tags: ['REACT','SASS', 'TYPESCRIPT'],
      image: 'assets/images/projects/project7.webp' ,
      link: 'https://modern-art.vercel.app/' ,
      github: 'https://github.com/xtirian/Frontend-Mentor-SnyderCut/tree/main/art-gallery-website' ,
    },
    {title: 'MY PORTFOLIO',
      description: 'My portfolio is a web application that displays my portfolio. The user can see my projects and contact me. The application is built using ANGULAR and SASS.',
      tags: ['ANGULAR','SASS', 'TYPESCRIPT'],
      image: 'assets/images/projects/project6.webp' ,
      link: 'https://xtirian.vercel.app/' ,
      github: 'https://github.com/xtirian/portfolio' ,
    },

  ]

}
