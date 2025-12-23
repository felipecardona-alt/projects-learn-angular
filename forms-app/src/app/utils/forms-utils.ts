import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";

type ValidationMessageMap = Partial<Record<string, string>>;

export class FormUtils {

  private constructor() {}

  static isValidField(field: string, myForm: FormGroup): boolean | null {
    const control = myForm.get(field);
    if (!control) return false;
    return !!control.errors && control.touched;
  };

  static isValidFieldInArray(formArray: FormArray, index: number): boolean | null {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  };

  private static getTextError(errors: ValidationErrors, messages?: ValidationMessageMap): string | null {
    for (const key of Object.keys(errors)) {
      if (messages?.[key]) return messages[key]!;

      switch (key) {
        case 'required':
          return 'Este campo es obligatorio';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `El valor mínimo es ${errors['min'].min}`;
        case 'email':
          return 'El valor ingresado no es un correo válido';
        case 'pattern':
          return 'El formato ingresado no es válido';
      }
    }
    return null;
  };

  static getFieldError(field: string, myForm: FormGroup, messages?: ValidationMessageMap): string | null {
    const control = myForm.get(field);
    if (!control) return null;

    const errors = control.errors ?? {};

    return this.getTextError(errors, messages);
  };

  static getFieldErrorInArray(formArray: FormArray, index: number): string | null {
    if (!formArray.controls[index]) return null;

    const errors = formArray.controls[index].errors ?? {};

    return this.getTextError(errors);
  }

  static onSave(myForm: FormGroup) {
    if (myForm.invalid) {
      myForm.markAllAsTouched();
      return;
    }
    myForm.reset();
  }

}
