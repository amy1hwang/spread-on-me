
$(function() {
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
  if (isshow == null) {
    localStorage.setItem('isshow', 1);

    // Show popup here
    $('#sub-popup').css('display', 'flex');
  }

});
