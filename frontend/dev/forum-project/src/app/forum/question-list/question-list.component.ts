import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit {

  constructor(private router: RouterLink) { }

  ngOnInit() {
  }

}
