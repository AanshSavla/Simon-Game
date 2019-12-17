
// variables
var buttonColors = ["red", "blue", "green", "yellow"];
var randomNumber, randomChosenColor, getClass,i=-1,level=1;
var gamePattern = [];
var userClickedPattern = [];
var start=false;

//startring keyboard press
$(document).keypress(function() {
  if(!start)
  {
    $("body").removeClass("game-over");
setTimeout(function(){
  nextSequence();
},500);
start=true;
}
});

// creates and append sequence.auto-generates sequence.
function nextSequence() {

  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  getClass = "#" + randomChosenColor;
  $(getClass).fadeOut(100).fadeIn(100);
  playSound(randomNumber);
  $("h1").text("Level:"+level);
  level++;
}

// Responds to user click
$(".btn").click(function() {
  var getID = $(this).attr("id");
  i++;
  if(getID!==gamePattern[i])
  {
    setToInitialValues();
    setTimeout(function(){
      animationGameOver();
    },250);


  }
  else{
  userClick(getID);
  }
});

// Setting to initial values after game over.
function setToInitialValues(){
  gamePattern.length=0;
  userClickedPattern.length=0;
  i=-1;
  level=1;
}

//Animations during game over
function animationGameOver(){
  $("body").addClass("game-over");
    $("h1").text("Game Over.Press any key to play again");
    var gameOverAudio = new Audio("sounds/wrong.mp3");
    gameOverAudio.play();
    start=false;
}


function userClick(getID) {
  $("#" + getID).fadeOut(100).fadeIn(100);
  var Number = buttonColors.indexOf(getID);
  playSound(Number);
  userClickedPattern.push(getID);
  if(i===gamePattern.length-1){
    setTimeout(function(){
      i=-1;
      nextSequence();
    },1000);

  }
}


// Playing Sound

function playSound(Number) {

  switch (Number) {
    case 0:
      var audio1 = new Audio("sounds/red.mp3");
      audio1.play();
      break;
    case 1:
      var audio2 = new Audio("sounds/blue.mp3");
      audio2.play();
      break;
    case 2:
      var audio4 = new Audio("sounds/green.mp3");
      audio4.play();
      break;
    case 3:
      var audio3 = new Audio("sounds/yellow.mp3");
      audio3.play();
      break;

    default:
      alert("Not Loaded");
  }
}
