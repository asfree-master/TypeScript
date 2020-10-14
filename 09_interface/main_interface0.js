//interface가 필요한 이유
//1.size속성이 필요하지만 문제없이 실행됨
function xyz(p) {
    console.log(p.label);
}
var m0 = { size: 10, label: "홍길동" };
xyz(m0); //size 없음
function xyz2(p) {
    console.log(p.label);
}
var m1 = { size: 10, label: "홍길동" };
xyz2(m1);
var m2 = { label: "홍길동" };
xyz2(m1);
