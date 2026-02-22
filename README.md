# JavaScript Array Polyfills

This project contains custom implementations of important JavaScript array methods to understand how they work internally.

## Implemented Methods

- myForEach()
- myMap()
- myFilter()
- myReduce()

## Purpose

The goal of this project is to strengthen core JavaScript fundamentals by recreating built-in array methods using basic loops and logic.

## 🧠 Method Signatures

### myForEach
- Takes a callback function
- Executes the function for each element
- Returns undefined

### myMap
- Takes a callback function
- Returns a new array
- Each element is transformed using the callback

### myFilter
- Takes a callback function
- Returns a new array
- Includes elements where callback returns true

### myReduce
- Takes a callback function and an optional initial value
- Returns a single accumulated value

## Example

```javascript
const arr = [1, 2, 3, 4, 5];

const doubled = arr.myMap((num) => num * 2);
console.log(doubled);

const even = arr.myFilter((num) => num % 2 === 0);
console.log(even);

const sum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(sum);