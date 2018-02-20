//chapter3 exercise2 - Recursion

function isEven(n){
    num = Math.abs(n);
    var evenNum = false;
    if(num == 0){
      evenNum = true;
    } else if (num == 1){
      evenNum = false;
    } else if (num = isEven(num-2)){
      evenNum = true;
    }
      
    return evenNum;
  }
  
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-2));
  // → ??