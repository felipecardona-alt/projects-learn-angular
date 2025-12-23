import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FieldError } from "../../../shared/components/field-error/field-error";
import { ValidatorPatternsUtils } from '../../../utils/validator-patterns-utils';
import { FormUtils } from '../../../utils/forms-utils';

@Component({
  selector: 'register-page',
  imports: [JsonPipe, ReactiveFormsModule, FieldError],
  templateUrl: './register-page.html',
})
export class RegisterPage {
  private formBuilder = inject(FormBuilder);

  myForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(ValidatorPatternsUtils.namePattern)]],
    email: [
                '',
                [Validators.required, Validators.pattern(ValidatorPatternsUtils.emailPattern)],
                [FormUtils.checkingServerResponse]
              ],
    username: ['',
                [Validators.required, Validators.minLength(6),
                Validators.pattern(ValidatorPatternsUtils.notOnlySpacesPattern),
                FormUtils.notStrider]
              ],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(ValidatorPatternsUtils.passwordPattern)]],
    confirmPassword: ['', Validators.required],
  }, {
    validators: [
      FormUtils.isFieldOneEqualFieldTwo('password', 'confirmPassword')
    ]
  });

  onSave() {
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
  }

}
