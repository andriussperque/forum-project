import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private loginService: LoginService) { }

  ngOnInit() {

    this.loginForm = new FormGroup ({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

  onLogin() {
    this.loginService.login(this.loginForm.value)
    .subscribe (
      (response) => {
        console.log(response)
        
      },
      (error) => {
        console.log(error);
        alert("Email or Password is invalid.");
      }
    );
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