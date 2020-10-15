var xyz2;
(function (xyz2) {
    var MyDate = /** @class */ (function () {
        function MyDate() {
        }
        return MyDate;
    }());
    xyz2.MyDate = MyDate;
})(xyz2 || (xyz2 = {}));
var xyz3;
(function (xyz3) {
    var MyDate = /** @class */ (function () {
        function MyDate() {
        }
        return MyDate;
    }());
    xyz3.MyDate = MyDate;
})(xyz3 || (xyz3 = {}));
/// <reference path="aaa.ts" />
/// <reference path="aaa2.ts" />
var kkk2 = new xyz2.MyDate();
kkk2.day = 200;
console.log(kkk2.day);
var kkk3 = new xyz3.MyDate();
kkk3.day = 200;
console.log(kkk3.day);
