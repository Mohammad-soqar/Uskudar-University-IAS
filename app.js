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