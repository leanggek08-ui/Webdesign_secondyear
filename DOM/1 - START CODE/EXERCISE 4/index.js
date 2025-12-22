// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = 2359;

// DOMS ELEMENTS  ---------------------------------------------------------
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);

const passwordInput = document.getElementById("passwordInput");
passwordInput.addEventListener("keypress", handleEnterPasserord);

const instructionLabel = document.getElementById("instructionLabel");

// Chances
let chanceRemaining = 3;

// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

function showGame() {
  // You can use this function to dispaly the Game view
  show(passwordView);
  hide(lostView);
  hide(wonView);
}

function showWin() {
  // You can use this function to dispaly the Win View
  show(wonView);
  hide(lostView);
  hide(passwordView);
}
function showLost() {
  // You can use this function to dispaly the Lost View
  show(lostView);
  hide(wonView);
  hide(passwordView);

  if(chanceRemaining<=0){
    hide(tryAgainButton );
  }else{
    show(tryAgainButton);
    tryAgainButton.textContent = `Try again (${chanceRemaining})`;
  }
}

 
function handleCheck() {
     // Manage your logic when the button is pressed
  const passwordEntered = passwordInput.value;

  if (Number(passwordEntered) === SECRET_CODE) {
    showWin();
  } else {
    chanceRemaining--;
    showLost();
  }
}

function handleEnterPasserord(event) {
  if (event.key === "Enter") {
    handleCheck();
  }
}

// MAIN   ---------------------------------------------------------

 
