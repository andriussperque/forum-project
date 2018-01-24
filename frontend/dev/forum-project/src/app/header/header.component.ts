import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  headerForm: FormGroup; 
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  
    this.headerForm = new FormGroup({
      search: new FormControl(null)
    });
  }
}
