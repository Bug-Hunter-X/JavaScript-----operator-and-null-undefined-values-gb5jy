# JavaScript '+' Operator and null/undefined Values

This repository demonstrates an uncommon JavaScript bug related to the behavior of the '+' operator when one of its operands is null or undefined.

## Bug Description

In JavaScript, the '+' operator behaves differently depending on whether the operand is null or undefined.  When one operand is undefined, it results in NaN (Not a Number). However, when one operand is null, it's coerced to 0, leading to unexpected results.

## Bug Reproduction

The file `bug.js` contains a simple function `foo` that adds two numbers.  When you run this code, the output will demonstrate the unexpected behavior:

```
NaN
1
1
```

## Solution

The file `bugSolution.js` shows a solution that addresses this issue by explicitly checking for null and undefined values before performing the addition.

## How to Run

1. Clone this repository.
2. Open the files `bug.js` and `bugSolution.js` in your favorite code editor.
3. Execute the JavaScript code using a browser's developer console or Node.js.