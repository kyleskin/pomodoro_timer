function updateTimer(deadline){
  var time = deadline - new Date();
  return {
    'minutes': Math.floor( (time/1000/60) % 60),
    'seconds': Math.floor( (time/1000) % 60),
    'total': time
  };
}

function animateClock(span){
  span.className = "turn";
  setTimeout(function(){
    span.className = "";
  },700);
}

function startTimer(id, deadline){
  var timerInterval = setInterval(function(){
    var clock = document.getElementById(id);
    var timer = updateTimer(deadline);

    clock.innerHTML = '<span>' + timer.minutes + '</span>'
                    + '<span>' + timer.seconds + '</span>';

    var spans = clock.getElementsByTagName("span");
    animateClock(spans[1]);
    if(timer.seconds == 59) animateClock(spans[0]);

    if(timer.total < 1){
      document.title = "TIME'S UP";
      clearInterval(timerInterval);
      clock.innerHTML = '<span>0</span><span>0</span>';
    }
  }, 1000);
}

var timerAmount = 0;

$("#twentyfive_button").click(function(){
  timerAmount = 25;
  document.title = 'Pomodoro Timer';
  var deadline = new Date();
  deadline.setMinutes(deadline.getMinutes() + timerAmount);
  startTimer("clock", deadline);
});

$("#ten_button").click(function(){
  timerAmount = 10;
  document.title = 'Pomodoro Timer';
  var deadline = new Date();
  deadline.setMinutes(deadline.getMinutes() + timerAmount);
  startTimer("clock", deadline);
});

$("#five_button").click(function(){
  timerAmount = 5;
  document.title = 'Pomodoro Timer';
  var deadline = new Date();
  deadline.setMinutes(deadline.getMinutes() + timerAmount);
  startTimer("clock", deadline);
});

window.onload = function(){
  clock.innerHTML = '<span>0</span><span>0</span>';
};
