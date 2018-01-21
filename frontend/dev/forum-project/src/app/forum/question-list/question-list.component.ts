import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit {

  public questions: Question[] = [
    new Question(1, "How can I implment this system in only two days?","I have a huge software two implement and I only have two days to do that. What should I do?"), 
    new Question(2, "How to ask someone to merry me?","There is any kind of software to ask someone out?")
  ];

  constructor() { }

  ngOnInit() {
  }

}
