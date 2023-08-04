import React, { useState } from "react";
import SelectedPlant from "./SelectedPlant";
import "./SelectedPlant.css"
import { Link } from "react-router-dom";
import './HomePage.css'

function PlantsDisplay({ plants }) {
  const [currentPlant, setCurrentPlant] = useState(null);

  const handlePlantClick = (plant) => {
    setCurrentPlant((currentPlant) => {
      if (currentPlant && currentPlant.id === plant.id) {
        return null;
      } else {
        return plant;
      }
    });
  };
  console.log(plants)
  return (
    <section className="plant-display">
      <h1 className="app-title">Welcome to Plan N' Plant!</h1>
      {plants.map((plant) => {
        const commonName = plant.common_name;
        const id = plant.id;
        const plantImage =
          plant.default_image && plant.default_image.thumbnail;
        return (
          <Link key={id} to={`/${id}`}>
          <div key={id} onClick={() => handlePlantClick(plant)}>
            {plantImage && <img src={plantImage} alt={commonName} />}
            <p>Common Name: {commonName}</p>
          </div>
          </Link>
        );
      })}
      {currentPlant && <SelectedPlant plant={currentPlant} />}
    </section>
  );
}

export default PlantsDisplay;
