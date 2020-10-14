interface User{
    bar:number;
    baz:string;
}
//var u:User={};
var u:User= {} as User;
u.bar=10;
u.baz="홍길동";
console.log(u);