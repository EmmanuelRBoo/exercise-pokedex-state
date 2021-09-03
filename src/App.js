import React from 'react';
import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

class App extends React.Component {
  constructor() {
    super()
    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.all = this.all.bind(this);

    this.state = {
      list: [...pokemons],
      index: 0,
    }
  }

  nextPokemon() {
    this.setState((prevState, _props) => ({
      index: prevState.index + 1
    }));
    if (this.state.index === this.state.list.length - 1) {
      this.setState({ index: 0 });
    }
  }

  filterPokemon(type) {
    const lista = pokemons.filter((pokemon) => pokemon.type === type);

    this.setState({
      list: lista 
    });
  }
  all() {
    this.setState({
      list: pokemons 
    });
  }
  
  render() {
    return (
      <div>
        <header>
          <div>
            <h1>My Pokedex</h1>
          </div>
        </header>
        <main className="App">
          <section>
            <Pokemon pokemon={this.state.list[this.state.index]} />
          </section>

          <section className="listBtn">
             <button className="btnType" onClick={this.all}>All</button>

             <button className="btnType" onClick={() => {
              this.filterPokemon('Fire')
            }}>Fire</button>

             <button className="btnType" onClick={() => {
              this.filterPokemon('Psychic')
            }}>Psychic</button>

             <button className="btnType" onClick={() => {
              this.filterPokemon('Electric')
            }}>Electric</button>

             <button className="btnType" onClick={() => {
              this.filterPokemon('Bug')
            }}>Bug</button>

             <button className="btnType" onClick={() => {
              this.filterPokemon('Poison')
            }}>Poison</button>

             <button className="btnType" onClick={() => {
              this.filterPokemon('Normal')
            }}>Normal</button>

             <button className="btnType" onClick={() => {
              this.filterPokemon('Dragon')
            }}>Dragon</button>
          </section>

          <section className='listNext' >
            <button  className='btnNext' onClick={this.nextPokemon}>Proximo</button>
          </section>

        </main>
      </div>
    )
  }
}

export default App;