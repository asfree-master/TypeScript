//1.함수 표현식 이용
var a = function (x) {
    return x + 10;
};
console.log(a(10));
//람다 표현식 
var a2 = function (x) {
    return x + 10;
};
console.log("a2", a2(10));
var a3 = function (x) {
    return x + 10;
};
console.log("a3", a3(10));
//return 및 {} 생략 (같이 생략해야 함)
var a4 = function (x) { return x + 10; };
console.log("a4", a4(10));
