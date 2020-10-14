interface Person{
    age:number;
}
interface Musician extends Person{
    instrument:string;
}
var drummer: Musician={
    age:20,
    instrument:"드럼"
}
console.log("나이: "+ drummer.age);
console.log("악기: "+ drummer.instrument);
//type assertion
var drummer2= <Musician>{};
drummer2.age=27;
drummer2.instrument="Drums";
console.log("Age: "+drummer2.age);
console.log("Instrument:"+ drummer2.instrument);