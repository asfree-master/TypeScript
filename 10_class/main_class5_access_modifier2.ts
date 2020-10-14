class BBB{
  str:string;
  info(x:number){
    console.log(x);
  }
  constructor(public x2: number){
    console.log(x2);
  }
}
var x= new BBB(100);
x.info(x.x2);