export class Hero {
  id: number;
  name: String;
  country: String;
  power: String;
  photo: String;

  constructor(data?: any){
    Object.assign(this,data);
  }
}
