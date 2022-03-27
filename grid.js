
let container = document.getElementById("grid");
let nameCell = ""


  function buildGrid529() {
    removeCells();
    for (let i = 0; i < 529; i++) {
      nameCell = "CellNum" + i
      cell = document.createElement("div");
      cell.setAttribute('id', 'cell23');
      cell.setAttribute('class', nameCell);
      cell.setAttribute('name', "EasCell");
      container.appendChild(cell);
      console.log(i);
    } 
  }

  function buildGrid2116() {

    removeCells();
    
    for (let i = 0; i < 2116; i++) {
      nameCell = "CellNum" + i
      cell = document.createElement("div");
      cell.setAttribute('id', 'cell');
      cell.setAttribute('class', nameCell);
      cell.setAttribute('name', "EasCell");
      container.appendChild(cell);
      console.log(i);
    } 
  }

  function removeCells(){

    while (container.hasChildNodes()){
      container.removeChild(container.firstChild);
    }
  }

let EaS_Cell = document.getElementById('cell')

document.addEventListener("mouseover", (e) => {
  let targID = (e.target.id);

  if (targID === 'cell23' || targID === 'cell') {
    console.log(e.target.className);
    let moCell = document.getElementsByClassName(`${e.target.className}`);
    console.log(moCell.css);
    document.querySelector(`.${e.target.className}`).style.background = 'gray';
  }

})

function clearCells() {
  let allCells = document.querySelectorAll("#cell");
  let allCells23 = document.querySelectorAll("#cell23");
  console.log("clicked clear");

  allCells.forEach((c) => {
    c.style.backgroundColor = null;
  })

  allCells23.forEach((g) => {
    g.style.backgroundColor = null;
  })
  }

  function Cells23() {
    let cells = document.getElementsByName('EasCell')
    console.log(cells.length);

    for (let i = 0; i < cells.length; i++){
      console.log(cells.item(i));
      let elem = document.getElementsByClassName(`CellNum${i}`);
      console.log(elem);
      elem[0].parentNode.removeChild(elem[0])
      console.log("this is " + i);
    }
  }

  function grid23x(){
    for (let i = 0; i < 529; i++) {
      nameCell = "CellNum" + i
      cell = document.createElement("div");
      cell.setAttribute('class', nameCell);
      container.appendChild(cell);
    }
  }