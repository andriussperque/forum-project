import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  headerForm: FormGroup; 
  
  constructor() { }

  ngOnInit() {
  
    this.headerForm = new FormGroup({
      search: new FormControl(null)
    });
  }
}
