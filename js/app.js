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
        const cellNumber = i + 1 
        const cellsDOMELement = document.createElement('div')
        cellsDOMELement.className = 'cell'
        cellsDOMELement.innerHTML = cellNumber

        gridContainerDOMElement.append(cellsDOMELement)
        // console.log(cellsDOMELement);
    }
})

