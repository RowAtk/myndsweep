window.onload = ()=> {
 
  const start = document.querySelector('#start');
  const clear = document.querySelector('#clear');
  const plane = document.getElementById('mineplane');
  let grids = document.querySelectorAll(".grid");
  
  

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
      plane.appendChild(box);

      /*createClickers()*/
      createClickers();
    }
    console.log("Created divs");
  }

  function clearGrid() {
    plane.innerHTML = '';
  }

  /*CLICKER */
  function createClickers() {
    grids.forEach(g => {
      g.addEventListener('click', blockGrid);
    });
  }

  function blockGrid() {
    this.classList.add("cgrid");
    console.log("Clicked grid");
    alert(this.classList.backgroundColour);
  }
}



