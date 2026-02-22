// Fallback - Polyfill - Backup Function

const arr = [1, 2, 3, 4, 5, 6];

// Signature .forEach - No return, function input param, value, index
// calls my fn for every value

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i);
    }
  };
}

const ret = arr.myForEach((value, index) => {
  console.log(`My ForEach Value at Index ${index} is ${value}`);
});

console.log(`Ret is`, ret); // undefined

// Signature .map - Return new array, each element iterate

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const value = callback(this[i], i);
      result.push(value);
    }

    return result;
  };
}

const newArr = arr.myMap((e) => e * 3);
console.log(newArr);

// Signature .filter - Return new array, input - userFunction
// If user function return true then current value is included in new Array

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        result.push(this[i]);
      }
    }

    return result;
  };
}

const newArr2 = arr.myFilter((value) => value % 2 === 0);
console.log(newArr2);

// Signature .reduce - Returns single final value
// Input two params callback function, initialValue

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialVal) {
    let acc = initialVal;
    let startIndex = 0;
    for (let i = startIndex; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }
    return acc;
  };
}

const sum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(sum);
