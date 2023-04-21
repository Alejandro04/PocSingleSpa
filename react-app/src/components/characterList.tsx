import React from "react";
import langStates from "../utils/langStates";

export default function CharacterList(characters, lang) {
  const {
    langStatus,
    langSpecies,
  } = langStates(lang);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {characters && characters.map((character) => (
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
  );
}
