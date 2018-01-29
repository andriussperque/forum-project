import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers'
import * as fromAuth from '../../auth/store/auth.reducers'

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  headerForm: FormGroup; 
  authState: Observable<fromAuth.State>;
  
  constructor(private authService: AuthService,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  
    this.authState = this.store.select('auth');

    this.headerForm = new FormGroup({
      search: new FormControl(null)
    });
  }
}
