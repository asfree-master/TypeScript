//funciton의 리턴타입 union
function aaa999(n: any):string|number{
    return n;
}

var _x:string|number=aaa999("홍길동");
var _x2:string|number=aaa999(2000);
console.log(_x, _x2);