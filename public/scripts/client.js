/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(() => {
  

  //can factor all these functions out of the doc.ready
  const createTweetElement = function(data) {

    const tweet = data.content.text;
    const name = data.user.name;
    const avatar = data.user.avatars;
    const handle = data.user.handle;
    const createdAt = data.created_at;

    return ` <article class="tweet-container">
      <header>
        <div class="avatar-container">
          <img class="avatar1" src=${escape(avatar)}>
          <p class="username">${escape(name)}</p>
        </div>
          <p class="handle">${escape(handle)}</p>
      </header>
    
      <div class="tweet-content">
        <p>${escape(tweet)}</p>
      </div>
    <div class="separator"></div>
    <footer class="footer-content">
      <h5 class="created_at">${timeago.format(createdAt)}</h5>
      <div class="icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
    </article>`;
  };

  //renders the tweets to the top of the page with prepend
  const renderTweets = function (tweets) {
    $('#tweets-container').empty(); //to prevent duplication of tweets
    for (let tweet of tweets) {
      const tweetElement = createTweetElement(tweet);
      $('#tweets-container').prepend(tweetElement);
    }

  };


  const loadTweets = function () {
    $.get('/tweets')
      .then(function(tweet) {
        renderTweets(tweet);
      });
  };


  $("form").on("submit", function (event) {
    event.preventDefault();
    const $text = $("#tweet-text").val();
    if ($text.length > 140) {
      $(".error").slideDown("slow").delay(1300).slideUp("slow");
      $(".error").text("Exceeded maximum characters of 140!");
      return;
    }
    if ($text <= 0) {
      $(".error").text("No input dectected, write something!");
      $(".error").slideDown("slow").delay(1300).slideUp("slow");
      return;
    }
    $.ajax('/tweets', { method: "POST", data: $(this).serialize() })
      .then(loadTweets);
    $('#tweet-text').val(''); //resets the form input after sucessful input
    $(".counter").val(140); //resets the counter back to 140 after successful input

  });

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  loadTweets();

});
