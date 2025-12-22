const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

//
// Get a random color among the list of available colors
//
function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}


// Create a new card
function createCard() {

  // 1 - Random color for card
  const color = randomColor();

  // Create card
  const newcard = document.createElement("div");
  newcard.className = "card";
  newcard.style.backgroundColor = color;

  // 2 - Set card text
  const newtexts = document.createElement("p");
  newtexts.textContent = "Description";

  // 3 - Set card footer
  const newfooter = document.createElement("div");
  newfooter.className = "card-footer";

  // 4 - Manage footer button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove Card";

  removeBtn.addEventListener("click", function () {
    newcard.remove();
  });

  // 5 - Add card to container
  newfooter.appendChild(removeBtn);
  newcard.appendChild(newtexts);
  newcard.appendChild(newfooter);

  const container = document.querySelector(".container");
  container.appendChild(newcard);
}

//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.querySelector('#create');
btnCreate.addEventListener('click', createCard);