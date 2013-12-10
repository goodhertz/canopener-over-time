
var loadedImages = [];
for (var i = 0; i < images.length; i++) {
  var image = new Image();
  image.src = images[i];
  loadedImages[i] = image;
}

$("#range").change(function() {
  var $visible = $(".screen img.visible");
  var $notVisible = $(".screen img").not(".visible");
  $notVisible.attr("src", images[parseInt(this.valueAsNumber, 10)]).addClass("visible");
  $visible.removeClass("visible");
});

var current = 0;
var cycle = function() {
    var $visible = $(".screen img.visible");
    var $notVisible = $(".screen img").not(".visible");
    $notVisible.attr("src", images[current]).addClass("visible").animate({ opacity: 1 });
    $visible.removeClass("visible").animate({ opacity: 0 });
};

$("#prev").click(function() {
  if (current > 0) {
    current -= 1;
  } else {
    current = images.length - 1;
  }
  cycle();
});

$("#next").click(function() {
  if (current < images.length - 1) {
    current += 1;
  } else {
    current = 0;
  }
  cycle();
});