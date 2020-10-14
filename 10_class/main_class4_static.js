var StaticMan = /** @class */ (function () {
    function StaticMan() {
    }
    StaticMan.disp = function () {
        console.log("The value of num is  " + StaticMan.num);
    };
    return StaticMan;
}());
StaticMan.num = 12;
StaticMan.disp();
