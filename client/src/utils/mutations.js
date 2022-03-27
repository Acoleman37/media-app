import { gql } from '@apollo/client';

// login as resolver 
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// addUser as resolver
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        movieCount
        savedMovies {
          movieId
          title
          genres
          description
          image
        }
      }
    }
  }
`;
// saveMovie as resolver
export const SAVE_MOVIE = gql`
  mutation saveMovie($movieId: ID!) {
    saveMovie(savedMovie: $movieId) {
      _id
      username
      email
      savedMovies  {
        movieId
        title
        genres
        description
        image
      }
    }
  }
`;
// removeMovie as resolver
export const REMOVE_MOVIE = gql`
  mutation removeMovie($movieId: ID!) {
    removeMovie(movieId: $movieId) {
      _id
      username
      email
      savedMovies {
        movieId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
// saveGame as resolver
export const SAVE_GAME = gql`
  mutation saveGame($gameId: ID!) {
    saveGame(savedGames: $gameId) {
      _id
      username
      email
      savedGames {
        _id
        gameTitle
        genre
        achievements
        progress
        image
      }
    }
  }
`

// removeGame as resolver
export const REMOVE_GAME = gql`
  mutation removeGame($gameId: ID!) {
    removeGame(savedGames: $gameId) {
      _id
      username
      email
      savedGames {
        _id
        gameTitle
        genre
        achievements
        progress
        image
      }
    }
  }
`