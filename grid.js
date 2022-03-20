
let container = document.getElementById("grid");
/*let cell = document.createElement("div");
cell.setAttribute('id', 'cell');
cell.textContent = "" */
let nameCell = ""


for (let i = 0; i < 4096; i++) {
    nameCell = "CellNum" + i
    cell = document.createElement("div");
    cell.setAttribute('id', 'cell');
    cell.setAttribute('class', nameCell);
    container.appendChild(cell);
    console.log(i);
  }

let EaS_Cell = document.getElementById('cell')

document.addEventListener("mouseover", (e) => {
  let targID = (e.target.id);

  if (targID === 'cell') {
    console.log(e.target.className);
    let moCell = document.getElementsByClassName(`${e.target.className}`);
    console.log(moCell.css);
    document.querySelector(`.${e.target.className}`).style.background = 'gray';
  }

})

function clearCells() {
  let allCells = document.querySelectorAll("#cell");
  console.log("clicked clear");

  allCells.forEach((c) => {
    c.style.backgroundColor = null;
  })
  }


