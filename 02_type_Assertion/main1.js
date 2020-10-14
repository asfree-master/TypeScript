//any타입은 바로 <타입>사용가능
var someValue = "this is a string";
var strlength = someValue.length;
console.log(strlength);
//as 형식이 주로 사용됨
var strlength2 = someValue.length;
console.log(strlength2);
var str4 = str;
console.log(str4);
var str = "1";
//현재타입 ->any->목적타입
var str2 = str;
var str3 = str2;
console.log(str3);
