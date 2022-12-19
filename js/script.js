/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
#MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
*/

//Creo funzione per generare le celle
const createCell = (howMany, content) =>
  (cell = `<div class="cell cell-${howMany}">${content}</div>`);

//Creo funzione per il click
const getCliccable = (element) => {
  element.addEventListener("click", function () {
    element.classList.toggle("clicked");
    console.log(element.textContent);
  });
};

//Targhettizzo gli elementi in pagina
const table = document.getElementById("table");
const button = document.getElementById("button");
const levelElement = document.getElementById("level");

//Creo funzione al click del bottone
button.addEventListener("click", function () {
  const level = levelElement.value;

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

  const cellsElement = document.querySelectorAll("#table .cell");
  //Modifico colonne al click
  for (let i = 0; i < cellsElement.length; i++) {
    const selectedCell = cellsElement[i];
    getCliccable(selectedCell);
  }
});
