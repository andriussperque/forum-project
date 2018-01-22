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
      email: new FormControl(null, Validators.required),
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
}