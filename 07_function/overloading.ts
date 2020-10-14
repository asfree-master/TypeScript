// 오버로딩을 구현하려면 다음과 같이 먼저 선언이 필요하다.
function az(n:number):number;
function az(n:string):string;

//구현 
function az(n):any{

}

function pickCard(x: string):number;
function pickCard(x: number):{suit:string; card:number;};

function pickCard(x):any{

}
