let a:any="Hello";
let b=(<string>someValue).length; //형변환
let c:any="hello";
let d= (someValue2 as string).length; //,형변환

console.log(a, c);
console.log( b, d);