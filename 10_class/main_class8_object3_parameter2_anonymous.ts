var student={
   username:"홍길동",
   age:20
}

function info4(str:{username:string, age?:number}){
   console.log(str.username,"\t", str.age);
}

info4({username:"홍길동", age:20});
info4({username:"홍길동"});
