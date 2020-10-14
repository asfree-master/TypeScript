var Sparrow = /** @class */ (function () {
    function Sparrow() {
        this.sound = "참새 짹짹";
    }
    return Sparrow;
}());
var Parrot = /** @class */ (function () {
    function Parrot() {
        this.sound = "참새 짹짹";
    }
    return Parrot;
}());
var Duck = /** @class */ (function () {
    function Duck() {
        this.sound = "참새 짹짹";
    }
    Duck.prototype.swin = function () {
        alert("오리가 헤엄치다");
    };
    return Duck;
}());
var parrot = new Sparrow();
var sparrow = new Parrot();
var parrotTwo = new Duck();
//var duck:Duck= new Parrot(); //complie error
console.log(parrot.sound);
console.log(sparrow.sound);
console.log(parrotTwo.sound);
