var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Encapsulation = /** @class */ (function () {
    function Encapsulation() {
        this.str = "Hello";
        this.str2 = "world";
    }
    return Encapsulation;
}());
var obj0 = new Encapsulation();
console.log(obj0.str);
//console.log(obj0.str2);//접근 불가
//상속
var A = /** @class */ (function () {
    function A() {
        this.a = 10;
        this.b = 20;
        this.c = 30;
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.info = function () {
        console.log(this.a);
        // console.log(this.b);
        console.log(this.c);
    };
    return B;
}(A));
var obj = new B();
obj.info();
