const { Schema, model } = require('mongoose');

const movieSchema = new Schema
(
    {
        title: {
            type: String,
            required: true,
        },
        genre: [{
            type: String
        }],
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
    }
);

const Movie = model('Movie', movieSchema);

module.export = Movie;