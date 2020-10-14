var student2 = {
    username: "홍길동",
    age: 20
};
function info2(str) {
    console.log(str.username, "\t", str.age);
}
function info3(str) {
    console.log(str.username, "\t", str.age);
}
info2(student2);
info3(student2);
