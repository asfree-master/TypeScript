class Shape{
  area: number;
  constructor(a:number){
    this.area= a;
  }
}
class Circle extends Shape{
  disp():void{
    console.log("area of the circle:"+ this.area);
  }
}

var obj= new Circle(123);
obj.disp();

