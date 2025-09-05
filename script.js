
function rollDice() {
  // Step 1: Random number between 1 and 6
  var randomNumber = Math.floor(Math.random() * 6) + 1;
// Step 2: Dice faces in Unicode (⚀ ⚁ ⚂ ⚃ ⚄ ⚅)
  var diceFaces = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];

  // Step 3: Update dice element
  document.getElementById("dice").innerHTML = diceFaces[randomNumber - 1];
}