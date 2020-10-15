/// <reference path="aa.ts"/>

var kkk:xyz.MyDate= new xyz.MyDate();
kkk.day=200;
console.log(kkk.day);

var kkk2:Mydate= new Mydate();
kkk2.month=10;
console.log(kkk2.month); //output

// tsc bb.ts -out output.js
// node output.js
// 200
// 10
