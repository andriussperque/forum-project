import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Question } from '../question.model';
import { Answer } from '../answer.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html'
})
export class QuestionDetailComponent implements OnInit, OnDestroy {

  question: Question;

  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    const id = this.route.snapshot.params['id'];
    this.paramsSubscription = this.route.params.subscribe ( (params: Params)=> {
      const id2 = params['id'];
      
    });

    this.createObjectForTest(id);

  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }



  createObjectForTest(id: number) {
    this.question =  new Question(id,"Title of this questions", "The question itself");
    this.question.id = id;
    this.question.author = "Andrius H. Sperque";
    this.question.createDate = "";
    this.question.updateDate = "";
    this.question.answers = new Array<Answer>();
  
    const answer1 = new Answer(1,"the answer for this question is X");
    const answer2 = new Answer(2,"the answer 2 for this question is ysdfsdf");
    const answer3 = new Answer(3,"the answer 3 for this question is Xasfasfasdfasdf");
    
    this.question.answers.push(answer1);
    this.question.answers.push(answer2);
    this.question.answers.push(answer3);
  }

}
