import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styles: []
})
export class QuestionCreateComponent implements OnInit {

  questionForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.questionForm = this.fb.group ({
      title: [null, Validators.required],
      content: [null, Validators.required],
      tag: [null, Validators.required],
      category: [null, Validators.required],
      answers: this.fb.array ([
        this.fb.group({
          content: this.fb.control(""),
          comments: this.fb.control("")
        })
      ])
    });
  }
}
