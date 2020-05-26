window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav_bar").style.grid-row = "1";
  } else {
    document.getElementById("nav_bar").style.grid-row = "2";
  }
}