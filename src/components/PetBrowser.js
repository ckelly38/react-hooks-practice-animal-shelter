import React from "react";
import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {
  const petobjs = pets.map((pet) => {
    return (<Pet key={pet.id} id={pet.id} onAdoptPet={onAdoptPet} pet={pet} />);
  });

  return (
    <div className="ui cards">{petobjs}</div>
  );
}

export default PetBrowser;
