import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      savedGames {
        gameTitle
        genre
        achievements
        progress
        image
      }
      savedMovies {
        title
        genre
        description
        image
      }
    }
  }
`