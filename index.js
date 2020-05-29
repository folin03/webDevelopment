//window.onscroll = function() {scrollFunction()};


//function scrollFunction() {
// if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//    document.getElementById("nav_bar").style.grid-row = "1";
//  } else {
//    document.getElementById("nav_bar").style.grid-row = "2";
//  }
//}

function open_nav() {
  document.getElementById("sideMenuId").style.width = "180px";
}

function close_nav() {
  document.getElementById("sideMenuId").style.width = "0px";
}