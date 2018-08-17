/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  // prevent default submit on form and pass it serialized to server on submit 
  $('#tweet-submit').click(function (event) {
    event.preventDefault();
    if ($('textarea').val() === ''|| $('textarea').val() === null) {
      // console.log('text area empty or null');
      alert('Tweet can not be empty');
    } else if ($('textarea').val().length > 140) {
      // console.log('over limit');
      alert('Tweet charecter count exceeded');
    } else {
      console.log($(this));
      console.log($(this).serialize());
      
    }
  });
  
  // –––––––––––––––––––––––––––––––––––––
  // function to create HTML article elements 
  function createTweetElement(tweetData) {
    let name = tweetData.user.name;
    let handle = tweetData.user.handle;
    let profileImg = tweetData.user.avatars.small;
    let tweetContent = tweetData.content.text;

    // Calculate time stamp in days
    let oldtime = new Date(tweetData.created_at).getTime();
    let today = new Date().getTime();
    let footer = Math.floor((today - oldtime) / 1000 / 60 / 60 / 24);

    var element =
      `<article class="tweet">
        <header>
          <img class="profile-img" src="${profileImg}">
          <div class="name">${name}</div>
          <div class="handle">${handle}</div>
        </header>
        <div class="tweet-body">
          <p>${tweetContent}</p>
        </div>
        <footer>
          <p>${footer} days ago</p>
        </footer>
      </article> `;
    return element;
  }

  // function to render article tweets to HTML page  
  function renderTweets(loadTweets) {
    for (let tweet of loadTweets) {
      let $element = createTweetElement(tweet);
      $('#tweets-container').append($element); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    }
  }

  // Function to make an Ajax get request to load tweets from http://localhost:8080/tweets
  function loadTweets() {
    $.ajax('/tweets', {
        method: 'GET'
      })
      .then(function (tweetsJSON) {
        console.log('success: ', tweetsJSON);
        renderTweets(tweetsJSON);
      });
  }
  loadTweets();
});