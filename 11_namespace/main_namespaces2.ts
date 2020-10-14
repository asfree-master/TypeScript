namespace MyNamespace{
    export interface IPerson{
        username:string;
        age:number;
    }
}

var kkk:MyNamespace.IPerson={
    username:"홍길동",
    age:10
}

console.log(kkk.username, "\t", kkk.age);
////////////////////////////////////////////
namespace MyNamespace2{
    export interface IPerson{
        email:string;
        phone:number;
    }
}
var kkk2:MyNamespace2.IPerson={
    email:"aaa@daum.net",
    phone:112345
}
console.log(kkk2.email, "\t", kkk2.phone);