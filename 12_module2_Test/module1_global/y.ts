//x.tx와 y.ts가 같은 global module에 있기 때문에
//ctrl 키 누르고 마우스 x.ts 파일 클릭하면 참조가능
//tsc x.ts y.ts -out output.js로 컴파일 필요 


var hello2= uuu;
var hello3= uuu;


console.log(hello2);

//ctrl + x.ts클릭
//C:\typescript\01day\12_module2_Test\module1_global>tsc x.ts y.ts -out test.js
//C:\typescript\01day\12_module2_Test\module1_global>node test.js
//mesg