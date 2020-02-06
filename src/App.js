// src/App.js

//import React
import React, {Component} from 'react';
import './App.css';
//Header
import Header from './components/Header';
// Post
import Post from './components/Post'

//render App
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="App-main">
          <Post nickname="Jedi"
            avatar="https://i.pinimg.com/originals/86/72/35/8672358eacf638354cb8e854c3c3233a.jpg"
            image="https://lumiere-a.akamaihd.net/v1/images/image_04ee5ee7.jpeg?region=0%2C0%2C4173%2C746"
            caption="Republic is Ready"
          />
          <Post nickname="Sith"
            avatar="https://i.pinimg.com/originals/6e/35/d5/6e35d5472caeb495825071f8857ad42a.jpg"
            image="https://www.fanthatracks.com/wp-content/uploads/2019/03/Mission_to_Ryloth.jpg"
            caption="Sith Counterattack"
          />
        </section>
      </div>
    )
  }
}

export default App;
