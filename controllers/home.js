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
            await gameDB.create({gameName: req.body.gameName, gameId: req.body.gameId, userId: req.user.id})
            console.log(`Game added: ${req.body.gameName}`)
            res.redirect('/home')
        }catch(err){
            console.log(err)
            res.redirect('/home')
        }
    },
}