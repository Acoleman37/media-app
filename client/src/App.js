import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

import SearchMovies from "./pages/SearchMovies";
import SearchGames from "./pages/SearchGames";
import SavedGames from "./pages/SavedGames";
import SavedMovies from "./pages/SavedMovies";
import Navbar from "./components/Navbar";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },

  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Routes>
            <Route exact path="/" element={<SearchMovies />} />
            <Route exact path="/searchGames" element={SearchGames} />
            <Route exact path="/saved" element={SavedMovies} />
            <Route exact path="/saved" element={SavedGames} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
