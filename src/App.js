// src/App.js

//import React
import React, {Component} from 'react'; //react
import './App.css'; //css
import ApolloClient from 'apollo-boost'; //Apollo for server
import {ApolloProvider} from 'react-apollo'; //apollo
import Pusher from 'pusher-js';

import Header from './components/Header'; //Header
import Posts from './components/Posts';

//Apollo
const client = new ApolloClient({uri: "http://localhost:4000/graphql"});
//render App
class App extends Component {
  constructor() {
    super();
    //connect to Pusher
    this.pusher = new Pusher("PUSHER_APP_KEY", {
      cluster: 'eu',
      encrypted: true
    });
  }
  componentDidMount(){
    if('actions' in Notification.prototype) {
      alert('You can enjoy the notification feature');
    } else {
      alert('Sorry notifications are NOT suppoerted on your browser');
    }
  }

  render() {
    return (<ApolloProvider client={client}>
      <div className="App">
        <Header/>
        <section className="App-main">
          {/* pass the pusher object and apollo */}
          <Posts pusher={this.pusher} apollo_client={client}/>
        </section>
      </div>
    </ApolloProvider>);
  };
};

export default App;
