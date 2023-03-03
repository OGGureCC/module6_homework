function externalFunction(num1) {
  return function internalFunction(num2) {
    return num1 + num2;
  };
}

console.log(externalFunction(2)(5));
console.log(externalFunction(1)(10));
console.log(externalFunction(9)(3));
console.log(externalFunction(9)(7));
