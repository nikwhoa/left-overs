import { Component } from 'react';
import './App.css';
import About from './About/About';
import Filter from './Filter/Filter';
import NomenclatureList from './NomenclatureList/NomenclatureList';

class App extends Component {
/* i have to find out how to get wait for some data from this.state.data */
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      nomenclatures: null
    }
  }

  getData = (data) => {
    this.setState({data})
  }
  getNomenclatureList = (nomenclatures) => {
    // let l = nomenclatures.filter(l => l.length === this.state.data.length)  
    // let l = nomenclatures.filter(l => console.log(l.length))  
    console.log(this.state.data.length);
      this.setState({nomenclatures})
  }


  render() {
    return (
      <div className="App">
        <About />
        <Filter getNomenclatureList={this.getNomenclatureList} getData={this.getData} />
        <NomenclatureList data={this.state.data} />
      </div>
    );
  }
}

export default App;
