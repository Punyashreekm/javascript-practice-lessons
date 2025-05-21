// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//   Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//   Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string
class calculator {
  constructor(a, b, op) {
    this.a = a;
    this.b = b;
    this.op = op;
  }
  calculate() {
    if (this.op === "add") return this.a + this.b;
    if (this.op === "subtract") return this.a - this.b;
    if (this.op === "multiply") return this.a * this.b;
    if (this.op === "divide") return this.b !== 0 ? this.a / this.b : "Error : division by zero";
    return "Error : Invalid operation";
  }
}

console.log(new calculator(8, 2, "add").calculate());
console.log(new calculator(8, 2, "subtract").calculate());
console.log(new calculator(8, 2, "multiply").calculate());
console.log(new calculator(8, 0, "divide").calculate());
