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
