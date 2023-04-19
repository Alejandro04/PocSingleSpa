import { useEffect, useState } from "react";

function charactersStates() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
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

  return { characters, isLoading, currentPage, totalPages, handlePageChange };
}

export default charactersStates;
