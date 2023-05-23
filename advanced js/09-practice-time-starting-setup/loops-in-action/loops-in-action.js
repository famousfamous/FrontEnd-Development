//Now working with the first section: Calculate Sum.

const calculateSumButtonElement = document.querySelector("#calculator button");

//add the event function
function calculateSum() {
  const userNumerInputElement = document.getElementById("user-number");
  const enteredNumber = userNumerInputElement.value;

  let sumUptoNumber = 0;
  for (let i = 0; i <= enteredNumber; i++);
  {
    sumUptoNumber = sumUptoNumber + 1;
  }
  const outputResultElement = document.getElementById("calculated-sum");
  outputResultElement.textContent = sumUptoNumber;
  outputResultElement.style.display = "block";
}

//add event listener
calculateSumButtonElement.addEventListener("click", calculateSum);

//2. Loops - highlight a class
const highlighButtonElement = document.querySelector("#highlight-links button");

function highlightLink() {
  const anchorElements = document.querySelectorAll("#highlight-links a");
  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlighButtonElement.addEventListener("click", highlightLink);

//3. Displaying data
const dummyUserData = {
  firstName: "Rach",
  lastName: "Fame",
  age: 20,
};

displayDummyDataButtonElement = document.querySelector("#user-data button");

function showDummyUserData() {
  const outputDataElement = document.getElementById("output-user-data");

  //the following line will clear the variable before outputting the new li information.
  outputDataElement.innerHTML = "";

  for (const item in dummyUserData) {
    const newUserDataListItemElement = document.createElement("li");
    const outputText = item.toUpperCase() + ": " + dummyUserData[item];
    newUserDataListItemElement.textContent = outputText;
    outputDataElement.append(newUserDataListItemElement);
  }
}

displayDummyDataButtonElement.addEventListener("click", showDummyUserData);

//first time to use the RANDOM function in js
//4. Statistics - roll dice portion.

const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRoll() {
  const targetNumberInputElement =
    document.getElementById("user-target-number");
  const diceRollsListElement = document.getElementById("dice-rolls");

  const enteredNumber = targetNumberInputElement.value;
  diceRollsListElement.innerHTML = "";

  //now we programme the while loop after defining a boolean variable
  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();
    // if (rolledNumber == enteredNumber) {
    //     hasRolledTargetNumber = true
    // }
    hasRolledTargetNumber = rolledNumber == enteredNumber;
    numberOfRolls = numberOfRolls + 1;

    const newRollListItemElement = document.createElement("li");
    const outputText = "Roll " + numberOfRolls + ": " + rolledNumber;
    newRollListItemElement.textContent = outputText;
    diceRollsListElement.append(newRollListItemElement);
  }

  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumberElement = document.getElementById(
    "output-target-number"
  );

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRoll);
