
$(function() {

  $('.search-hover').click(function() {
    $('.search').fadeIn();
  });

  $('.search-icon-x').click(function() {
    $('.search').fadeOut(500);
  });



  var mainNum = 236;

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > mainNum) {
      $('.main-nav').addClass('fixed');
    } else {
      $('.main-nav').removeClass('fixed');
    }
  });

  var num = 200;

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
      $('.nav-bar-wrapper').addClass('fixed');
    } else {
      $('.nav-bar-wrapper').removeClass('fixed');
    }
  });

  // Get the modal
  var modal = document.getElementsByClassName("sub-popup");

  // Get the button that opens the modal
  var btn = document.getElementsByClassName("subscription");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});
