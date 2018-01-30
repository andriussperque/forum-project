import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Question } from '../question.model';
import { Answer } from '../answer.model';
import { Store } from '@ngrx/store';

import * as fromAuth from '../../../../auth/store/auth.reducers';
import * as fromApp from '../../../../store/app.reducers';
import { Observable } from 'rxjs/Observable';
import { ForumService } from '../../forum.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html'
})
export class QuestionDetailComponent implements OnInit, OnDestroy {

  
  authState: Observable<fromAuth.State>;
  paramsSubscription: Subscription;
  question: Question;

  constructor(private route: ActivatedRoute,
              private forumService: ForumService,
              private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    
    this.authState = this.store.select("auth");
    const id = this.route.snapshot.params['id'];    
  //  this.paramsSubscription = this.route.params.subscribe ( (params: Params)=> {
  //    const id2 = params['id'];
  //  });

    this.forumService.getQuestion(id).subscribe();

  
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
