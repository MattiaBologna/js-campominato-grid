// creare la griglia nell'html al click su gioca
    // recuperare il bottone gioca e aggiungere un event listener

const playButtonDOMElement = document.getElementById('play__button')
// console.log(playButtonDOMElement);

playButtonDOMElement.addEventListener('click', function() {
    // recuperare il container 
    const gridContainerDOMElement = document.querySelector('.grid__container')
    // console.log(gridContainerDOMElement);

    const size = 10;
    const numberOfCells = size ** 2;

    // generare le celle 
    for (let i = 0; i < numberOfCells; i++) {
        // segnare il numero delle celle
        const cellNumber = i + 1 
        const cellsDOMELement = document.createElement('div')
        // aggiungere alle celle create la classe cell e il numero della cella 
        cellsDOMELement.className = 'cell'
        cellsDOMELement.innerHTML = cellNumber

        // aggiungere le celle all'html
        gridContainerDOMElement.append(cellsDOMELement)
        // console.log(cellsDOMELement);

        cellsDOMELement.addEventListener('click', function(){
            this.classList.toggle('bg__blue')
        })
    }
})

