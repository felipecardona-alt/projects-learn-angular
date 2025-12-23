import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/forms-utils';

@Component({
  selector: 'register-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './register-page.html',
})
export class RegisterPage {
  private formBuilder = inject(FormBuilder);
  formUtils = FormUtils;

  myForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  });

  onSave() {
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
  }

}
