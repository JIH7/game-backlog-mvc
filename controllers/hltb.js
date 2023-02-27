const hltb = require('howlongtobeat')
const hltbService = new hltb.HowLongToBeatService

module.exports = {
    searchGame: async(game)=>{
        gameInfo = await hltbService.search(game)
        return gameInfo
    }
}