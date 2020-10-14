//1. rest parameter 
function test_param(...n:number[]){
    console.log(n);
}

test_param(1,2,3);
test_param(10,20,30,40);

function test_param2(x, y, ...n:string[]){
    console.log(x, y, n);
}
test_param2(1, 2, "aaa", "bbb", "ccc");
test_param2("a", "b", "c","d", "e");