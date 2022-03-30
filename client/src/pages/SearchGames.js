import { useState, useEffect } from 'react';
import Auth from '../utils/auth';
import { searchGameAPI } from '../utils/steam.js';
import { saveGameIds, getSavedGameIds, saveMovieIds } from '../utils/localStorage';
import { SAVE_GAME } from '../utils/mutations';
import { useMutation } from '@apollo/client'

const SearchGames = () => {

    const [searchedGames, setSearchedGames] = useState([]);

    const [searchInput, setSearchInput] = useState('');

    const [savedGameIds, setSavedGameIds] = useState(getSavedGameIds());

    const [saveGame] = useMutation(SAVE_GAME);

    useEffect(() => {
        return () => saveGameIds(savedGameIds);
    });


}

export default SearchGames