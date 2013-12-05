var hogan = require("hogan.js");
var fs = require("fs");
var _ = require("underscore");

fs.readdir("images/", function(err, files) {
  var images = _.filter(files, function(file) {
    return file.match(/^\./) === null;
  });

  var index = hogan.compile(fs.readFileSync("index.hjs", { encoding:"utf8" }));
  fs.writeFile("index.html", index.render({ images: images, image_count: images.length }, {}));
});