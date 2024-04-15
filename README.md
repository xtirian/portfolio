# Portfolio with Angular

This project is a refactoring of another project [xTirian Portifolio](https://github.com/xtirian/Frontend-Mentor-SnyderCut). In the previous project I was learning NextJS and TailwindCSS, and now I'm using the same project to learn Angular.

<details>
  <summary>Tips to work with Angular</summary>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

</details>

## Built with

- Angular v17
- Typescript
- SCSS

## Study notes

### What I learnd

1. **Create Components**

```bash
$ ng g c [component-file]/[component-name]
```

2. **Import Component**: To use the component in the app or in a Parent, I had to import it to the "component, where before was the module

```ts
const sharedComponents = [HeaderComponent, HeroBannerComponent];

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ...sharedComponents], // components
  templateUrl: "./app.component.html", // You can pass the HTML direct here instead of use another file
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "portfolio-angular";
}
```

3. **Creating Services**: to create services injectables in the root or in any component which you ned to handle.

```bash
$ ng g service [service-name]
```

this service will create a basic file injectable directly into the root.

4. **ngIf: Adding Condition in the rendering**: to render with certain condition, I had to create somethings

a. Create the condition

```ts
  @Input() link: string | null = null; // here I'm creating an input that i'll use to verify after
```

b. Then I create a template for the cases. There's at least 3 ways to write ngIf, like with ngTemplates, \*ngIf or [ngIf]. Here the example:

```html
<ng-template [ngIf]="link">
  <!-- if there is link will render this -->
  <a [href]="link" target="_blank" class="button"> {{ buttonText }} </a>
</ng-template>
<ng-template [ngIf]="!link">
  <!-- This is the case where there's no link -->
  <button class="button">CONTACT ME</button>
</ng-template>
```

5. **Pass Props**: Using the same example where I had to pass the link... After I import this component into the parent, I had to pass the component inside the HTML of the parent:

```html
<div class="heroBanner-content">
  <h1 class="heroBanner-title">
    Nice to meet you! <br />
    I'm <span>Matheus Fernandes</span>
  </h1>
  <p class="heroBanner-subtitle">Based in BR, I'm full-stack developer with a passion for building beautiful and functional websites.</p>
  <!-- chamar botão aqui -->
  <app-button [buttonText]="buttonText" [link]="buttonLink" />
  <!-- Fact thath the [Link] is related to the component app-button.
  The "buttonLink" is related to the Parent where the component are being imported  -->
</div>
```

And in the module:
```ts
export class HeroBannerComponent {
  // +++
  heroBannerSrc = '';
  buttonText = "Contact Me";
  buttonLink = null;
  // +++
}
```

6. **Passing props from a parent to a child**: In the case of this project, I was taking the data in the Project view and passing for Project Card, and taking the link from the card to pass to the button, so I had a chain of information passing bellow. The first case
```html
<!-- PROJECT VIEW -->
<app-card [project]="project" />
```
```html
<!-- PROJECT CARD -->
  <footer class="project-card_footer">    
    <app-button link="{{project.link}}" buttonText="View Project" />
  </footer>
```
in the case I didn't need to to encapsulate the link as `[link]={{project.link}}`, because the link is a property already defined in the button, not in the Card.

### continued development
1. **Create a API to store my projects**: The idea is create a API to store my projects, classify it with categories to use in this portfolio

## Author

- FrontEnd Mentor - [@xtirian](https://www.frontendmentor.io/profile/xtirian)
- Linkedin - [mf-cunha](https://www.linkedin.com/in/mf-cunha/)
