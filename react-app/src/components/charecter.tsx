import React from "react";
import charactersStates from "../utils/characterStates";
import langStates from "../utils/langStates";
import { PaginationStyles } from "../utils/paginationStyles";
import { Spinner } from "./spinner";
import CharacterList from "./characterList";

/*
  TODO: The styles should be implemented with BEM and SASS
*/
const paginationStyles = new PaginationStyles();

export default function Characters({ name, lang }) {
  const { characters, isLoading, currentPage, totalPages, handlePageChange } =
    charactersStates();
  const {
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
  const characterList = CharacterList(characters, lang)

  return (
    <>
      {isLoading ? (
        spinner
      ) : (
        <>
          <>{characterList}</>
          <>{pagination}</>
        </>
      )}
    </>
  );
}
