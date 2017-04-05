$(document).ready(function() {

  $(".tabs_item").not(":first").hide();
$(".wrapper .nav-tabs").click(function () {
  $(".wrapper .nav-tabs").removeClass("active").eq($(this).index()).addClass("active");
  $(".tabs_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

});