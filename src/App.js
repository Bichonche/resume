import React, { Component } from 'react';
import './css/animate.css';
import './css/normalize.css';
import './css/perso.css';
import './css/skeleton.css';
import './css/timeline.css';
import Body from './element/Body/Body';
import Header from './element/Header/Header';
import Footer from './element/Footer/Footer';


import json from './data/entries.json';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Header/>
           <Body json={json} />
          <Footer/>
      </div>
    );
  }
}

export default App;
