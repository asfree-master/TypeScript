//1.기본 cally by value
function test_param(n1:number, s1:string){
   console.log(n1);
   console.log(s1);
};
test_param(123, "this is a string");
//test_param(123);//인수가 일치하지 않으면 에러

//2. call by pointer
class Person{
    username:string;
    constructor(n){
        this.username=n;
    }
    getUsername(){
        return this.username;
    }
    setUsername(n){
        this.username= n;
    }
}
var p = new Person("홍길동");
function test_param2(pp:Person){
    pp.setUsername("이순신");
}
test_param2(p);
console.log(p.getUsername());


//call by pointer배열 예제
var str:string[]=["홍길동", "이순신", "유관순"];
function changeName(s:string[]){
    s[0]="강감찬";
} 
console.log("변경전:  ", str);
changeName(str);
console.log("변경후 : ", str);