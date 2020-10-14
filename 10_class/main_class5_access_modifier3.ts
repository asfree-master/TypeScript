class ZZZ{
    constructor(public x0:number, public x1:string){//접근지정자는 생성자에서만 사용가능
        console.log(x0+"t"+x1);
    }
}
var x99=new ZZZ(100, "홍길동");
console.log(x99.x0, x99.x1);