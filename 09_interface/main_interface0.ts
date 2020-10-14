//interface가 필요한 이유
//1.size속성이 필요하지만 문제없이 실행됨
function xyz(p:{label:string}){
    console.log(p.label);
}
var m0={size:10, label:"홍길동"};
xyz(m0); //size 없음

//2. interface로 구현
interface PPP{
    size:number,
    label:string
}
function xyz2(p:PPP){
    console.log(p.label);
}
var m1= {size:10, label:"홍길동"};
xyz2(m1);
var m2= {label:"홍길동"};
//xyz2(m2); //속성이 일치하지 않기 때문에 컴파일 에러 발생됨
