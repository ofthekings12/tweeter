/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(() => {

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    let $tweet = `<article class="tweet">
    <header class="header-user">
    <div class="header-content">
    <div class="user-info">
    <img class="avatar" src=${escape(tweet.user.avatars)}>
    <h3 class="userName">${escape(tweet.user.name)}</h3>
    </div>
    <h4 class="userHandle">${escape(tweet.user.handle)}</h4>
    </div>
    </header>
    <div class="content">
    <h3>${escape(tweet.content.text)}</h3>
    </div>
    <footer>
    <div class="timestamp">
    <p>${timeago.format(tweet.created_at)}</p>
    </div>
    <div class="icons">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
    </div>
    </footer>
    </article`;
    
    return $tweet;
    
  }
  
  $('#post-tweet').on('click', (event) => {
    event.preventDefault()
    const tweetContent = $("#tweet-text")
    console.log(tweetContent.val())
    const formData = $('.form').serialize()

    if (tweetContent.val().length <= 0) {
      alert("Quack cannot be empty")
    } else if (tweetContent.val().length > 140) {
      alert("Quack cannot be over 140 characters")

    } else {
      postTweet(formData);
    }

  })
  
  const postTweet = (text) => {
    $.ajax({url: "/tweets", method: "POST", data: text})
      .then((result) => {
        loadTweets();
      })
  }
  
  const loadTweets = () => {
    $.ajax({url: "/tweets", method: "GET"})
      .then((result) => {
        renderTweets(result);
      })
  }
  
  const renderTweets = function(tweets) {
    $(".tweet-container").empty() 
    for (tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.tweets-container').prepend($tweet);
    }
  }

loadTweets(); 

});