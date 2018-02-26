function deepEqual(x, y){
  if(x === y){
    return true;
  }
  
  if(typeof x != "object" || typeof y != "object" || x == null || y == null){
    return false;
  }
    var propsX = 0;
    var propsY = 0;
    for (var prop in x){
      propsX++;
    }
    for (var prop in y){
      propsY++;

      if(!deepEqual(x[prop], y[prop]) || !(prop in x)){
        return false;
        }
      }
      return propsX === propsY;
    }

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true