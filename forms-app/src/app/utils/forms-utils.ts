import { AbstractControl, FormArray, FormGroup, ValidationErrors } from "@angular/forms";

type ValidationMessageMap = Partial<Record<string, string>>;

async function sleep(ms: number) {
  return new Promise( resolve => {
    setTimeout(() => {
      resolve(true)
    }, ms);
  });
}

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

  static isFieldOneEqualFieldTwo(fieldOne: string, fieldTwo: string) {
    return (formGroup: AbstractControl) => {
      const fieldValue = formGroup.get(fieldOne)?.value;
      const fieldTwoValue = formGroup.get(fieldTwo)?.value;

      return fieldValue === fieldTwoValue ? null : { fieldsNotEquals: true };
    }
  }

  static async checkingServerResponse(control: AbstractControl): Promise<ValidationErrors | null> {
    console.log('Checking server response...');
    await sleep(1500); // Simula el tiempo de respuesta del servidor 1.5s

    const formValue = control.value;

    if (formValue === 'hola@mundo.com') {
      return { emailTaken: true };
    }

    return null;
  }

  static notStrider(control: AbstractControl): ValidationErrors | null {
    const formValue = control.value;
    if (formValue === 'strider') {
      return { notStrider: true };
    }
    return null;
  }

}
