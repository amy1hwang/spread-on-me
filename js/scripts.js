
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
  var modal = document.getElementById('sub-popup');


  // Get the button that opens the modal
  var btn = document.getElementById('subscription');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    $('#sub-popup').show();
    modal.style.display = "flex";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  var isshow = localStorage.getItem('isshow');
  if (isshow== null) {
    localStorage.setItem('isshow', 1);

    // Show popup here
    $('#sub-popup').css('display', 'flex');
  }

  $('[data-toggle="popover"]').popover();

  $('#cvc').on('click', function(){
    if ( $('.cvc-preview-container').hasClass('hide') ) {
      $('.cvc-preview-container').removeClass('hide');
    } else {
      $('.cvc-preview-container').addClass('hide');
    }
  });

  $('.cvc-preview-container').on('click', function(){
    $(this).addClass('hide');
  });
});
