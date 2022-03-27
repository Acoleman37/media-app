import { gql } from '@apollo/client';

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