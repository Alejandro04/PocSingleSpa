import { languages } from "./langs";

function langStates(lang) {
  const langStatus = languages.find(
    (item) => item.lang === lang && item.status
  )?.status;
  const langSpecies = languages.find(
    (item) => item.lang === lang && item.species
  )?.species;
  const langPrevBtn = languages.find(
    (item) => item.lang === lang && item.prev
  )?.prev;
  const langNextBtn = languages.find(
    (item) => item.lang === lang && item.next
  )?.next;
  const langPage = languages.find(
    (item) => item.lang === lang && item.page
  )?.page;
  const langOf = languages.find(
    (item) => item.lang === lang && item.of
  )?.of;

  return { langStatus, langSpecies, langPrevBtn, langNextBtn, langPage, langOf };
}

export default langStates;
