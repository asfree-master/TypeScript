class Encapsulation{
  str: string="Hello";
  private str2: string="world";
}

var obj0= new Encapsulation();
console.log(obj0.str);
//console.log(obj0.str2);//접근 불가

//상속
class A{
  public a:number=10;
  private b:number=20;
  protected c:number=30;
}

class B extends A{
  info(){
    console.log(this.a);
   // console.log(this.b);
    console.log(this.c);
  }
}
var obj = new B();
obj.info();