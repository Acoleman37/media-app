import { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import { searchMovies } from '../utils/API';
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

    // return ();
};

export default SearchMovies;