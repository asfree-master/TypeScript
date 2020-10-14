//1. interface generic
interface XXX<T>{
   num:string;
   num2:number;
}
var k0:XXX<string>={
   num:"string",
   num2:100
};
console.log(k0.num, "\t", k0.num2);
var k00:XXX<number>={
   num:"string",
   num2:100
}
console.log(k00.num, "\t", k00.num2);