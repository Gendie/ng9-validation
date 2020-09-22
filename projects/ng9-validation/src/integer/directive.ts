import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { integer } from './validator';

const DIGITS_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IntegerValidator),
  multi: true
};

@Directive({
  selector: '[integer][formControlName],[integer][formControl],[integer][ngModel]',
  providers: [DIGITS_VALIDATOR]
})
export class IntegerValidator implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return integer(c);
  }
}
