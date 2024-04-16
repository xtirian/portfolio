import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FormContactComponent } from '../../components/form-contact/form-contact.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [HeaderComponent, FormContactComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
