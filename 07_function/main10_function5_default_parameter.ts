function calculate_discount(price:number, rate:number=0.5){
   var discount= price* rate;
   console.log(price,"\t", rate);
   console.log("discount Amout:", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);