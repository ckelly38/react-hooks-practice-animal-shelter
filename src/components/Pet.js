import React from "react";

function Pet({pet, onAdoptPet}) {
  function handleAdoptClick(event)
  {
    //console.log("event.target = ", event.target);
    //console.log("event.target.parentNode.parentNode = ", event.target.parentNode.parentNode);
    onAdoptPet(event.target.parentNode.parentNode.id);
  }

  return (
    <div id={pet.id} className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {(pet.gender === "female") ? '♀' : '♂'}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {(pet.isAdopted) ? <button className="ui disabled button">Already adopted</button> :
        <button onClick={handleAdoptClick} className="ui primary button">Adopt pet</button>}
      </div>
    </div>
  );
}

export default Pet;