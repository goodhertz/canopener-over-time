
var $images = $("#images img");

$("#range").change(function() {
  $images.removeClass("visible").eq(parseInt(this.valueAsNumber, 10)).addClass("visible");
});

$images.eq(0).addClass("visible");