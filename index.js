//window.onscroll = function() {scrollFunction()};


function scrollFunction() {
 if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("move_up").style.margin = "0px";
  } else {
    document.getElementById("move_up").style.margin = "16px";
  }
}

function open_nav() {
  document.getElementById("sideMenuId").style.width = "180px";
}

function close_nav() {
  document.getElementById("sideMenuId").style.width = "0px";
}