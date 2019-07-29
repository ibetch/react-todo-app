import React, {Component} from 'react';
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
      <h1>Hello world!</h1>
    );
  }
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;

// Check for local changes and automatically refresh the browser
if (module.hot) {
  module.hot.accept('./App.jsx', () => renderApp());
}