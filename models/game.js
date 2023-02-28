const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
    gameName: {
        type: String,
        required: true
    },

    gameId: {
        type: String,
    },

    ttbMain:{
        type: Number
    },

    ttbMainExtra:{
        type: Number
    },

    ttbCompletionist:{
        type: Number
    },

    userId: {
        type: String,
        required: true
    },

    completed: {
        type: Boolean,
        required: true
    },
})

module.exports = mongoose.model('Game', GameSchema)