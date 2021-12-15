$(document).ready(function() {
  let maxLength = 140;
  $('#tweet-text').keydown(function() {
    console.log("hello")
    let length = $(this).val().length;
    let remainingLength = maxLength-length;
    console.log(length, remainingLength)
    $('#counter').text(remainingLength);
    if (remainingLength < 0) {
      $('#counter').addClass("counter")
    }
    if (remainingLength > 0) {
      $('#counter').removeClass("counter")
    }
  })
  
});


