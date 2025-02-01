function foo(a, b) {
  if (b === 0) {
    return a;
  } else if (a === 0) {
    return b; 
  } else if (a === b) {
    return a; 
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(10,2)); // Output: 2
console.log(foo(10,3)); // Output: 1
console.log(foo(10,0)); //Output: 10
console.log(foo(0,10)); //Output: 10