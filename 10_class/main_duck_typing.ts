class Sparrow{
        sound="참새 짹짹";
}
class Parrot{
        sound="참새 짹짹";
}
class Duck{
        sound="참새 짹짹";
        swin(){
            alert("오리가 헤엄치다");
        }
}
var parrot:Parrot= new Sparrow();
var sparrow:Sparrow= new Parrot();
var parrotTwo:Parrot= new Duck();
//var duck:Duck= new Parrot(); //complie error
console.log(parrot.sound);
console.log(sparrow.sound);
console.log(parrotTwo.sound);
