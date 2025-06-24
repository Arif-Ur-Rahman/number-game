// Select DOM elements
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const guessedNumbersSpan = document.getElementById("guessedNumbers");
const attemptsLeftSpan = document.getElementById("attemptsLeft");
const message = document.getElementById("message");
const resultBanner = document.getElementById("resultBanner");

// Initialize game state
const targetNumber = Math.floor(Math.random() * 10) + 1;
let attemptsLeft = 10;
let guessedNumbers = [];

submitBtn.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);

  // Validate input
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "⛔ Please enter a number between 1 and 100.";
    return;
  }

  // Ignore if no attempts left or already won
  if (attemptsLeft === 0 || resultBanner.textContent !== "") return;

  guessedNumbers.push(guess);
  attemptsLeft--;

  guessedNumbersSpan.textContent = guessedNumbers.join(", ");
  attemptsLeftSpan.textContent = attemptsLeft;

  // Check win/loss
  if (guess === targetNumber) {
    message.textContent = "";
    resultBanner.innerHTML = `🎉 User won after <strong>${10 - attemptsLeft}</strong> attempt(s)!`;
    resultBanner.style.color = "black";
    document.body.style.background = "linear-gradient(to right, #00c9ff, #92fe9d)";
  } else if (attemptsLeft === 0) {
    resultBanner.innerHTML = `❌ Game Over! The number was <strong>${targetNumber}</strong>`;
    resultBanner.style.color = "#ff4e4e";
  } else {
    message.textContent =
      guess > targetNumber ? "📉 Try a lower number." : "📈 Try a higher number.";
  }

  guessInput.value = "";
  guessInput.focus();
});
