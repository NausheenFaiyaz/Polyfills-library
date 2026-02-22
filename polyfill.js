// Fallback - Polyfill - Backup Function

const arr = [1, 2, 3, 4, 5, 6];

// Real Signature - No return, function input param, value, index
// calls my fn for every value


if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i);
    }
  };
}


const ret= arr.myForEach(function (value, index) {
  console.log(`My ForEach Value at Index ${index} is ${value}`);
});

// console.log(`Ret is`, ret);