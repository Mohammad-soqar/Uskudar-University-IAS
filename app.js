let progressCounter = 0;


document.getElementById('startButton').addEventListener('click', startProgressAnimation);


function startProgressAnimation() {
  const circle = document.querySelectorAll('.progress-circle')[progressCounter];
  const line = document.querySelectorAll('.progress-line')[progressCounter];

  circle.classList.add('progress-animation');
  line.classList.add('progress-animation2');

  progressCounter++;

  if (progressCounter >= document.querySelectorAll('.progress-circle').length) {
    progressCounter = 0;
  }
}


/* dropdown menue for messages Home page student  */

var angle22 = 0;
$('#dropdown-messages-student').click(function(){
  $('.Messagesslide').slideToggle();
  angle22 += 180;
  $('#down-arrow-home-student').css({
    'transform': 'rotate(' + angle22 + 'deg)',
    '-moz-transform': 'rotate(' + angle22 + 'deg)',
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

/* dropdown menue for questions and answers support student page  */
var angle = 0;
$('.question1').click (function(){
  $('.answer1').slideToggle();
  angle += 180;
    $('#down-arrow1').css('transform','rotate(' + angle + 'deg)');
});

var angle2 = 0;
$('.question2').click (function(){
  $('.answer2').slideToggle();
  angle2 += 180;
    $('#down-arrow2').css('transform','rotate(' + angle2 + 'deg)');
});


var angle3 = 0;
$('.question3').click (function(){
  $('.answer3').slideToggle();
  angle3 += 180;
    $('#down-arrow3').css('transform','rotate(' + angle3 + 'deg)');
});



var angle4 = 0;
$('.question4').click (function(){
  $('.answer4').slideToggle();
  angle4 += 180;
    $('#down-arrow4').css('transform','rotate(' + angle4 + 'deg)');
});







