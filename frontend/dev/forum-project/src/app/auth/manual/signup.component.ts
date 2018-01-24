import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private loginService: LoginService) {}

  ngOnInit() {

    this.signupForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      nickname: new FormControl(null, Validators.required),
      birthday: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      rePassword: new FormControl(null, Validators.required)
    });

  }

  onSigup() {
    this.loginService.signup(this.signupForm.value)
      .subscribe (
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  isValid(fieldName: string) {
    if(!this.signupForm.get(fieldName).valid 
      && this.signupForm.get(fieldName).touched) {
      return true;
    }
    return false;
  }

  isRequired(fieldName: string) {
    if(!this.signupForm.get(fieldName).valid 
      && this.signupForm.get(fieldName).touched
      && this.signupForm.get(fieldName).errors['required']) {
      return true;
    }
    return false;
  }

  /** Example of custom validator
   * ... this.forbiddenNames.bind(this) ]
  forbiddenNames (control: FormControl) : {[s: string]: boolean} {
    const x = 1;
    return x > 0 ? null : {'nameIsForbidden': true};
  }
  */

  /**
   * Assync Validator
   * 
   * 
   *  new formControl( null,  [Validator.required, ...], this.forbiddenEmails)
   *  ng-pending
   * 
   
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise <any> ((resolve, reject) => {
      setTimeout(() => { 
        if (control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true}); 
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  changes () {
   
    this.signupForm.valueChanges.subscribe (
      (value) => console.log(value)
    );
   
    this.signupForm.statusChanges.subscribe (
      (value) => console.log(value)
    );

    this.signupForm.setValue({
    // insert all fields here with value;
    })

    this.signupForm.patchValue({
    // Update only parcial fields
    })

    // reset form - It is possible to reset to a spefic object.
    this.signupForm.reset();
  }*/
}
