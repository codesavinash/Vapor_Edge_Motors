let menuOpen = false;

const getHiddenRight = () => {
  const navWidth = $('nav').outerWidth() || 0;
  return -(navWidth + 40);
};

const syncHiddenPosition = () => {
  if (!menuOpen) {
    $('nav').css('right', getHiddenRight());
  }
};

$(document).ready(() => {
  syncHiddenPosition();
  $(window).on('resize', syncHiddenPosition);
});

function toggleMenu() {
  if (!menuOpen) {
    $('nav').stop(true).animate(
      {
        right: 0
      },
      280,
      'swing'
    );
    menuOpen = true;
  } else {
    $('nav').stop(true).animate(
      {
        right: getHiddenRight()
      },
      240,
      'swing',
      () => {
        menuOpen = false;
      }
    );
  }
}