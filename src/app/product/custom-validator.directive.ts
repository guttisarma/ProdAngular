import { Directive, Input } from '@angular/core';
import { AbstractControl, Validator, ValidatorFn, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appCustomValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true }]
})

export class CustomValidatorDirective implements Validator {
  @Input('appCustomValidator') custom:number;
  @Input('AvailableAmount') availAmount: number;
  

  ngOnInit(){
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.custom ? this.forbiddenNameValidator(this.custom,this.availAmount)(control)
      : null;
  }

  /** A hero's name can't match the given regular expression */
  forbiddenNameValidator(given:number,available:number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    //const forbidden = nameRe.test(control.value);
    const forbidden=available-control.value<=0;
    console.log('Available Amount: '+available);
    console.log('control.value Amount:'+control.value);
    console.log('forbidden Amount:'+ forbidden);


    return forbidden ? { 'forbiddenName': { value: control.value } } : null;
  };
}
}
