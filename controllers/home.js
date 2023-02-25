const gameDB = require('../models/game')

module.exports = {
    getHome: async (req,res)=>{
        const gameList = await gameDB.find({userId: req.user.id})
        res.render('home.ejs', {items: gameList, user: req.user})
    },

    addGame: async (req,res)=>{
        console.log(req.body)
        try{
            await gameDB.create({gameName: req.body.gameName, userId: req.user.id})
            console.log(`Game added: ${req.body.gameName}`)
            res.redirect('/home')
        }catch(err){
            console.log(err)
            res.redirect('/home')
        }
    },
}