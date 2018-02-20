//chapter3 exercise1 - Minimum

function min (a, b){
    var min = (a < b ? a : b)
    return min;
  }

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10