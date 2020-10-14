function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log(price, "\t", rate);
    console.log("discount Amout:", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
