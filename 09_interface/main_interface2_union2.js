var yyy = {
    firstName: "20",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; },
    mesg2: "안녕하세요"
};
var yyy2 = {
    firstName: '20',
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; },
    mesg2: 200
};
var yyy3 = {
    firstName: "20",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; },
    mesg2: ["AAA", "BBB", "CCC"]
};
var yyy4 = {
    firstName: "20",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; },
    mesg2: function (x) { return "안녕하세요" + x; }
};
console.log(yyy.mesg2);
console.log(yyy2.mesg2);
console.log(yyy3.mesg2);
var fn = yyy4.mesg2;
console.log(fn("홍길동"));
