//1.optional parameter

function test_param(n1:number, s1:string, s2?:string){
    console.log(n1);
    console.log(s1);
}
test_param(123, "this si a string");
test_param(123, "this is a string", "hello");