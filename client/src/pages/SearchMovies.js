import { useState, useEffect } from 'react';
import {
    Header,
    Container,
    Col,
    Form,
    Button,
    Card,
    CardContent,
  } from "semantic-ui-react";
import Auth from '../utils/auth';
import { searchMovies } from '../utils/movie.js';
import { saveMovieIds, getSavedMovieIds } from '../utils/localStorage';
import { SAVE_MOVIE } from '../utils/mutations';
import { useMutation } from '@apollo/client'

const SearchMovies = () => {
    // create state for holding returned google api data
    const [searchedMovies, setSearchedMovies] = useState([]);
    // create state for holding our search field data
    const [searchInput, setSearchInput] = useState('');
    // create state to hold saved MovieId values
    const [savedMovieIds, setSavedMovieIds] = useState(getSavedMovieIds());

    const [saveMovie] = useMutation(SAVE_MOVIE);

    useEffect(() => {
        return () => saveMovieIds(savedMovieIds);
    });

    // create method to search for Movies and set state on form submit
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
        return false;
        }

        try {
        const response = await searchMovies(searchInput);

        if (!response.ok) {
            throw new Error('something went wrong!');
        }

        const { items } = await response.json();

        const movieData = items.map((movie) => ({
            movieId: movie.id,
            title: movie.original_title,
            genre: movie.genre_ids,
            description: movie.overview,
            image: movie.poster_path || '',
        }));

        setSearchedMovies(movieData);
        setSearchInput('');
        } catch (err) {
        console.error(err);
        }
    };

    // create function to handle saving a movie to our database
    const handleSaveMovie = async (movieId) => {
        // find the movie in `searchedMovies` state by the matching id
        const movieToSave = searchedMovies.find((movie) => movie.movieId === movieId);

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
        return false;
        }

        try {

        await saveMovie({
            variables:  { ...movieToSave }
        })

        // if movie successfully saves to user's account, save movie id to state
        setSavedMovieIds([...savedMovieIds, movieToSave.movieId]);

        } catch (err) {
        console.error(err);
        }
    };

    return (
        <div>
        
           <Header fluid className="text-light bg-dark">
            <Container>
              <h1>Search for Movies!</h1>
               <Form onSubmit={handleFormSubmit}>
                <Form.Row> 
                  {/* <Col xs={12} md={8}>
                    <Form.Control
                      name="searchInput"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      type="text"
                      size="lg"
                      placeholder="Search for a movie"
                    />
                  </Col>
                  <Col xs={12} md={4}>
                    <Button type="submit" variant="success" size="lg">
                      Submit Search
                    </Button>
                  </Col> */}
                 </Form.Row>
              </Form> 
            </Container>
          </Header> 
    
           <Container>
            <h2>
              {searchedMovies.length
                ? `Viewing ${searchedMovies.length} results:`
                : "Search for a Movie to begin"}
            </h2> 
            <CardContent>
              {searchedMovies.map((movie) => {
                return (
                  <Card key={movie.movieId} border="dark">
                    {movie.image ? (
                      <Card.Img
                        src={movie.image}
                        alt={`The cover for ${movie.title}`}
                        variant="top"
                      />
                    ) : null}
                    <Card.Body>
                      <Card.Title>{movie.title}</Card.Title>
                      <p className="small">Authors: {movie.authors}</p>
                      <p className="small">
                        Link:{" "}
                        <a href={movie.link} target="_blank" rel="noreferrer">
                          {movie.title}
                        </a>
                      </p>
                      <Card.Text>{movie.description}</Card.Text>
                      {Auth.loggedIn() && (
                        <Button
                          disabled={savedMovieIds?.some(
                            (savedMovieId) => savedMovieId === movie.movieId
                          )}
                          className="btn-block btn-info"
                          onClick={() => handleSaveMovie(movie.movieId)}
                        >
                          {savedMovieIds?.some(
                            (savedMovieId) => savedMovieId === movie.movieId
                          )
                            ? "This movie has already been saved!"
                            : "Save this movie!"}
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                );
              })}
            </CardContent> 
          </Container> 
        </div>
      );
    };

export default SearchMovies;