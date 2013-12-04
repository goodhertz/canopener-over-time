var hogan = require("hogan.js");
var fs = require("fs");

fs.readdir("images/", function(err, files) {
  var index = hogan.compile(fs.readFileSync("index.hjs", { encoding:"utf8" }));
  fs.writeFile("index.html", index.render({ images: files }, {}));
});