$(document).ready(function() {
  let maxLength = 140;
  $('.new-tweet #tweet-text').keypress(function() {
    let length = $(this).val().length;
    console.log(length)
    $('.counter').text(length);
  })
});