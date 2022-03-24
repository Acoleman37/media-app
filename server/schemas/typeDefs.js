const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
    _id: _id
    username: String
    email: String
    games: [String]
    streaming: [String]
    }
`;

module.exports = typeDefs;