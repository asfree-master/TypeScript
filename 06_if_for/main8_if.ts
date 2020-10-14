//1. 단일 if문
var num:number=5;
if(num>0){
    console.log("number is positive");
}

//2.if~ else문
var num2:number =12;
if(num2 % 2==0){
    console.log("even");
}else{
    console.log("odd");
}
//3. 다중 if 문
var num3:number=2;
if(num3>0){
    console.log(num3+"is positive");
}else if(num3<0){
    console.log(num3+"is negative");
}else{
    console.log(num3+"  is neither positive nor nagative");
}
//4. switch문
var grade:string="A";
switch(grade){
    case "A": console.log("Excellent");
              break;
    case "B": console.log("Good");
              break;
    case "C": console.log("Fair");
                break;
    case "D": console.log("Inavlid choicd");
                break;
   default: console.log("invalid Choice");
                break;
}