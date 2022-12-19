//Creo funzione per generare le celle
const createCell = (size, content) =>
  (cell = `<div class="cell cell-${size}">${content}</div>`);

//Creo funzione per il click
const getCliccableOneTime = (element, listElement) => {
  const content = element.innerText;
  element.classList.add("clicked");
  if (!listElement.includes(content)) {
    console.log(content);
    listElement.push(content);
  }
};

//Creo funzione per generare numeri random unici in un range

const getRandomNumbersNotDuplicates = (min = 1, max = 100, numberList) => {
  max++;
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (max - min)) + min;
  } while (numberList.includes(randomNumber));
  numberList.push(randomNumber);
  return randomNumber;
};

//Targhettizzo gli elementi in pagina
const table = document.getElementById("table");
const button = document.getElementById("button");
const levelElement = document.getElementById("level");

//Creo funzione al click del bottone
button.addEventListener("click", function () {
  const level = levelElement.value;

  //Creo punteggio utente
  let clickedCells = [];

  let cellsNumber;
  switch (level) {
    case "10":
      cellsNumber = 10 * 10;
      break;
    case "9":
      cellsNumber = 9 * 9;
      break;
    case "7":
      cellsNumber = 7 * 7;
      break;
  }

  let cells = "";
  for (let i = 1; i <= cellsNumber; i++) {
    cells += createCell(level, i);
  }
  table.innerHTML = cells;

  //Creo array per lista bombe
  let bombs = [];

  //Genero numeri da inserire nelle bombe
  for (let i = 0; i < 16; i++) {
    const randomNumber = getRandomNumbersNotDuplicates(1, cellsNumber, bombs);
  }

  console.log(bombs);
  let userScore = 0;
  const cellsElement = document.querySelectorAll("#table .cell");
  //Modifico colonne al click
  for (let i = 0; i < cellsElement.length; i++) {
    const selectedCell = cellsElement[i];
    selectedCell.addEventListener("click", function () {
      if (!selectedCell.classList.contains("clicked")) {
        getCliccableOneTime(selectedCell, clickedCells);
        userScore++;
        console.log(userScore);
      }
    });
  }
});
