import { Component, input } from '@angular/core';
import { FormUtils } from '../../../utils/forms-utils';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'custom-field-error',
  imports: [],
  templateUrl: './field-error.html',
})
export class FieldError {
  fieldName = input.required<string>();
  myForm = input.required<FormGroup>();
  messages = input<Partial<Record<string, string>> | null>(null);

  protected formUtils = FormUtils;
}
