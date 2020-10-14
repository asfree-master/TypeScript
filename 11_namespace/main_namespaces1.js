//1. namespace 없이
var MyDate = /** @class */ (function () {
    function MyDate() {
    }
    return MyDate;
}());
var m = new MyDate();
m.day = 20;
console.log(m.day);
