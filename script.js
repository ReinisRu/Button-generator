// Declaring variables
let allButtons = document.getElementById(`container`);
let btnCount = document.getElementById(`container`).childElementCount;
let minValue;
let maxValue;
let specialValue;
let growValue;

// Adding Listeners

document.getElementById(`addButton`).addEventListener(`click`, function () {
  createButton(++btnCount);
});

document
  .getElementById(`clearButton`)
  .addEventListener(`click`, clearAllButtons);

document
  .getElementById(`createButton`)
  .addEventListener(`click`, generateButtons);

document.getElementById(`resetButton`);
resetButton.addEventListener(`click`, resetValues);

// Declaring functions

function clearAllButtons() {
  while (allButtons.lastElementChild) {
    allButtons.removeChild(allButtons.lastElementChild);
    btnCount = 0;
  }
}

function createButton(i) {
  specialValue = parseInt(document.getElementById(`specialValue`).value);
  growValue = parseInt(document.getElementById(`growValue`).value);
  let element = document.createElement("button");
  element.classList.add("btn");
  element.textContent = i;
  element.id = i;
  element.type = `button`;
  if (i % specialValue == 0) element.classList.add(`btn-special`);
  if (i % growValue == 0) {
    element.classList.add(`btn-grow`);
    element.addEventListener(`click`, function () {
      element.textContent = Number(element.textContent) + 1;
    });
  }
  allButtons.append(element);
}

function generateButtons() {
  clearAllButtons();
  minValue = parseInt(document.getElementById(`startValue`).value);
  maxValue = parseInt(document.getElementById(`endValue`).value);
  for (let i = minValue; i <= maxValue; i++) {
    createButton(i);
    btnCount = i;
  }
}

function resetValues() {
  console.log("reset button pressed");
  document.getElementById(`startValue`).value = "1";
  document.getElementById(`endValue`).value = "42";
  document.getElementById(`specialValue`).value = "2";
  document.getElementById(`growValue`).value = "5";
}
