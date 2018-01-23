import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class LoginService {

    private LOGIN_URL = "";
    private SIGNUP_URL = "";
    private LOGOUT_URL = "";

    constructor(private http: Http){}

    public login(body: any) {
        return this.http.post(this.LOGIN_URL,"");
    }

    public signup(body: any) {
        return this.http.post(this.SIGNUP_URL,"");
    }

    public logout(body: any) {
        return this.http.post(this.LOGOUT_URL,"");
    }
}