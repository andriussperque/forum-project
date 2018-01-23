import { Injectable } from "@angular/core";
import { Http, Headers} from "@angular/http";

@Injectable()
export class LoginService {

    private LOGIN_URL = "";
    private SIGNUP_URL = "";
    private LOGOUT_URL = "";

    constructor(private http: Http){}

    public login(body: any) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.LOGIN_URL,"", {headers: headers});
    }

    public signup(body: any) {
        return this.http.post(this.SIGNUP_URL,"");
    }

    public logout(body: any) {
        return this.http.post(this.LOGOUT_URL,"");
    }
}