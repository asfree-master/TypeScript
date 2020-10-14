class StaticMan{
  static num:number;
  static disp():void{
    console.log("The value of num is  "+ StaticMan.num);
  }
}

StaticMan.num=12;
StaticMan.disp();