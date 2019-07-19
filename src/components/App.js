import React, { Component } from 'react';
import axios from '../modules/mocks/axios';

class App extends Component {

  componentDidMount = () => {
    axios.get('/test')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render = () => (<div>Hello, React!</div>)
}

export default App;
