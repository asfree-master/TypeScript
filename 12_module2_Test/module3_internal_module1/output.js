var xyz;
(function (xyz) {
    var MyDate = /** @class */ (function () {
        function MyDate() {
        }
        return MyDate;
    }());
    xyz.MyDate = MyDate;
})(xyz || (xyz = {}));
var Mydate = /** @class */ (function () {
    function Mydate() {
    }
    return Mydate;
}());
/// <reference path="aa.ts"/>
var kkk = new xyz.MyDate();
kkk.day = 200;
console.log(kkk.day);
var kkk2 = new Mydate();
kkk2.month = 10;
console.log(kkk2.month);
