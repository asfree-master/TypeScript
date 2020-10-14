//any타입은 Object와 다르다

//any타입이기 때문에
var a:any= null;
a=100;
console.log(a.toFixed(2)); //100.00
a="홍길동";
console.log(a.trim(), a.length);
//Object 
var a2:Object=null;
a2=100;
//console.log(a2.toFixed(2));
