/// <reference path="aaa.ts" />
/// <reference path="aaa2.ts" />
var kkk2:xyz2.MyDate= new xyz2.MyDate();

kkk2.day=200;
console.log(kkk2.day);

var kkk3:xyz3.MyDate = new xyz3.MyDate();
kkk3.day= 200;
console.log(kkk3.day);
// tsc bbb.ts -out output.js

// node output.js
// 200
// 200