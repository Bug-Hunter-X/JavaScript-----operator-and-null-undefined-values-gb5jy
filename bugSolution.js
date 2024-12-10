function foo(a, b) {
  a = a === null ? 0 : a;
  a = typeof a === 'undefined' ? 0 : a;
  return a + b;
}

console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1));    // 1
console.log(foo(0, 1));      // 1