var global_num =10; //전역변수

class Numbers{
    num_val=20; //프러퍼티변수
    static s_val=30; //static변수

    xxx():void{
        var local_num=40; //지역변수
        console.log(global_num, Numbers.s_val);  //전역변수, static변수
        console.log(local_num); //지역변수
    }
}
console.log(global_num); //전역변수
console.log(Numbers.s_val); //static 변수

var n= new Numbers();
console.log(n.num_val); //프로퍼티 변수
n.xxx();


