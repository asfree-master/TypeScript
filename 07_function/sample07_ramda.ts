/*람다함수의 장점
1. 타이핑 기능을 계속 사용할 필요가 없다.
2. 어휘적으로 this키워드 의미를 포착한다.

*/
//1. 일반 함수 이용시
function Person(age){
    this.age= age;
    this.growOld= function(){
        var s=100;//로컬변수
        this.age++;
        console.log(this.age, s, this);
        //age++; 
       // console.log(age);
    }
}
var person = new Person(1);
person.growOld();//person객체에서 growOld()메서드 수행되기 때문에 메소드 안의 this는 Person객체임.

//setTimeout(person.growOld, 1000);
//window.setTimeout()메소드 안에서 수행됨으로 
//this는 Person객체가 아님
//setTimeout(person.growOld, 1000);

//2. 람다 함수 이용시 (2.어휘적으로 this키워드 의미를 포착함)
//함수 본문 외부로부터 람다함수에 의해서 capture 되기 때문이다.
function Person2(age){
    this.age= age;
    this.growOld= ()=>{
        this.age++;   
        console.log(this.age, this);    
    }
}
var person2= new Person2(1);
setTimeout(person2.growOld, 1000);
//setTimeout(function(){console.log(person2.age);}, 2000); //2
//3. 일반 함수 이용시 this해결방법
function Person3(n){
    this.age= n;
    var _this= this; //capture this
    this.growOld= function(){
        _this.age++; //use the captured this
    }
}
var person3= new Person3(1);
setTimeout(person3.growOld, 1000);
setTimeout(function(){console.log(person3.age);}, 2000);
//4. 최종적으로 typescript를 사용하기 때문에 구문이 좋다
class Person4{
    constructor(public age:number){}
    growOld=()=>{
        this.age++;
    }

}
var person4= new Person4(1);
setTimeout(person4.growOld, 1000);
setTimeout(function(){ console.log(person4.age);}, 2000); //2
