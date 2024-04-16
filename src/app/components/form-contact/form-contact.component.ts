import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IContact } from '../../../assets/libs/models/IContact.model';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.scss',
})
export class FormContactComponent {
  endPointURL = 'https://formspree.io/f/mgejklpd';
  contactModel: IContact = {
    name: '',
    email: '',
    message: '',
  };
  contactForm: any;

  constructor(
    private http: HttpClient,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contactModel.name, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(this.contactModel.email, [
        Validators.required,
        Validators.email,
      ]),
      message: new FormControl(this.contactModel.message, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });

    console.log('isMarked', this.contactForm.get('name')?.value);
  }

  onSubmit() {
    this.http
      .post<IContact>(this.endPointURL, this.contactForm.value)
      .pipe(
        catchError((error: any) => {
          this._snackBar.open('Could not send the message', '' ,{
            duration: 3000,
            direction: 'rtl',
            panelClass: ['error-snack'],
          });
          console.error(error);
          return throwError(error);
        }),
      )
      .subscribe((response) => {
        this._snackBar.open(
          `Thank you for your message, ${this.contactForm?.value?.name}, I'll answer as soon as possible`,
          'Close',
          {
            duration: 5000,
            direction: 'rtl',
            panelClass: ['sucess_snack'],
            politeness: 'polite',
            verticalPosition: 'top',
            horizontalPosition: 'center',
          },
        );

        this.contactForm.reset();
      });
  }
}

/*
README
ngForm: methods and properties related to it for validation and data manipulation purposes
ngModel: used to achieve two-way data bindings between different form control elements // two way data binding is the concept to link the value of some input to a variable in the code. Like if I have an input field and the change of this input will set a useState variable, and this value will be displayed somewhere.

The concept used here is of the concept of a reactive form. Reactive forms are a model-driven approach to handling form inputs. They are more robust and flexible than template-driven forms. They are particularly useful when you need to handle multiple forms or dynamic forms where the number of input fields may change.

using the [ngClass] directive to apply a CSS class conditionally. The ngClass directive allows you to dynamically set CSS classes on an HTML element by databinding an expression that represents all classes to be added.

 */
