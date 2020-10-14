//열거형

enum Color{Red, Green, Blue};
let c: Color= Color.Green; //1
console.log(Color.Red); //0
console.log(c);//1
//초기값 설정 
enum Color2{Red=1, Green, Blue};
let c2: Color2= Color2.Green; //2
console.log(c2);

//명시적으로 값 설정
enum Color3{Red=1, Green=2, Blue=4};
let c3:Color3= Color3.Green;
console.log(c3); //2
