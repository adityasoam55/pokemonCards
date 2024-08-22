import React, { useState } from 'react';
import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemons }) => {
  const [searchField, setSearchField] = useState('');

  const handleSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">
      <input
        type="search"
        placeholder="Search Pokémon"
        onChange={handleSearchChange}
        className="w-full p-2 mb-6 border rounded focus:outline-none focus:ring focus:border-blue-300"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
