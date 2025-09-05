import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {
  // static fullNameRefex ='^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)?s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+$'
  static getTextError(errors: ValidationErrors) {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Minimo de ${errors['minlength'].requiredLength} caracteres/elementos`;
        case 'min':
          return `Valor minimo de ${errors['min'].min}`;
        case 'email':
          return 'El email no es valido';
        // case 'pattern':
        //   if (errors['pattern'].requiredPattern == FormUtils.fullNameRefex) {
        //     return 'Debe tener nombre y apellidos';
        //   }
        //   return 'Campo no valido';
        case 'notEqualPassword':
          return 'Las contraseñas no coinciden';
        case 'emailTaken':
          return 'El email ya esta registrado';
        case 'isFullname':
          return 'Debe tener nombre y apellidos';
        default:
          return `Error de validacion no controlado ${key}`;
      }
    }
    return null;
  }

  static isValidField(myForm: FormGroup, fieldName: string): boolean | null {
    return (
      !!myForm.controls[fieldName].errors && myForm.controls[fieldName].touched
    );
  }

  static getFieldError(myForm: FormGroup, fieldName: string): string | null {
    if (!myForm.controls[fieldName]) return null;
    const errors = myForm.controls[fieldName].errors ?? {};
    return this.getTextError(errors);
  }

  static isValidFormGroup(myForm: FormGroup) {
    return myForm.errors && myForm.touched;
  }

  static getFieldErrorFormGroup(myForm: FormGroup) {
    const errors = myForm.errors ?? {};
    return this.getTextError(errors);
  }

  static notPropertyFullName(
    control: AbstractControl
  ): ValidationErrors | null {
    if (control.value == null) return null;
    const value = control.value;
    const parts = value.trim().split(' ');
    if (parts.length >= 3 && parts.length < 5) {
      return null;
    }
    return {
      isFullname: true,
    };
  }

  static isFieldOneEqualsFieldTwo(field1: string, field2: string) {
    return (formGroup: AbstractControl) => {
      const fieldValue1 = formGroup.get(field1)?.value;
      const fieldValue2 = formGroup.get(field2)?.value;
      if (fieldValue2 === '') return;
      return fieldValue1 === fieldValue2 ? null : { notEqualPassword: true };
    };
  }
}
