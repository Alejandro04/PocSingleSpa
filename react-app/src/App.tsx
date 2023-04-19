import React, { useEffect, useState } from 'react';
import { languages } from './langs';

export default function App({ name, lang }) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      })
      .catch((error) => console.log(error));
  }, [currentPage]);

  const langStatus = languages.find(item => item.lang === lang && item.status)?.status;
  const langSpecies = languages.find(item => item.lang === lang && item.species)?.species;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  const pagination = (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
      <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
      <p style={{ margin: '0 20px' }}>Page {currentPage} of {totalPages}</p>
      <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
    </div>
  );

  const spinner = (
    <div>
      Loading...
    </div>
  );

  return (
    <div>
      {isLoading ? spinner : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {characters.map((character) => (
            <div key={character.id} style={{ margin: '10px' }}>
              <img src={character.image} alt={character.name} />
              <h2 style={{ marginBottom: 0, marginTop: '5px' }}>{character.name}</h2>
              <div>
                <p style={{ margin: 0 }}>{langStatus}: {character.status}</p>
                <p style={{ marginTop: 0 }}>{langSpecies}: {character.species}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {pagination}
    </div>
  );
}