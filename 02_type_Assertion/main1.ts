//any타입은 바로 <타입>사용가능
let someValue:any ="this is a string";
let strlength:number=(<string>someValue).length;
console.log(strlength);

//as 형식이 주로 사용됨
let strlength2:number = (someValue as string).length;
console.log(strlength2);

var str4:string= ((str as any)as string);
console.log(str4);

var str="1";
//현재타입 ->any->목적타입
var str2:number= <number><any>str;
var str3:string= <string><any>str2;
console.log(str3);

