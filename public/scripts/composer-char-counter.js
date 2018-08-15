$(document).ready(function() {
  
  // count $textarea charecters 
  // reduce charecter count when entries are made to text area 
  // 
  
  let charCounter = 0;
  let $textarea = $('textarea').on('input', event => {
    charCounter = $('textarea').val().length;
    let currentcount = 140 - charCounter;
    $('.counter').text(currentcount);

    if (currentcount < 0) {
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', 'black');
    }
    
  });
});