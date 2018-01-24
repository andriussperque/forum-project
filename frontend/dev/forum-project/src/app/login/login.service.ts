import { Injectable } from "@angular/core";
import { Http, Headers} from "@angular/http";

@Injectable()
export class LoginService {

    private BASE_URL = "http:\\\\localhost:8090"
    private LOGIN_URL = this.BASE_URL + "\\login";
    private SIGNUP_URL = this.BASE_URL + "\\signup";
    private LOGOUT_URL = this.BASE_URL + "\\logout";

    constructor(private http: Http){}

    public login(body: any) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.LOGIN_URL, body, {headers: headers});
    }

    public signup(body: any) {
        return this.http.post(this.SIGNUP_URL, body);
    }

    public logout(body: any) {
        return this.http.post(this.LOGOUT_URL, body);
    }

    isAuthenticated() {
        return true; //I will need to change that
      }
}