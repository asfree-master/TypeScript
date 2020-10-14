/*
any타입
타입 시스템의 모든 타입, 무엇이든 할당 가능, - 동적타입이므로 틀에서 제공하는 intellisense지원
못받고 정적으로 타입검사를 못함
*/
var power: any;
//Takes any and all types
power= '123';
power=123;
//is compatible with all types
var num:number;
power= num;
num= power;
