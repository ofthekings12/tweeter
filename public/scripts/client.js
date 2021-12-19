/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(() => {
//function to hide errorbox
const hideErrorBox = function() {
  $(".new-tweet .error").hide()
};

// function to prevent XSS
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // creating html <article> element containing user's name, handle, avatar, and entered quack(tweet)
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
  //form submission
  $('#post-tweet').on('click', (event) => {
    //callign this function to prevent browser taking user to /tweets/ url
    event.preventDefault()
    const tweetContent = $("#tweet-text")
    console.log(tweetContent.val())
    const formData = $('.form').serialize()
    //form logic for if a user enters < 0 or > 140 characters
    if (tweetContent.val().length <= 0) {
      $(".new-tweet .error").text("🦆You need to type SOMETHING to Quack!🦆");
      $(".new-tweet .error").slideDown();
    } else if (tweetContent.val().length > 140) {
      $(".new-tweet .error").text("🦆Quacks cannot be more than 140 characters!🦆");
      $(".new-tweet .error").slideDown();
    } else {
      postTweet(formData);
    }

  })
  //post the tweet
  const postTweet = (text) => {
    $.ajax({url: "/tweets", method: "POST", data: text})
      .then((result) => {
        loadTweets();
      })
  }
  //load the tweets before rendering
  const loadTweets = () => {
    hideErrorBox();
    $.ajax({url: "/tweets", method: "GET"})
      .then((result) => {
        renderTweets(result);
      })
  }
  //empty tweet container
  const renderTweets = function(tweets) {
    $(".tweet-container").empty() 
    for (tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.tweets-container').prepend($tweet);
    }
  }
//empties the container, loads the previous tweets and renders the new tweet to be included.
loadTweets(); 

});