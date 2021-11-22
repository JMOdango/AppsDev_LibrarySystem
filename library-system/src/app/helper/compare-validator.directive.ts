import { Directive, Input } from '@angular/core';
import { Validator, FormGroup, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[compare]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CompareValidatorDirective, multi: true }]
})
export class CompareValidatorDirective implements Validator {
  @Input('compare') compare: string [] = [];

  constructor() { }

  validate(formGroup: FormGroup): ValidationErrors {
    return this.compareValidator(this.compare[0], this.compare[1])(formGroup);
  }

  compareValidator(controlNameToCompare: string, matchingControlName: string): any {
    return (formGroup: FormGroup) => {
      const controlToCompare = formGroup.controls[controlNameToCompare];
      const matchingControl = formGroup.controls[matchingControlName];
      if (!controlToCompare || !matchingControl) {
        return null;
      }
      if (matchingControl.errors && !matchingControl.errors.compare){
        return null;
      }
      if(controlToCompare.value !== matchingControl.value){
        return matchingControl.setErrors({ compare: true});
      }
      return matchingControl.setErrors(null);
    }
  }
}
