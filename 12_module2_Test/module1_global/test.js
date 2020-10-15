var uuu = "mesg";
//x.tx와 y.ts가 같은 global module에 있기 때문에
//ctrl 키 누르고 마우스 클릭하면 참조가능
//tsc x.ts y.ts -out output.js로 컴파일 필요 
var hello2 = uuu;
var hello3 = uuu;
console.log(hello2);
