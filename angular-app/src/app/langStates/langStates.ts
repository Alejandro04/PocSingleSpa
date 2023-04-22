import { languages } from "./character.lang";

function langStates(lang:string) {
  const langHouse = languages.find(
    (item) => item.lang === lang && item.house
  )?.house;
  const langActor = languages.find(
    (item) => item.lang === lang && item.actor
  )?.actor;
  
  return { langHouse, langActor };
}

export default langStates;
