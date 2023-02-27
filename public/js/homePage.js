document.querySelector('#viewGame').addEventListener('click', viewGame)
document.querySelector('#deleteGame').addEventListener('click', deleteGame)

const gameSelect = document.querySelector('select')


async function viewGame(){
    console.log('view game')
    console.log(gameSelect.value)

    if(gameSelect.value !== 'placeHolder'){
        await fetch('game',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'gameId': gameSelect.value
            })
        })
    }
}

function deleteGame(){
    console.log('delete game')
    console.log(gameSelect.value)

    if(gameSelect.value !== 'placeHolder'){
        
    }
}