var num1:number=10;
var num2:number=3;
var n = function(a, b):number{ return a+b;}
num1++;
console.log("++:", num1);
num2--;
console.log("--:", num2);

var num3:number=10;
var num4= ++num3;
console.log("전치"+ num3, num4);
var num5= num3++;
console.log("후치"+ num3, num4);
var result= n(10,20);
console.log(result);
var strnum:string="10";
var num5= <number><any>strnum;
console.log(num5);
