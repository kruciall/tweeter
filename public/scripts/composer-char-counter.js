$(document).ready(function () {
  console.log("TWEET");
  $('textarea').on('input', function () {
    let tweetLength = $(this).val().length;
    const counter = $(this).siblings('div.button').children('output.counter');
    counter.text(140 - tweetLength);
    counter.css("color", tweetLength > 140 ? "red" : "black");
  });
});

