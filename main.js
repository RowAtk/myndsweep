window.onload = ()=> {
 
  const start = document.querySelector('#start');
  const clear = document.querySelector('#clear');
  const grid = document.getElementById('mineplane');
  
  

  start.addEventListener('click', (e)=>{
    e.preventDefault();
    refreshGrid();
    
  });

  clear.addEventListener('click', clearGrid);

  function refreshGrid() {
    let gridSize = prompt("Enter a grid size.");
    createGrid(gridSize);
  }

  function createGrid(x) {
    document.querySelector('h2').innerText = `You are using a ${x} x ${x} grid.`
    for (let i=0; i<(x*x); i++) {
      let box = document.createElement('div');
      box.classList.add(`div-${i}`,'grid');
      let dimension = 500/x;
      box.style.width = `${dimension}px`;
      box.style.height= `${dimension}px`;
      grid.appendChild(box);
    }
    console.log("Created divs");
  }

  function clearGrid() {
    grid.innerHTML = '';
  }
}
