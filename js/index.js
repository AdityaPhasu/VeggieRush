$(document).ready(function() {
  if ($(window).width() < 768) {

    $(".download-button").removeClass(".btn-lg");
    $(".download-button").addClass(".btn-sm");
  }
});


$('.fa-earth-asia').hover(
  function() {
    $(this).addClass('fa-spin');
    $(this).css("--fa-animation-duration", "15s");
  },
  function() {
    $(this).removeClass("fa-spin");
  }
);

$('.fa-wheat-awn').hover(
  function() {
    $(this).addClass('fa-shake');
    $(this).css("--fa-animation-duration", "5s");
  },
  function() {
    $(this).removeClass("fa-shake");
  }
);

$('.fa-truck-fast').hover(
  function() {
    $(this).addClass('fa-beat-fade');
  },
  function() {
    $(this).removeClass("fa-beat-fade");
  }
);