class Bird{
    mesg:string;
}
function myBird(a:Bird){
    console.log(a.mesg);
}
myBird({mesg:"aaaa"}); //duck typing
var ppp= {mesg:"bbb"};
myBird(ppp);
var ppp2:Bird= ppp as Bird;
myBird(ppp2);