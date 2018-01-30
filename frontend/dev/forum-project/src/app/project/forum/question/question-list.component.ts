import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { ForumService } from '../forum.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit {

  public questions: Question[] = [];

  constructor(private forumService: ForumService) { }

  ngOnInit() {
    this.questions = this.getQuestions();
  }

  // Just showing how to use the method. json
  private getQuestions(): Question[] {
    this.forumService.listQuestions().subscribe(
      (response: Response) => {
        return  response.json();
      },
      (error) => console.log(error)
    );
    return null;
  }
}
