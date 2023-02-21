const gameDB = require('../models/game')

module.exports = {
    getHome: async (req,res)=>{
        try{
            const gameList = await gameDB.find().setOptions({ collection: 'GameList' })
            console.log(`Found ${gameList.length} games.`)
            res.render('index.ejs', {items: gameList})
        }catch (error) {
            console.error(error)
            res.status(500).send('Internal Server Error')
        }
    }   
}