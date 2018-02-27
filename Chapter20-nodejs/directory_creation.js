//chapter20 exercise2 - Directory creation
const {mkdir, stat} = require("mz/fs");

/*
Created with DELETE as template
- catches error if stat(path) fails, awaits make directory (mkdir) with path
- if path already exists returns 204 if isDirectory, else 400
*/
methods.MKCOL = async function(request) {
  var path = urlPath(request.url);
  var stats;
  try {
    stats = await stat(path);
  } catch (error) {
    if (error.code != "ENOENT") throw error;
    await mkdir(path);
    return {status: 204};
  }
  if (stats.isDirectory()) return {status: 204};
  else return {status: 400, body: "directory not found"};
};