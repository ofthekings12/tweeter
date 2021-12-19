/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]

$(document).ready(() => {
  const createTweetElement = function(tweet) {
    let $tweet = `<article class="tweet">
    <header class="header-user">
    <div class="header-content">
    <div class="user-info">
    <img class="avatar" src=${tweet.user.avatars}>
    <h3 class="userName">${tweet.user.name}</h3>
    </div>
    <h4 class="userHandle">${tweet.user.handle}</h4>
    </div>
    </header>
    <div class="content">
    <h3>${tweet.content.text}</h3>
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
      alert("Tweet cannot be empty")
    } else if (tweetContent.val().length > 140) {
      alert("Tweet cannot be over 140 characters")

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




  // Test / driver code (temporary). Eventually will get this from the server.
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227

// }

// const $tweet = createTweetElement(tweetData);

// // Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
