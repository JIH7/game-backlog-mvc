const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
    gameName: {
        type: String,
        required: true
    },

    gameId: {
        type: String,
        required: true
    },

    userId: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Game', GameSchema)