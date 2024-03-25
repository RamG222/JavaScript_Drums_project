for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnterHTML = this.innerHTML;
    
    makeSound(buttonInnterHTML);
    buttonAnimation(buttonInnterHTML);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(key) {
  var selectedButton = document.querySelector("." + key);
  selectedButton.classList.add("pressed");
  setTimeout(function () {
    selectedButton.classList.remove("pressed");
  }, 1);
}

function makeSound(key) {
  switch (key) {
    case "w":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;
    case "a":
      var audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;
    case "s":
      var audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
      break;
    case "d":
      var audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;
    case "j":
      var audio5 = new Audio("sounds/crash.mp3");
      audio5.play();
      break;

    case "k":
      var audio6 = new Audio("sounds/kick-bass.mp3");
      audio6.play();
      break;

    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
      console.log(buttonInnterHTML);
  }
}
