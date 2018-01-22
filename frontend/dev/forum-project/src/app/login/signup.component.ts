import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;


  constructor() {

  }

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

  onSend() {
    console.log(JSON.stringify(this.signupForm.value));
  }

  isValid(fieldName: string) {
    if(!this.signupForm.get(fieldName).valid 
      && this.signupForm.get(fieldName).touched) {
      return true;
    }
    return false;
  }

}
