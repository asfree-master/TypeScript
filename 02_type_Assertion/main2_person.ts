import {Person} from "./person"; //주의 .ts붙지않음
var p={
    name:"홍길동",
    age:20,
    address:"서울"
}
console.log(p);
var p2= p as Person;
console.log(p2);