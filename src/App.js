import { Component } from 'react';
import './App.css';
import * as data from './data/left-overs-json.json'
import ListItem from './ListItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      term: '',
      filter: 0,
      counter: 0
    }
  }
  render() {
    return (
      <div className="App">
        <h1>I LOVE VIYAR</h1>
        <ul>
          <li>
            <div className="list-item">Код товара</div>
            <div className="list-item">Номенклатура</div>
            <div className="list-item">Характеристика</div>
            <div className="list-item">Толщина</div>
            <div className="list-item">Количество остаток (м.)</div>
            <div className="list-item">Количество остаток (шт.)</div>
            <div className="list-item">Стоимость(шт.)</div>
          </li>
          <ListItem listItems={this.state} />
        </ul>
      </div>
    );
  }
}

export default App;
