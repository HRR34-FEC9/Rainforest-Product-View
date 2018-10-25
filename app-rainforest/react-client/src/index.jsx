import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Display from './components/Photo.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: ''
    }

  }


  render() {
    return (
      <div>
        <h1 id='heading'>Rainforest.com</h1>
        <Container />
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App />, app);