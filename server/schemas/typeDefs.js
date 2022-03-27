const { gql } = require('apollo-server-express');

const typeDefs = gql`


    type User {
    _id: _id
    username: String
    email: String
    games: [String]
    savedMovies: [Movie]
    movieCount: Int
    }

    type Query {
        me: User
    }

    type Game {
        gameTitle: String!
        genre: String
        achievements: String
        progress: String
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