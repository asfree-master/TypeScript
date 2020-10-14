//1.기본 cally by value
function test_param(n1, s1) {
    console.log(n1);
    console.log(s1);
}
;
test_param(123, "this is a string");
//test_param(123);//인수가 일치하지 않으면 에러
//2. call by pointer
var Person = /** @class */ (function () {
    function Person(n) {
        this.username = n;
    }
    Person.prototype.getUsername = function () {
        return this.username;
    };
    Person.prototype.setUsername = function (n) {
        this.username = n;
    };
    return Person;
}());
var p = new Person("홍길동");
function test_param2(pp) {
    pp.setUsername("이순신");
}
test_param2(p);
console.log(p.getUsername());
//call by pointer배열 예제
var str = ["홍길동", "이순신", "유관순"];
function changeName(s) {
    s[0] = "강감찬";
}
console.log("변경전:  ", str);
changeName(str);
console.log("변경후 : ", str);
