//              🚀 Day 43 Challenge: Start Coding! 🚀
//Question 127: Convert a traditional function expression to an arrow function.


////  Traditional function expression
const traditionalFunction = function (a: number, b:number) {
    return a + b;
  };
  
  // Converted to arrow function
  const arrowFunction = (a:number, b:number) => a + b;
  
  console.log(traditionalFunction(5, 3)); // Outputs: 8
  console.log(arrowFunction(5, 3)); // Outputs: 8
  


  //Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.


  const multiply = (a:number, b:number, c:number) => a * b * c;
  
  console.log(multiply(2, 3, 4)); // Outputs: 24


  //Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
const traditionalVsArrow = {
  value: "traditionalVsArrow value",
  traditionalFunction: function () {
    console.log("Traditional function:", this.value); // 'this' refers to traditionalVsArrow object
  },
  arrowFunction: () => {
    console.log("Arrow function:", this.value); // 'this' is not bound to traditionalVsArrow object but to the scope in which traditionalVsArrow was defined
  },
};

traditionalVsArrow.traditionalFunction(); // Logs "traditionalVsArrow value"
traditionalVsArrow.arrowFunction(); // Likely undefined, depending on the outer scope's 'this.value'
