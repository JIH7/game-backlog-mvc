document.querySelector('#viewGame').addEventListener('click', viewGame)
document.querySelector('#toggleCompleted').addEventListener('click', toggleCompleted)
document.querySelector('#deleteGame').addEventListener('click', deleteGame)

const gameSelect = document.querySelector('select')
const searchBar = document.querySelector('#searchBar')
const typeAhead = document.querySelector('#typeAhead')

let autoCompleteInfo = []

let keyStrokes = 0
const maxKeystrokes = 3

async function viewGame(){
    console.log('view game')
    console.log(gameSelect.value)

    if(gameSelect.value !== 'placeHolder'){
        try{
            const response = await fetch(`game/?game=${gameSelect.value}`,{
                method: 'get',
                headers: {'Content-Type': 'application/json'},
            })

            if (response.ok) {
                const data = await response.text()
                const container = document.querySelector('HTML')
                container.innerHTML = data
            }
        }catch(err){
            console.log(err)
        }
    }
}

async function toggleCompleted(){
    console.log('update game')
    console.log(gameSelect.value)

    if(gameSelect.value !== 'placeHolder'){
        try{
            const response = await fetch('home/toggleCompleted',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'gameFromJS': gameSelect.value
                })
            })
            const data = await response.json()
            console.log(data)
            location.reload()
        }catch(err){
            console.log(err)
        }
    }
}

async function deleteGame(){
    console.log('delete game')
    console.log(gameSelect.value)

    if(gameSelect.value !== 'placeHolder'){
        try{
            const response = await fetch('home/deleteGame',{
                method: 'delete',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    'gameFromJS': gameSelect.value
                })
            })
            const data = await response.json()
            console.log(data)
            location.reload()
        }catch(err){
            console.log(err)
        }
    }
}

function incrementKeystrokes(){
    keyStrokes++
    
    if(keyStrokes >= maxKeystrokes){
        keyStrokes = 0
        populateList()
    }
}

async function populateList(){
    const data = await fetch('/home/getAutocompleteList?game=' + searchBar.value)
    list = await data.text()
    autoCompleteInfo = list

    typeAhead.innerHTML = list
}