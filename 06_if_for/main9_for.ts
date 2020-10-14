//1.for문 
var num:number=5;
var i:number;
var factorial=1;
for(i=num; i>=1; i--){
    factorial= factorial*i;
}
console.log(factorial);
//2.while문
var num:number=5;
var factorial:number=1;
while(num>=1){
    factorial= factorial*num;
    num--;
}
 console.log(factorial);
//3. do~while문
var n:number=10;
do{
    console.log(n);
    n--;
}while(n>=0);

//4. for ~ in 
var x:any=[1,2,3];
for (var x2 in x) {
    console.log(x2, x[x2]);
}
var xx:any="abc";
for (var x2 in xx) {
  console.log(">", xx[x2]);
}

var xxx:any={k:100, k2:200, k3:300};
for (const key in xxx) {
  console.log( ">>>", key, xxx[key]);
}

//5. for~of
//반복할 수 있는 대상은 반드시 iterable 객체만 가능하고 실제값 반환
//객체는 iterable객체가 아니기 때문에 for~of 사용불가
var y:any="abc";
for (const y2 of y) {
    console.log(y2);
}
//{key:value} 형식에는 for~of 안됨
var yyy:any={k:100, k2:200, k3:300};
for (const y2 of yyy) {
    console.log(y2); //사용안됨    
}
for (const y2 in yyy) {
   console.log(yyy[y2]);
}