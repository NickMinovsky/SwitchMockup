$(function() {
  // hidden menu
  $(".menu-toggle, .fa-times").on("click", function() {
    $("nav").toggleClass("active");
    $(".overlay").toggleClass("menu-open");
  });

  $(".overlay").on("click", function(event) {
    $("nav").removeClass("active");
    $(this).removeClass("menu-open");
  });
  // mouse enters/leaves
  $("#m1").on("mouseenter", () => {
    $("#image").attr("src", "images/mario.png");
  });
  $("#m1").on("mouseleave", () => {
    $("#image").attr("src", "images/home.png");
  });

  $("#m2").on("mouseenter", () => {
    $("#image").attr("src", "images/metroid.png");
  });
  $("#m2").on("mouseleave", () => {
    $("#image").attr("src", "images/home.png");
  });

  $("#m3").on("mouseenter", () => {
    $("#image").attr("src", "images/sonic.png");
  });
  $("#m3").on("mouseleave", () => {
    $("#image").attr("src", "images/home.png");
  });

  $("#m4").on("mouseenter", () => {
    $("#image").attr("src", "images/poke.png");
  });
  $("#m4").on("mouseleave", () => {
    $("#image").attr("src", "images/home.png");
  });
});
