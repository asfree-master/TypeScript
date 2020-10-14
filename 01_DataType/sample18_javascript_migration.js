/*
any타입
타입 시스템의 모든 타입, 무엇이든 할당 가능, - 동적타입이므로 틀에서 제공하는 intellisense지원
못받고 정적으로 타입검사를 못함
*/
//1.샘플
var foo2 = 123;
var bar2 = 'hey';
//bar2= foo2; //Error: cannot assign a number to a string
var foo3 = 123;
var bar3 = 'hey';
bar3 = foo3; //okay
console.log(bar3);
//2.샘플
function foo4() {
    return 1;
}
var bar4 = 'hey';
//bar4= foo4();//error: cannot assign a number to a string
function foo5() {
    return 1;
}
var bar5 = 'hey';
bar5 = foo5(); //okay !!!
console.log(bar5);
