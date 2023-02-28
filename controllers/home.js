const gameDB = require('../models/game')
const hltbController = require('../controllers/hltb')

module.exports = {
    getHome: async (req,res)=>{
        const gameList = await gameDB.find({userId: req.user.id})
        res.render('home.ejs', {items: gameList, user: req.user})
    },

    searchGame: async (req,res)=>{
        const searchResults = await hltbController.searchGame(req.body.gameName)
        res.render('searchPage.ejs', {items: searchResults, user: req.user})
    },

    addGame: async (req,res)=>{
        console.log(req.body)
        try{
            const newGameArray = await hltbController.searchGame(req.body.gameName)
            const newGame = newGameArray[0]
            await gameDB.create({
                gameName: newGame.name,
                gameId: newGame.id,
                ttbMain: newGame.gameplayMain,
                ttbMainExtra: newGame.gameplayMainExtra,
                ttbCompletionist: newGame.gameplayCompletionist,
                userId: req.user.id,
                completed: false,
            })
            console.log(`Game added: ${req.body.gameName}`)
            res.redirect('/home')
        }catch(err){
            console.log(err)
            res.redirect('/home')
        }
    },

    updateGame: async (req,res)=>{
        try{
            const game = await gameDB.findOne({gameName: req.body.gameFromJS, userId: req.user.id})
            console.log(game.gameName + " " + game.completed)
            if(game.completed){
                await gameDB.updateOne({gameName: game.gameName, userId: req.user.id}, {completed: false})
            }
            else{
                await gameDB.updateOne({gameName: game.gameName, userId: req.user.id}, {completed: true})
            }
            res.json('Game updated')
        }catch(err){
            console.log(err)
        }
    },

    deleteGame: async (req,res)=>{
        gameDB.deleteOne({gameName: req.body.gameFromJS, userId: req.user.id})
        .then(result =>{
            res.json('Game Deleted')
        })
        .catch(err => console.log(err))
    },
}