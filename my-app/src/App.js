import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import CardList  from './components/card-list/card-list.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '', 
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users').then(
      response => response.json()
    ).then(
      (users) => this.setState(() => {
        return {monsters: users};
      }) 
    );
  }
  
  onSearchCahnge = (event) => {
        // set to lower case the search string
        const searchField = event.target.value.toLocaleLowerCase()

        this.setState(() => {
          return {searchField};
        })
      }

  render() {
    // retrieving variables
    const {monsters, searchField} = this.state;
    const {onSearchCahnge} = this;

    // filter the values as you input them 
    const filtMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)});


    return (
    <div className="App">
      <input className='search-box' type='search' placeholder='search monsters' 
      onChange={onSearchCahnge}/>

      <CardList monsters={ filtMonsters }/>
    </div>
  );
  }

  
}

export default App;
