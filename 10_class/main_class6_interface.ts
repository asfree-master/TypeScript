interface ILoan{
   interest:number; //readyonly 사용가능
}

class AgrilLoan implements ILoan{
   interest:number;
   rebate: number;
   constructor(interest:number, rebate: number){
      this.interest= interest;
      this.rebate= rebate;
   }
}
var obj00= new AgrilLoan(10, 1);
console.log("Interest is: "+ obj00.interest+ "   Rebate is"+ obj00.rebate);
console.log(typeof obj00, obj00 instanceof AgrilLoan);
//다형성 가능
var obj2:ILoan= new AgrilLoan(100,2);
console.log(typeof obj2, obj2 instanceof  AgrilLoan);
//readOnly 예제
var xxx:ILoan= {interest:100};
xxx.interest=200; //readyonly interest:number로 지정하면 에러발생
