document.querySelector('#viewGame').addEventListener('click', viewGame)
document.querySelector('#toggleCompleted').addEventListener('click', toggleCompleted)
document.querySelector('#deleteGame').addEventListener('click', deleteGame)

const gameSelect = document.querySelector('select')
const searchBar = document.querySelector('#searchBar')

let autoCompleteInfo = []

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

async function populateList(){
    const data = await fetch('/home/getAutocompleteList?game=' + searchBar.value)
    list = await data.json()
    console.log(list)
    autoCompleteInfo = list
}