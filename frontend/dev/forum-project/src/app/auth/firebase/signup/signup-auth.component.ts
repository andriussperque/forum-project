import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../auth.service';
import {  } from '@angular/forms/src/model';

@Component({
  selector: 'app-signup-auth',
  templateUrl: './signup-auth.component.html'
})
export class SignupAuthComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.signupForm = new FormGroup ({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });

  }

  onSignup() {
    const email = this.signupForm.get("email").value;
    const password = this.signupForm.get("password").value;
    this.authService.signupUser(email, password);
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

}
