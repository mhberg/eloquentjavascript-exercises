//chapter2 exercise3 - Chessboard
var size = 8;
var string = "";

for (i = 1; i <= size; i++) {
  for (j = 1; j <= size; j++) {
    if ((j + i) % 2 == 0){
      string += " ";
  } else { 
    string += "#"; 
  } 
} 
  string += "\n";
} 

console.log(string);
