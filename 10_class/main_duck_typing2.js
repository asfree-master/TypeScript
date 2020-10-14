//인터페이스를 사용하는 형태 1: 객체사용
var p = {
    x: 10,
    y: 20
};
console.log(p.x, p.y);
//인터페이스를 사용하는 형태 2: 클래스 사용
var xxx = /** @class */ (function () {
    function xxx(x, y) {
        this.x = x;
        this.y = y;
    }
    return xxx;
}());
var k = new xxx(10, 20);
console.log(k.x, k.y);
