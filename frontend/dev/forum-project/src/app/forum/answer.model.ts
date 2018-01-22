export class Answer {
    public id: number;
    public content: string;
    public author: string; //User
    public createDate: string; //Date
    //public comments: Comment[];
  
    constructor(id: number, content: string) {
      this.id = id;
      this.content = content;
    }
  }
  