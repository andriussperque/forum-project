import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  fb: FormBuilder;

  constructor() { }

  ngOnInit() {

    this.fb = new FormBuilder();
    this.contactForm = this.fb.group ({
      name: "",
      
    });

  }

}
