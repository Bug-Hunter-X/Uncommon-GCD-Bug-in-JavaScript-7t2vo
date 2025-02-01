# Uncommon GCD Bug in Javascript

This repository demonstrates a subtle bug in a seemingly simple JavaScript function designed to calculate the greatest common divisor (GCD) of two numbers using Euclid's algorithm. The bug is in the handling of the base cases, leading to incorrect results in some situations.

## Bug Description
The provided Javascript code implements Euclid's algorithm. It correctly finds the GCD in many cases but fails when one of the inputs becomes zero before reaching the base case (a === b).  This usually happens when one number is a multiple of the other.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js`.
3. Run the code in a JavaScript environment.
4. Observe the incorrect output for certain input values, particularly when one number is a multiple of the other.

## Solution
The solution involves fixing the base cases in the recursive function to explicitly handle the scenario where either `a` or `b` becomes zero, ensuring that the GCD is calculated accurately in all situations.