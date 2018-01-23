import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ForumService {

    private BASE_URL = "/forum";
    private QUESTIONS_URL = "/questions";

    constructor(private http: Http){}

    public listQuestions(body: any) {
        return this.http.get(this.BASE_URL,"");
    }

    public getQuestion(body: any) {
        return this.http.get(this.BASE_URL);
    }

    public createQuestion(body: any) {
        return this.http.post(this.BASE_URL,"");
    }

    public updateQuestion(body: any) {
        return this.http.put(this.BASE_URL,"");
    }

    public deleteQuestion(body: any) {
        return this.http.delete(this.BASE_URL,"");
    }

    public listAnswers(body: any) {
        return this.http.get(this.BASE_URL,"");
    }

    public getAnswer(body: any) {
        return this.http.get(this.BASE_URL);
    }

    public createAnswer(body: any) {
        return this.http.post(this.BASE_URL,"");
    }

    public updateAnswer(body: any) {
        return this.http.put(this.BASE_URL,"");
    }

    public deleteAnswer(body: any) {
        return this.http.put(this.BASE_URL,"");
    }

}