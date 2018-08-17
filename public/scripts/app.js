/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {


// Fake data taken from tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

// Function to convert time stamp to time past

// function convertDate($element) {
//   let createDateInMs = new Date($element.created_at).getTime(); //.getTime() changes to milliseconds
//   let currentDateInMs = new Date(Date.now()).getTime();
//   let dayinMs = 24 * 60 * 60 * 1000;
//   let timePassedInDays = Math.round(
//     (currentDateInMs - createDateInMs) / dayinMs);
//   return timePassedInDays;
// }
// console.log(convertDate());

function createTweetElement (tweetData) {
  let name = tweetData.user.name;
  let handle = tweetData.user.handle;
  let profileImg = tweetData.user.avatars.small;
  let tweetContent = tweetData.content.text;
  
  let oldtime = new Date(tweetData.created_at).getTime();
  let today = new Date().getTime();
  let footer = Math.floor((today - oldtime)/1000/60/60/24);

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

// $tweet = createTweetElement(tweetData);

function renderTweets(tweets) {
  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (let tweet of tweets ) {
      let $element = createTweetElement(tweet);
      $('#tweets-container').append($element); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
      console.log($element); // to see what it looks like
    }
}
renderTweets(data);

// let $tweet = $("<article>").addClass("tweet");
// Test / driver code (temporary)
});
