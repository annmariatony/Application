export class User {
  ID: number;
  FirstName: string;
  LastName: string;
  Mobile: string;
  Email: string;
  username: string;
  password: string;
  constructor() {
  }
}
export class Application {
  ID: number;
  UserID: number;
  Title: string;
  Derscription: string;
  AppDate: Date;
  Approval: Number;
  Photo: string;
  constructor() {
  }
}
