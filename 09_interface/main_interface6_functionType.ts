//function타입
interface Product{
  (start: number):string;
}

var kkk2:Product= function(s:number){
  return s+"aaa";
}
console.log(kkk2(100));