import { Answer } from './answer.model';

export class Question {
  public id: number;
  public title: string;
  public content: string;
  public answers: Answer[];
  public comments: Comment[];
  public author: string; //User
  public createDate: string; //Date
  public updateDate: string; // Date
  public votesUp: string[]; // Vote { User: andirus.s type: positive data: xxxx}
  public votesDown: string[]; // Vote
  public shared: string[]; // user can share the quesiton over facebook or twitter.
  public bestAnswer: number; // answer id

  constructor(id: number, title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}