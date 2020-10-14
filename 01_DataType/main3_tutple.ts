//튜플 ==>배열의 특정위치ㅣ에 고정된 타입만 저장가능
//declare a tuple type
let x: [string, number];
//초기화
x=["hello", 10]; //ok 
console.log(x[0], x[1]);
//console.log(x[0], x[1], x[2]);
//x=[10, "hello"];//error