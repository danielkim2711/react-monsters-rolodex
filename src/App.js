import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => ({
          monsters: users,
        }))
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState(() => ({
      searchField,
    }));
  };

  render() {
    console.log('render');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
