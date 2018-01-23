import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.loginForm = new FormGroup ({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  onSend() {
    console.log(JSON.stringify(this.loginForm.value));
  }

  isValid(fieldName: string) {
    if(!this.loginForm.get(fieldName).valid 
      && this.loginForm.get(fieldName).touched) {
      return true;
    }
    return false;
  }

  isRequired(fieldName: string) {
    if(!this.loginForm.get(fieldName).valid 
      && this.loginForm.get(fieldName).touched
      && this.loginForm.get(fieldName).errors['required']) {
      return true;
    }
    return false;
  }
}