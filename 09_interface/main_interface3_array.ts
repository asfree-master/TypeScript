interface namelist{
    [index:number]:string
}
var list:namelist=["aaa", "bbb", "ccc"];
list[3]="ddd";
console.log(list);

interface namelist2{
    [index:number]:number
}
var list2:namelist2=[1,2,3];
console.log(list2);

interface ages{
    [index:string]:number
}
var agelist:ages={};
//var agelist=<ages>[];
agelist["one"]=100;
agelist["two"]=200;
agelist["three"]=300;
//agelist[4]=400;
console.log(agelist); //4가문자열로 저장
// interface namelist3{
//     [index:string]:number
// }
//  var list3:namelist3;
//  list["one"]=100;
//  list["two"]=200;
//  list["three"]=300;
//  list["four"]=400;
//  list[5]=400;
