var MyDate = /** @class */ (function () {
    function MyDate() {
    }
    return MyDate;
}());
/*
-외부파일에서 특정요소를 사용하기 위해서
<reference path=""/>로 설정한 후 사용가능, 컴파일시 에러 발생
- 컴파일 할 때 a.ts와 b.ts파일을 각각 따로 컴파일 하는 것이 아니다 .
두개의 내용을 합해서 하나의 js파일을 작성함.

tsc b.ts -out  output.ts //b.ts만 입력해도 ///<reference path="a.ts" /> 했기 때문에 a.ts 접근 가능.
이렇게 하면 a.ts와 b.ts에 해당하는 js 파일이 생성되지 않고
통합된 하나의 output.js파일이 생성됨
node output.js로 실행함

*/
/// <reference path="a.ts"/>
var m = new MyDate();
m.day = 20;
console.log(m);
