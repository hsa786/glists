import React, { Component } from 'react';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Listing from './containers/Listing';

import './reset.scss';
import './app.scss';

class App extends Component {
  state = {

  }

  render() {

    return (
      <div className="app">
        <Header />
          <main className="main" role="main">
            <Listing />
          </main>
        <Footer />
      </div>
    )
  }
}

export default App;
