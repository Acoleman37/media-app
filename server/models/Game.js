const { Schema, model } = require('mongoose');

const gameSchema = new Schema(
    {
        gameTitle: {
            type: String,
            require: true,
        },
        genre: {
            type: String
        },
        achievements: {
            type: String
        },
        progress: {
            type: String
        },
        image: {
            type: String
        }
    }
);

const Game = model('Game', gameSchema);

module.exports = Game;