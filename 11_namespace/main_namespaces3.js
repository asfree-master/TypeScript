var MyNamespace;
(function (MyNamespace) {
    var Math = /** @class */ (function () {
        function Math(eng, kor) {
            this.eng = eng;
            this.kor = kor;
        }
        Math.prototype.getInfo = function () {
            return this.eng + "\t" + this.kor;
        };
        return Math;
    }()); //end class
    MyNamespace.Math = Math;
    MyNamespace.user = {
        name: "이순신",
        age: 33
    }; //end object
})(MyNamespace || (MyNamespace = {})); //end MyNamespace
var kkk = {
    username: "홍길동",
    age: 10
};
console.log(kkk.username, "\t", kkk.age);
var m0 = new MyNamespace.Math(100, 200);
console.log(m0.eng, "\t", m0.kor);
console.log(MyNamespace.user.name + "\t" + MyNamespace.user.age);
