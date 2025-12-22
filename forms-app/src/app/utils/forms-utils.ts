import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils {

  private constructor() {}

  static isValidField(field: string, myForm: FormGroup): boolean | null {
    return !! myForm.controls[field].errors && myForm.controls[field].touched;
  };

  static isValidFieldInArray(formArray: FormArray, index: number): boolean | null {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  };

  private static getTextError(errors: ValidationErrors): string | null {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es obligatorio';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
          return `El valor mínimo es ${errors['min'].min}`;
      }
    }
    return null;
  };

  static getFieldError(field: string, myForm: FormGroup): string | null {
    if (!myForm.controls[field]) return null;

    const errors = myForm.controls[field].errors ?? {};

    return this.getTextError(errors);
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
