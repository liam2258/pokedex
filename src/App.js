import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import PokeList from './PokeList';
import Search from './Search';

function App() {
  const[allPokemons, setAllPokemons] = useState([])
  const[searchfield, setSearch] = useState('')

  const getAllPokemons = async () => {
   const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=905')
   const data = await res.json()

   function createPokemonObject(results)  {
     results.forEach( async pokemon => {
       const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
       const data =  await res.json()
       setAllPokemons( currentList => [...currentList, data])
     })
   }
   createPokemonObject(data.results)
 }

  function onSearchChange(event) {
    setSearch(event.target.value)
  }

useEffect(() => {
 getAllPokemons()
}, [])

  return (
    <div>
      <h1>Pokedex</h1>
      <h2><Search searchChange={onSearchChange}/></h2>
        <div className='GridContainer'>
          <div></div>
          <PokeList AllPokemons={(allPokemons.sort((a, b) => a.id - b.id))
            .filter((v,i,a)=>a.findIndex(v2=>(v.name === v2.name))===i)
            .filter(pokemon => {
              return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
            })
          }
            />
            <div></div>
        </div>
    </div>
  );
}

export default App;
