var cont = 0;
function loopSlider() {
  var xx = setInterval(function () {
    switch (cont) {
      case 0: {
        $("#slider-1").fadeOut(400);
        $("#slider-2").delay(400).fadeIn(400);
        $("#sButton1").removeClass("bg-purple-800");
        $("#sButton2").addClass("bg-purple-800");
        cont = 1;

        break;
      }
      case 1: {
        $("#slider-2").fadeOut(400);
        $("#slider-1").delay(400).fadeIn(400);
        $("#sButton2").removeClass("bg-purple-800");
        $("#sButton1").addClass("bg-purple-800");

        cont = 0;

        break;
      }
    }
  }, 8000);
}

function reinitLoop(time) {
  clearInterval(xx);
  setTimeout(loopSlider(), time);
}

function sliderButton1() {
  $("#slider-2").fadeOut(400);
  $("#slider-1").delay(400).fadeIn(400);
  $("#sButton2").removeClass("bg-purple-800");
  $("#sButton1").addClass("bg-purple-800");
  reinitLoop(4000);
  cont = 0;
}

function sliderButton2() {
  $("#slider-1").fadeOut(400);
  $("#slider-2").delay(400).fadeIn(400);
  $("#sButton1").removeClass("bg-purple-800");
  $("#sButton2").addClass("bg-purple-800");
  reinitLoop(4000);
  cont = 1;
}

$(window).ready(function () {
  $("#slider-2").hide();
  $("#sButton1").addClass("bg-purple-800");

  loopSlider();
});
function toggleNext() {
  var element = document.getElementById("leftandin1");
  element.classList.toggle("delay-06s");
  element.classList.toggle("fadeout");
  element.classList.toggle("displaynone");
  var element = document.getElementById("leftandin2");
  element.classList.toggle("display");
  element.classList.toggle("animated");
  var element = document.getElementById("inner2");
  element.classList.toggle("delay-06s");
  element.classList.toggle("fadeIn");
}

// whyus graph

// pages
// web design
// Quetion answer
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
