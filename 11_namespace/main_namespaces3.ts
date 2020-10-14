namespace MyNamespace{
    export interface IPerson{
        username:string;
        age:number;
    }//end interface

    export class Math{
        eng:number;
        kor:number;
        constructor(eng:number, kor:number){
            this.eng= eng;
            this.kor= kor;
        }
        getInfo(){
            return this.eng+"\t"+ this.kor;
        }
    }//end class

    export var user ={
        name:"이순신",
        age:33
    }//end object
}//end MyNamespace

var kkk:MyNamespace.IPerson={
    username:"홍길동",
    age:10
}
console.log(kkk.username, "\t", kkk.age);
var m0= new MyNamespace.Math(100, 200);
console.log(m0.eng, "\t", m0.kor);
console.log(MyNamespace.user.name+"\t"+ MyNamespace.user.age);