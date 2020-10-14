var AgrilLoan = /** @class */ (function () {
    function AgrilLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgrilLoan;
}());
var obj00 = new AgrilLoan(10, 1);
console.log("Interest is: " + obj00.interest + "   Rebate is" + obj00.rebate);
console.log(typeof obj00, obj00 instanceof AgrilLoan);
//다형성 가능
var obj2 = new AgrilLoan(100, 2);
console.log(typeof obj2, obj2 instanceof AgrilLoan);
