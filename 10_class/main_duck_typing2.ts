//인터페이스 선언
interface Point{
    x:number;
    y:number;
}
//인터페이스를 사용하는 형태 1: 객체사용
var p:Point={
    x:10,
    y:20
}

console.log(p.x, p.y);
//인터페이스를 사용하는 형태 2: 클래스 사용
class xxx implements Point{
    x:number;
    y:number;
    constructor(x, y){
        this.x= x;
        this.y=y;
    }
}
var k= new xxx(10,20);
console.log(k.x, k.y);