import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onChangeType(nwtype)
  {
    console.log("nwtype = " + nwtype);
    console.log("before change filters = ", filters);
    const mynwfilters = {...filters};
    mynwfilters.type = nwtype;
    setFilters(mynwfilters);
  }

  function onFindPetsClick()
  {
    const baseurl = "http://localhost:3001/pets";
    let myqry = "";
    console.log("filters = ", filters);
    if (filters.type === "all");
    else if (filters.type === "cat" || filters.type === "dog" || filters.type === "micropig")
    {
      myqry = "?type=" + filters.type;
    }
    //else;//do nothing
    console.log("myurl = baseurl + myqry = " + (baseurl + myqry));
    fetch(baseurl + myqry).then(r => r.json()).then((response) => {
      console.log("response = ", response);
      setPets(response);
    }).catch((err) => {
      console.error("there was a problem getting the data from the server!");
      console.error(err);
      alert("failed to get the list of pets from the server! See log for details!");
    });
  }

  function onAdoptPet(mid)
  {
    //adopt the pet and update the state here
    let nwpets = pets.map((pet, index) => {
      if (pet.id == mid)
      {
        let mynwpet = {...pet};
        mynwpet.isAdopted = true;
        return mynwpet;
      }
      else return pet;
    });
    setPets(nwpets);
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;