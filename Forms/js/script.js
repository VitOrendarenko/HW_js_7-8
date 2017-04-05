$(function() {
  $("#firstname").hover(function() {
    $(this).next("p").animate({opacity: "show"}, "slow");
  }, function() {
    $(this).next("p").animate({opacity: "hide"}, "slow");
    $("#lastname").hover(function() {
      $(this).next(".tip_lastname").animate({opacity: "show"}, "slow");
    }, function() {
      $(this).next("p").animate({opacity: "hide"}, "slow");
      $("#address").hover(function() {
        $(this).next(".tip_address").animate({opacity: "show"}, "slow");
      }, function() {
        $(this).next("p").animate({opacity: "hide"}, "slow");
      });
    });
  });
  $("#help").click(function(){
    $("p").slideToggle("slow");
    $(this).toggleClass("active");
  });
});