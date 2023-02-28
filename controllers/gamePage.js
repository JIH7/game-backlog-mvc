const hltbController = require('../controllers/hltb')
const gameDB = require('../models/game')

module.exports = {
    getGamePage: async (req,res)=>{
        console.log(req.query)
        const gameDataArray = await hltbController.searchGame(req.query.game)
        const gameDataHolder = gameDataArray[0]
        console.log(gameDataHolder)
        res.render('gamePage.ejs', {gameData: gameDataHolder, user: req.user})
    },

    getRandomGamePage: async (req,res)=>{
        const count = await gameDB.countDocuments({ userId: req.user.id })

        const randomIndex = Math.floor(Math.random() * count)

        const randomGame = await gameDB.findOne({ userId: req.user.id}).skip(randomIndex)

        const gameDataArray = await hltbController.searchGame(randomGame.gameName)
        const gameDataHolder = gameDataArray[0]
        console.log(gameDataHolder)
        res.render('gamePage.ejs', {gameData: gameDataHolder, user: req.user})
    },
}