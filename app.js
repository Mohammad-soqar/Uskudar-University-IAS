let progressCounter = 0;


$('#startButton').on('click', startProgressAnimation);

function startProgressAnimation() {
  const circle = $('.progress-circle').eq(progressCounter);
  const line = $('.progress-line').eq(progressCounter);

  circle.addClass('progress-animation');
  line.addClass('progress-animation2');

  progressCounter++;

  if (progressCounter >= $('.progress-circle').length) {
    progressCounter = 0;
  }
}

/* dropdown menue for messages Home page student  */

$(document).ready(function() {
  var angle22 = 0;
  $('#dropdown-messages-student').click(function(){
    $('.Messagesslide').slideToggle();
    angle22 += 180;
    angle22 = angle22 % 360; 
    $('#down-arrow-home-student').css({
      'transform': 'rotate(' + angle22 + 'deg)',
      'transition': 'transform 0.5s ease-in-out'
    });
    
  if((angle22/180)%2!=0){
    $('.Messages').css({
      'margin-bottom':'0',
      'transition': 'margin-bottom 0.5s ease-in-out'
    })}
    else{
      $('.Messages').css({
        'margin-bottom':'calc(4.5vh)',
        'transition': 'margin-bottom 0.5s ease-in-out'
      })} 
  });
  });

/* dropdown menue for questions and answers support student page  */
function toggleAnswer(questionClass, answerClass, arrowId, angle) {
  $(questionClass).click(function() {
    $(answerClass).slideToggle();
    angle += 180;
    angle = angle % 360;
    $(arrowId).css({
      'transform':'rotate(' + angle + 'deg)',
      'transition': 'transform 0.5s ease-in-out'
    });
  });
}
var angle1 = 0;
toggleAnswer('.question1', '.answer1', '#down-arrow1', angle1);

var angle2 = 0;
toggleAnswer('.question2', '.answer2', '#down-arrow2', angle2);

var angle3 = 0;
toggleAnswer('.question3', '.answer3', '#down-arrow3', angle3);

var angle4 = 0;
toggleAnswer('.question4', '.answer4', '#down-arrow4', angle4);


$(document).ready(function() {
  $('#check-all').on('click', function() {
    // Add 'collapse' class to 'right-section-widgets' div
    $('.right-section-widgets')
      .addClass('collapse')
      .css('overflow', 'hidden');

    // Animate the width of 'widget-left-side' div to 100% over 0.5 seconds
    $('.widget-left-side').animate({width: '90%'}, 500, function() {
      // Hide the content of 'widget-left-side' div after animation completes
      $(this).css('overflow', 'hidden');
    });

    // Update other elements
    $('#back-left').addClass('back-left-btn');
    $('#searchInput').css('display', 'block');
    $('#check-all').css('display', 'none');
  });

  $('#back-left').on('click', function() {
    $("#searchInput").val("");
    // Remove 'collapse' class from 'right-section-widgets' div
    $('.right-section-widgets')
      .removeClass('collapse')
      .css('overflow', 'hidden');

    // Set the width of 'widget-left-side' div back to 50% over 0.5 seconds
    $('.widget-left-side').animate({width: '85.5%'}, 500, function() {
      // Show the content of 'widget-left-side' div after animation completes
    });

    // Update other elements
    $('#back-left').removeClass('back-left-btn');
    $('#searchInput').css('display', 'none');
    $('#check-all').css('display', 'block');
    $('tr').css('display', '');

    // Use setTimeout to delay the execution of the overflow visible code by 200 milliseconds
    setTimeout(function() {
      $('.right-section-widgets').css('overflow', 'visible');
    }, 200);
  });
});





