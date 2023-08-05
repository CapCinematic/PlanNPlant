import React from "react";
import { useState } from "react";
import SelectedPlant from "./SelectedPlant";
function PlantsDisplay ({plants}){
  const [currentPlant, setSelectedPlant] = useState([]);

  return(
    <section className="plant-display">
      <h1 className="app-title">Welcome to Plan N' Plant!</h1>
      {plants.map(plant => {
        const commonName = plant.common_name;
        const id = plant.id;
        const plantImage = plant.default_image && plant.default_image.thumbnail;
        console.log(id, commonName)
        return (
          <div key={id} onClick={() => setSelectedPlant(plant)}>
            {plantImage && <img src={plantImage} alt={commonName} />}
            <p>Common Name: {commonName}</p>
          </div>
        );
      })}
      {currentPlant && <SelectedPlant plant={currentPlant} />}
    </section>
  )
}

export default PlantsDisplay