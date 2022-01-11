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
      nomenclatures: null,
      isLoaded: false
    }
  }
  componentDidMount() {
    // console.log('mount app');
  }
  getData = (data, nomenclatures) => {
    this.setState({data, nomenclatures, isLoaded: true})
  }
  getNomenclatureList = (nomenclatures) => {
    if (this.state.isLoaded) {
      this.setState({nomenclatures})
    } else {
      // console.log('aaaaaaaaaaaaaaaaa');
    }
    // let l = nomenclatures.filter(l => l.length === this.state.data.length)  
    // let l = nomenclatures.filter(l => console.log(l.length))
    // console.log(nomenclatures);
  }


  render() {
    return (
      <div className="App">
        <About />
        <Filter getNomenclatureList={this.getNomenclatureList} getData={this.getData} />
        {this.state.isLoaded ? <NomenclatureList data={this.state.data} nomenclatures={this.state.nomenclatures} /> : null}
        
      </div>
    );
  }
}

export default App;
