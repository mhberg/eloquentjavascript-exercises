//chapter20 exercise1 - Search tool

console.log("[SEARCH TOOL INITIATED]");
//import of File System methods
const {statSync, readdirSync, readFileSync} = require("fs");

//creates searchString
var searchString = new RegExp(process.argv[2]);

//runs search method on path
for (var path of process.argv.slice(3)){
    console.log("Path: " + path);
    search(path);
}

//checks for isDirectory (then recursively searches on pattern in directory files)
//if pattern match file content - log file name
function search(file){
    console.log("[SEARCHING FILES..]");
    var fileStat = statSync(file);
    if(fileStat.isDirectory()){
        for(var name of readdirSync(file)){
            search(file + "/" + name);
        }
    } else if (searchString.test(readFileSync(file))){
        console.log("File found: " + file);
    }
}
