const gameDB = require('../models/game')

module.exports = {
    getHome: async (req,res)=>{
        const gameList = await gameDB.find({userId:req.user.id})
        res.render('home.ejs', {items: gameList})
    },

    addGame: (req,res)=>{
        console.log(req.body)
        try{
            gameDB.create({gameName: req.body.gameName, userId: req.user.id})
            .then(result =>{
                console.log(`Game added: ${req.body.gameName}`)
                res.redirect('/')
            })
        }catch(err){
            console.log(err)
            res.redirect('/')
        }
    },
}