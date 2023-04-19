import React, { useEffect, useState } from "react";
import { languages } from "./langs";

function langStates(lang) {
  const langStatus = languages.find(
    (item) => item.lang === lang && item.status
  )?.status;
  const langSpecies = languages.find(
    (item) => item.lang === lang && item.species
  )?.species;

  return { langStatus, langSpecies };
}

export default langStates;
