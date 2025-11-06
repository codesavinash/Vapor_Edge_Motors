let menuOpen = false;

function toggleMenu() {
  if(!menuOpen) {
    $('nav').animate({
      right:0
    }, 320, 'swing');
    menuOpen = true;
  }
  else {
    $('nav').animate({
      right: -270
    }, 260, 'swing');
    menuOpen = false;
  }
}