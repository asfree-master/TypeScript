var BBB = /** @class */ (function () {
    function BBB(x2) {
        this.x2 = x2;
        console.log(x2);
    }
    BBB.prototype.info = function (x) {
        console.log(x);
    };
    return BBB;
}());
var x = new BBB(100);
x.info(x.x2);
