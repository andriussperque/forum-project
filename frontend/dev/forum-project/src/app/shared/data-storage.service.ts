import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';

import * as fromAuth from '../auth/store/auth.reducers';
import * as fromApp from '../store/app.reducers';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

@Injectable()
export class DataStorageService {

  BASE_URL = "https://forum-project-5c5e2.firebaseio.com/";

  constructor(private http: Http,
              private authService: AuthService,
              private store: Store<fromApp.AppState>) {
  }

  // 'recipes'
  public storeData(posfixUrl, data) {

    return this.store.select("auth").take(1).switchMap(( authState: fromAuth.State ) => {
      return this.http.put(this.BASE_URL + posfixUrl + ".json" + "?auth=" + authState.token, data);
    });
  }

  get(posfixUrl) {

    return this.store.select("auth").take(1).switchMap(( authState: fromAuth.State ) => {
      return   this.http.get(this.BASE_URL + posfixUrl + ".json?auth=" + authState.token);
/*      .map(
          (response: Response) => {
            return response.json();
          }
        );
 */   });
  }

  getList(posfixUrl) {

    return this.store.select("auth").take(1).switchMap(( authState: fromAuth.State ) => {
      return this.http.get(this.BASE_URL + posfixUrl + ".json?auth=" + authState.token);
/*     .map(
        (response: Response) => {
          return response.json();
        }
      ) */
    });
  }
}
