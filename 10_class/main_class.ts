class Greeter{
    greeting: string; //readonly 사용가능
    constructor(message:string) {
        this.greeting= message;        
    }
    greet():string{
        return "Hello, "+ this.greeting;
    }
}

let greeter= new Greeter("world");
console.log(greeter.greet());
greeter.greeting="aa";