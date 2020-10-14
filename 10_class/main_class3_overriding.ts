class Employee{
  name:string;
  salary:number;
  constructor(name:string, salary:number){
    this.name= name;
    this.salary= salary;
  }
  getEmployee():string{
    return this.name+"\t"+ this.salary;
  }
}
class Manager extends Employee{
  depart: string;
  constructor(name, salary, depart) {
    super(name, salary);
    this.depart= depart;    
  }
  //overriding
  getEmployee():string{
    return this.name+"\t"+this.salary+"\t"+this.depart;
  }  
}
var man= new Manager("홍길동", 2000, "인사");
console.log(man.getEmployee());