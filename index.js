// //async js
// console.log("start");

// setTimeout(() => {
//   console.log("middle");
// }, 0);

// Promise.resolve("Hello").then((res) => console.log(res));

// console.log("end");

// // MORDERN js  (classes)
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(this.name);
//   }
// }

// const Person1 = new Person("punya");
// Person1.greet();

// FACTORIAL FOR n
// n = 5 => 5*4*3*2*1
function factorial(n) {
  if (n === 0) {
    return 1;
  } else return n * factorial(n - 1);
}

console.log(factorial(5));
