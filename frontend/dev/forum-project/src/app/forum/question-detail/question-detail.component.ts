import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html'
})
export class QuestionDetailComponent implements OnInit, OnDestroy {

  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
    const id = this.route.snapshot.params['id'];

    this.paramsSubscription = this.route.params.subscribe ( (params: Params)=> {
      const id2 = params['id'];
    });

  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
