import { Component } from 'react';
import './App.css';
import About from './About/About';
import Filter from './Filter/Filter';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div className="App">
        <About />
        <Filter />
      </div>
    );
  }
}

export default App;
