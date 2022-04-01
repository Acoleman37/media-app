import { useState, useEffect } from 'react';
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
  Header,
} from "semantic-ui-react";
import { LOGIN_USER, REMOVE_MOVIE } from '../utils/mutations';
import Auth from '../utils/auth';
import { removeMovieId } from '../utils/localStorage';

export const SavedMovies = () => {
  const [userData, setUserData] = useState({});

  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await LOGIN_USER(token);

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const user = await response.json();
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);

  // create function that accepts the movie's mongo _id value as param and deletes the movie from the database
  const handleRemoveMovie = async (movieId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await REMOVE_MOVIE(movieId, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const updatedUser = await response.json();
      setUserData(updatedUser);
      // upon success, remove movie's id from localStorage
      removeMovieId(movieId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
    <Header fluid className="text-light bg-dark">
      <Container>
        <h1>Viewing saved Movies!</h1>
      </Container>
    </Header>
    <Container>
      <h2>
        {userData.savedMovies.length
          ? `Viewing ${userData.savedMovies.length} saved ${
              userData.savedMovies.length === 1 ? "movie" : "movie"
            }:`
          : "You have no saved movies!"}
      </h2>
      <Card.Columns>
        {userData.savedMovies.map((movie) => {
          return (
            <Card key={movie.movieId} border="dark">
              {movie.image ? (
                <Card.Img
                  src={movie.image}
                  alt={`The cover for ${movie.title}`}
                  variant="top"
                />
              ) : null}
              <Card.Group>
                <Card.Header>{movie.title}</Card.Header>
                <p className="small">Authors: {movie.authors}</p>
                <p className="small">
                  Link:{" "}
                  <a href={movie.link} target="_blank" rel="noreferrer">
                    {movie.title}
                  </a>
                </p>
                <Card.Text>{movie.description}</Card.Text>
                <Button
                  className="btn-block btn-danger"
                  onClick={() => handleRemoveMovie(movie.movieId)}
                >
                  Delete this Movie!
                </Button>
              </Card.Group>
            </Card>
          );
        })}
      </Card.Columns>
    </Container>
  </>
);
};

export default SavedMovies;
