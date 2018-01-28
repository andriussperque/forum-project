import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styles: []
})
export class QuestionCreateComponent implements OnInit, CanDeactivateGuard {

  questionForm: FormGroup;
  changesSaved = false;
  
  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

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

  save() {
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate() {
    if (this.changesSaved) {
      return true;
    } else {
      return confirm("Do you really want to leave without save your data?");
    }
  }
}
