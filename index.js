var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //var sound = new Audio('sounds/crash.mp3');
    //sound.play();
    new Audio('sounds/crash.mp3').play();
    this.style.color = "white";
  });
}

document.addEventListener("keypress", function() {
  alert("Key was pressed");
});

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
}
