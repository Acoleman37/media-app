const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
    _id: _id
    username: String
    email: String
    savedGames: [String]
    savedMovies: [Movie]
    movieCount: Int
    }

    type Query {
        me: User
    }

    type Movie {
        movieTitle: String!
        genre: String
        description: String
        image: String
    }
    
    type Game {
        gameTitle: String!
        genre: String
        achievements: String
        progress: String
    }

    type Movie {
        title: String!
        genre: [String]
        description: String!
        image: String
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;