interface Point{
    readonly x: number;
    readonly y: number;
}

let p1: Point={x:10, y:20};
let p2: Point={x:10, y:20};
console.log(p1.x, p1.y);
//p1.x=5; //error! 값 변경 불가
