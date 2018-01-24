import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  BASE_URL = "https://forum-project-5c5e2.firebaseio.com/"

  constructor(private http: Http,
              private authService: AuthService) {
  }

  //'recipes'
  public store(posfixUrl, data) {
    const token = this.authService.getToken();
    return this.http.put(this.BASE_URL + posfixUrl +'.json' +'?auth=' + token, data);
  }

  get(posfixUrl) {

    const token = this.authService.getToken();
    this.http.get(this.BASE_URL+ posfixUrl +'.json?auth=' + token)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }

  getList(posfixUrl) {
    
    const token = this.authService.getToken();
    this.http.get(this.BASE_URL+ posfixUrl +'.json?auth=' + token)
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }
}
