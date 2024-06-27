import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  signUpForm: { username: string; email: string } = {
    username: '',
    email: ''
  }

  constructor() { }

  submitForm(form: NgForm): void {
    if (form.valid) {
      console.log(this.signUpForm, this.signUpForm)
    }
  }
}
