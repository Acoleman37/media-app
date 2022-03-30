import { useState, useEffect } from "react";
import Auth from "../utils/auth";
import { searchGameAPI } from "../utils/steam.js";
import {
  saveGameIds,
  getSavedGameIds,
  saveMovieIds,
} from "../utils/localStorage";
import { SAVE_GAME } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const SearchGames = () => {
  const [searchedGames, setSearchedGames] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  const [savedGameIds, setSavedGameIds] = useState(getSavedGameIds());

  const [saveGame] = useMutation(SAVE_GAME);

  useEffect(() => {
    return () => saveGameIds(savedGameIds);
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchGameAPI(searchInput);

      if (response.ok) {
        throw new Error("something went wrong!");
      }

      const { items } = await response.json();

      const gameData = items.map((game) => ({
        gameTitle: game.name,
        genre: game.genres[0],
        achievements: game.playtime,
        progress: "",
        image: game.background_image || "",
      }));

      setSearchedGames(gameData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveGame = async (gameId) => {
    const gameToSave = searchedGames.find((game) => game.gameId === gameId);

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await saveMovieIds({
        variables: { ...gameToSave },
      });

      setSavedGameIds([...savedGameIds, gameToSave.gameId]);
    } catch (err) {
      console.error(err);
    }
  };

  return "JSX GOES HERE";
};

export default SearchGames;
