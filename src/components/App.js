import React, { Component } from 'react';
// import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mainForm">
          <h2> Madlibs </h2>

          <div className="inputOne">Adjective:
            <input className="inputAdj" placeholder="adj" />
          </div>

          <div className="inputTwo">Noun:
            <input className="inputNoun" placeholder="noun" />
          </div>

        </div>
        <button>Read Story</button>
      </div>
      // <div className="App">
      //   <Form />
      // </div>

    );
  }
}

export default App;
