class Test {
  testFunc() {
    console.log("this value: ", this);
    console.log(`this is equal to test1: ${this === test1}`);
  }
}

const test1 = new Test();
// Calling the method on the instance
// test1.testFunc(); // true

// Calling the method outside the class
// const test1Func = test1.testFunc;
// console.log(test1Func, 14);
// test1Func(); // false

// // Calling the method as a callback
// setTimeout(test1.testFunc, 1000); // Timeout obj

// Using this in Function Declaration Syntax
function someFunc() {
  console.log(this);
}
someFunc(); // Global obj
