function arrayToList(array){
    var list = null;
      for(var i = (array.length - 1); i >= 0; i--){
        list = {value: array[i], rest: list};
      }
      return list;
  }

function listToArray(list){
  var array = new Array();
  for (let node = list; node; node = node.rest) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

function prepend(element, list){
  return {value: element, rest: list};
}

function nth(list, n){
  if(n == 0){
    return list.value;
  }
  
  return nth(list.rest, (n - 1));
}
  
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20