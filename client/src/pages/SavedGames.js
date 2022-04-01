import { useState, useEffect } from 'react';
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "semantic-ui-react";
import { LOGIN_USER, REMOVE_GAME } from '../utils/mutations';
import Auth from '../utils/auth';
import { removeGameId } from '../utils/localStorage';

export const SavedGames = () => {
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
  const handleRemoveGame = async (gameId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await REMOVE_GAME(gameId, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const updatedUser = await response.json();
      setUserData(updatedUser);
      // upon success, remove movie's id from localStorage
      removeGameId(gameId);
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
    <Jumbotron fluid className="text-light bg-dark">
      <Container>
        <h1>Viewing saved Games!</h1>
      </Container>
    </Jumbotron>
    <Container>
      <h2>
        {userData.savedGames.length
          ? `Viewing ${userData.savedGames.length} saved ${
              userData.savedGames.length === 1 ? "game" : "game"
            }:`
          : "You have no saved games!"}
      </h2>
      <CardColumns>
        {userData.savedGames.map((game) => {
          return (
            <Card key={game.gameId} border="dark">
              {game.image ? (
                <Card.Img
                  src={game.image}
                  alt={`The cover for ${game.title}`}
                  variant="top"
                />
              ) : null}
              <Card.Body>
                <Card.Title>{game.title}</Card.Title>
                <p className="small">Authors: {game.authors}</p>
                <p className="small">
                  Link:{" "}
                  <a href={game.link} target="_blank" rel="noreferrer">
                    {game.title}
                  </a>
                </p>
                <Card.Text>{game.description}</Card.Text>
                <Button
                  className="btn-block btn-danger"
                  onClick={() => handleRemoveGame(game.gameId)}
                >
                  Delete this Game!
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
    </Container>
  </>
);
};

export default SavedGames;