$(document).ready(function() {
  $(window).scroll(function() {

    if ($(this).scrollTop() > 250) {
      $('#brief').fadeOut();
    } else {
      $('#brief').fadeIn();
    }
  });


  $(window).scroll(function() {

    if ($(this).scrollTop() < 350) {
      $('#underConstruction').fadeOut();
    } else {
      $('#underConstruction').fadeIn();
    }
  });
});
