import React from "react";
import charactersStates from "../utils/characterStates";
import langStates from "../utils/langStates";
import { PaginationStyles } from "../utils/paginationStyles";
import { SpinnerStyles } from "../utils/spinnerStyles";
import { Spinner } from "./spinner";

/*
  TODO: The styles should be implemented with BEM and SASS
*/
const paginationStyles = new PaginationStyles();

export default function Characters({ name, lang }) {
  const { characters, isLoading, currentPage, totalPages, handlePageChange } =
    charactersStates();
  const {
    langStatus,
    langSpecies,
    langNextBtn,
    langPrevBtn,
    langPage,
    langOf,
  } = langStates(lang);

  const pagination = (
    <div style={paginationStyles.container}>
      <button
        style={paginationStyles.button}
        onClick={() => handlePageChange(currentPage - 1)}
        data-testid="Previous"
      >
        {langPrevBtn}
      </button>
      <p style={paginationStyles.pageText}>
        {langPage} {currentPage} {langOf} {totalPages}
      </p>
      <button
        style={paginationStyles.button}
        onClick={() => handlePageChange(currentPage + 1)}
        data-testid="Next"
      >
        {langNextBtn}
      </button>
    </div>
  );

  const spinner = Spinner;

  return (
    <div>
      {isLoading ? (
        spinner
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {characters.map((character) => (
              <div key={character.id} style={{ margin: "10px" }}>
                <img src={character.image} alt={character.name} />
                <h2 style={{ marginBottom: 0, marginTop: "5px" }}>
                  {character.name}
                </h2>
                <div>
                  <p style={{ margin: 0 }}>
                    {langStatus}: {character.status}
                  </p>
                  <p style={{ marginTop: 0 }}>
                    {langSpecies}: {character.species}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>{pagination}</div>
        </div>
      )}
    </div>
  );
}
