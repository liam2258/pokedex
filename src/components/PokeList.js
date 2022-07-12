import '../App.css';
import React from 'react';
import Pokemon from './Pokemon';

const CardList = ({AllPokemons}) => {
    return (
        <div className='List'>
            {
            AllPokemons.map((user, i) => {
                return (
                <Pokemon 
                    key={i}
                    name={AllPokemons[i].name[0].toUpperCase() + AllPokemons[i].name.slice(1).toLowerCase()}
                    url={AllPokemons[i].sprites.front_default}
                    id={AllPokemons[i].id}
                    types={AllPokemons[i].types}
                    />
                )
            })
            }
        </div>
    );
}

export default CardList;