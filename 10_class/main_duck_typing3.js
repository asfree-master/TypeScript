var Bird = /** @class */ (function () {
    function Bird() {
    }
    return Bird;
}());
function myBird(a) {
    console.log(a.mesg);
}
myBird({ mesg: "aaaa" }); //duck typing
var ppp = { mesg: "bbb" };
myBird(ppp);
var ppp2 = ppp;
myBird(ppp2);
