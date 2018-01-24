import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './signin-auth.component.html'
})
export class SigninAuthComponent implements OnInit {

  signinForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signinForm = new FormGroup ({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });

  }

  onSignin() {
    const email = this.signinForm.get("email").value;
    const password = this.signinForm.get("password").value;
    this.authService.signinUser(email, password);
  }

  isValid(fieldName: string) {
    if(!this.signinForm.get(fieldName).valid 
      && this.signinForm.get(fieldName).touched) {
      return true;
    }
    return false;
  }

  isRequired(fieldName: string) {
    if(!this.signinForm.get(fieldName).valid 
      && this.signinForm.get(fieldName).touched
      && this.signinForm.get(fieldName).errors['required']) {
      return true;
    }
    return false;
  }

}
