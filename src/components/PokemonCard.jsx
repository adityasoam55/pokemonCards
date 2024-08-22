import React, { useEffect, useState } from 'react';

const PokemonCard = ({ name, url }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchPokemonImage = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setImage(data.sprites.front_default);
    };

    fetchPokemonImage();
  }, [url]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <img src={image} alt={name} className="mx-auto w-24 h-24" />
      <h3 className="mt-2 text-lg font-semibold">{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
    </div>
  );
};

export default PokemonCard;
