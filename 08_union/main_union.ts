//1.변수
var mesg0:string|number;

mesg0= 100;
console.log(mesg0);

mesg0="홍길동";
console.log(mesg0);

//2.함수파라미터
function xxx0(n:number|string){
    console.log(n);
}
xxx0(100);
xxx0("홍길동");

//3.배열 파라미터
function xxx22(n:number[]|string[]){
    console.log(n);
}
xxx22([1,2,3]);
xxx22(["홍길동", "이순신"]);