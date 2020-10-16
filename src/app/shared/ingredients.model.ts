export class Ingredient {
  constructor(public name: string, public amount: number){
}
}


// there is also one another shortcut method given by typescript which works same as below

/*
export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number){
    this.name = name;
    this.amount = amount;
  }
}
*/
