abstract class Animal{
    abstract makeSound():void;
    move():void{
        console.log("Animal move");
    }
}

class Cat extends Animal{
    makeSound():void{
        console.log("makeSound");
    }
}
var c= new Cat();
c.makeSound();
c.move();