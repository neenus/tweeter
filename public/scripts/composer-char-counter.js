$(document).ready(function() {
  
  // count $textarea charecters 
  // reduce charecter count when entries are made to text area 
  // 
  
  $('textarea').on('input', function () {
    let charCounter = $(this).val().length;
    let currentcount = 140 - charCounter;
    let $counter = $(this).siblings('.counter');
    $counter.text(currentcount);

    if (currentcount < 0) {
     $counter.addClass('warningCounter');
    } else {
      $counter.removeClass('warningCounter');
    }
    
  });
});