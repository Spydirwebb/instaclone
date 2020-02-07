// src/App.js

//import React
import React, {Component} from 'react';         //react
import './App.css';                             //css
import ApolloClient from 'apollo-boost';          //Apollo for server
import { ApolloProvider } from 'react-apollo';   //apollo

import Header from './components/Header';       //Header
import Post from './components/Post';            //post
import Posts from './components/Posts';
//Apollo
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});
//render App
class App extends Component {
  render() {
  return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <section className="App-main">
            <Posts />
          </section>
        </div>
      </ApolloProvider>
    );
  };
};

export default App;
