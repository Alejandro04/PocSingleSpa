import React, { useEffect, useState } from 'react';
import { languages } from './langs';

export default function App({ name, lang }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }, []);

  const langStatus = languages.find(item => item.lang === lang && item.status)?.status;
  const langSpecies = languages.find(item => item.lang === lang && item.species)?.species;

  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <div>
            <p>{langStatus}: {character.status}</p>
            <p>{langSpecies}: {character.species}</p>
          </div>
        </div>
      ))}
    </div>
  );
}