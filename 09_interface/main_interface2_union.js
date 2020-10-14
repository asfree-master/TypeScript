var kkk = {
    firstName: "20",
    lastName: "Hanks",
    mesg: "안녕하세요",
    sayHi: function () { return "Hi there"; }
};
var kkk2 = {
    firstName: "20",
    lastName: "Hanks",
    sayHi: function () { return "HI there"; },
    mesg: 200
};
var kkk3 = {
    firstName: "20",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; },
    mesg: ["aaa", "bbb", "ccc"]
};
console.log(kkk.mesg);
console.log(kkk2.mesg);
console.log(kkk3.mesg);
