document.querySelector('#viewGame').addEventListener('click', viewGame)
document.querySelector('#deleteGame').addEventListener('click', deleteGame)

const gameSelect = document.querySelector('select')


function viewGame(){
    console.log('view game')
    console.log(gameSelect.value)
}

function deleteGame(){
    console.log('delete game')
    console.log(gameSelect.value)
}