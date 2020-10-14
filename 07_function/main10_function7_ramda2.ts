//1. 람다표현식 이용
var a= function(x:number){
  console.log('a', x);
}
a(10);
//람다표현식
var a2=(x:number)=>{
  console.log("a2", x);
}
a2(10);
//파라미터가 1개이면 ()생략가능
var a3= x=>{
  console.log("a3",x);
}
a3(10);
///////////////////////////////
//2.함수표현식 이용
var k = function(x:number, y:number){
  console.log("k", x,"\t" , y);
}
k(10,20);
//람다
//파리미터가 여러개인 경우는 ()생략불가
var k2=(x:number, y:number)=>{
  console.log("k2", x,"\t" , y);
}
k2(10,20);