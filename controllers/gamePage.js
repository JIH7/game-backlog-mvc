const hltbController = require('../controllers/hltb')

module.exports = {
    getGamePage: async (req,res)=>{
        const gameDataArray = await hltbController.searchGame(req.body.gameId)
        const gameDataHolder = gameDataArray[0]
        console.log(gameDataHolder)
        res.render('gamePage.ejs', {gameData: gameDataHolder})
    }
}