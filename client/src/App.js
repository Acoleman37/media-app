import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Homepage/Footer"
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <ChakraProvider>
    <BrowserRouter>
      <div>
        <Navbar token={false} />
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path="/LoginForm" element={<LoginForm/>}/>
          <Route exact path="/SignupForm" element={<SignupForm/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </ChakraProvider>
    </ApolloProvider>
  );
}
export default App;