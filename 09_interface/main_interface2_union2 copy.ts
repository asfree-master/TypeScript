interface IPerson{
    firstName:string;
    lastName:string;
    sayHi:()=>string;
    mesg2:string|number|string[]|((x)=>string);
}

var yyy:IPerson={
    firstName:"20",
    lastName:"Hanks",
    sayHi:():string=>{return "Hi there"},
    mesg2:"안녕하세요"
}
var yyy2:IPerson={
    firstName:'20',
    lastName:"Hanks",
    sayHi:():string=>{return "Hi there"},
    mesg2:200
}

var yyy3:IPerson={
    firstName:"20",
    lastName:"Hanks",
    sayHi:():string=>{return "Hi there"},
    mesg2:["AAA", "BBB", "CCC"]
}

var yyy4:IPerson={
    firstName:"20",
    lastName: "Hanks",
    sayHi:():string=>{return "Hi there"},
    mesg2:(x)=>{return "안녕하세요"+ x}
}
console.log(yyy.mesg2);
console.log(yyy2.mesg2);
console.log(yyy3.mesg2);
var fn:any= yyy4.mesg2;
console.log(fn("홍길동"));
//console.log(yyy4.mesg2("aaa"));
