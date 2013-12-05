
var loadedImages = [];
for (var i = 0; i < images.length; i++) {
  var image = new Image();
  image.src = images[i];
  loadedImages[i] = image;
}

$("#range").change(function() {
  var $visible = $(".screen img.visible");
  var $notVisible = $(".screen img").not(".visible");
  console.log($visible.get(0), $notVisible.get(0));
  $notVisible.attr("src", images[parseInt(this.valueAsNumber, 10)]).addClass("visible");
  $visible.removeClass("visible");
});