///<reference path="main_namespaces4.ts"/> 
//주석 ///주의 
//main_namespaces4.ts파일에 있는 IPerson 인터페이스를 참조
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var p = {
    username: "홍길동",
    age: 20,
    email: "aa@aa.net"
};
console.log(p.username, "\t", p.email, "\t", p.age);
