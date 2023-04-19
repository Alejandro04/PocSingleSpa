import React from 'react';
import charactersStates from './characterStates'
import langStates from './langStates';

export default function App({ name, lang }) {
  const { characters, isLoading, currentPage, totalPages, handlePageChange } = charactersStates()
  const { langStatus, langSpecies } = langStates(lang)

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