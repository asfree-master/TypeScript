interface IPerson{
    firstName:string;
    lastName:string;
    mesg:string|number|string[];
    sayHi:()=>string
}

var kkk:IPerson={
    firstName:"20",
    lastName:"Hanks",
    mesg:"안녕하세요",
    sayHi:():string=>{return "Hi there";}
}

var kkk2:IPerson={
    firstName:"20",
    lastName:"Hanks",
    sayHi:():string=>{return "HI there"},
    mesg:200
}
var kkk3:IPerson={
    firstName:"20",
    lastName:"Hanks",
    sayHi:():string=>{return "Hi there"},
    mesg:["aaa", "bbb", "ccc"]
}

console.log(kkk.mesg);
console.log(kkk2.mesg);
console.log(kkk3.mesg);


