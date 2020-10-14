var person={
    firstname:"tom",
    lastname:"hanks",
    
    //type template 선언
    sayEcho:function(){},
    email:"", 

}

//추가적으로 멤버추가 
person.sayEcho=function(){
    console.log("sayEcho");
}
person.email="aa@daum.net";

console.log(person.firstname, person.lastname, person.email);
person.sayEcho();