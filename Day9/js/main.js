const guessButton = document.getElementById("guessBtn");
const guessInput = document.getElementById("guessInput");
const guessResult = document.getElementById("guessResult");

function randomNumber(number) {
  const inputValue = guessInput.value;
  number = Math.floor(Math.random() * 10) + 1;

  if (inputValue === number.toString()) {
    guessResult.innerText = "You win!";
  } else {
    guessResult.innerText = "You lose!";
  }
}

guessButton.addEventListener("click", () => {
  randomNumber();
});
