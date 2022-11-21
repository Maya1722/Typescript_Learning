var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.addition = function () {
        this.n1 = 10;
        this.n2 = 20;
        console.log("addition of 10+20 ");
        console.log(this.n1 + this.n2);
    };
    Calculator.prototype.multiplication = function () {
        this.n1 = 4;
        this.n2 = 2;
        console.log("multiplication of 4 * 2");
        console.log(this.n1 * this.n2);
    };
    Calculator.prototype.division = function () {
        this.n1 = 14;
        this.n2 = 2;
        console.log("division of 14 &2");
        console.log(this.n1 / this.n2);
    };
    return Calculator;
}());
// instantiate
var c1 = new Calculator();
// access method
c1.addition();
c1.multiplication();
c1.division();
