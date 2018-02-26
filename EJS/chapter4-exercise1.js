//chapter4 exercise1 - The sum of a range
function range(a, b, step){
    var numArray = new Array();
  if(step == null){
      step = 1;
  }
    if(a < b){
        for(var i = a; i <= b; i = i + Math.abs(step)){
        numArray.push(i);
      }
    } else if(b < a){
      for(var i = a; i >= b; i = i - Math.abs(step)){
        numArray.push(i);
      }
    } else {
      numArray = a;
    }
    return numArray;
  }

function sum(numArray){
    var result = 0;
  for(var num of numArray){
        result += parseInt(num);
  }
  return result;
}
  
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55