//chapter3 exercise3 - Bean Counting
function countBs(string){
    var count = 0;
    for(var i = 0; i <= string.length; i++){
      if(string[i] == "B"){
        count++;
      }
    }
    return count;
  }
  
  function countChar(string, letter){
    var count = 0;
    for(var i = 0; i <= string.length; i++){
      if(string[i] == letter){
        count++;
      }
    }
    return count;
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4