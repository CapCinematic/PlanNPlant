import React, { useState } from "react";
import { Link } from "react-router-dom";
import SelectedPlant from "./SelectedPlant";
import PropTypes from "prop-types";
import "./SelectedPlant.css";
import "./HomePage.css";

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
  console.log(plants);

  return (
    <section className="plant-display">
      <div className="app-title">
      <h1>Welcome to Plan N' Plant!</h1>
      </div>
      {plants.map((plant) => {
        const commonName = plant.common_name;
        const id = plant.id;
        const plantImage = plant.default_image && plant.default_image.thumbnail;
        const waterNeeds = plant.watering;
        const sunNeeds = plant.sunlight.map((sun, index) => (
          <li key={index}>{sun}</li>
        ));
        return (
          <Link key={id} to={`/${id}`}>
            <div
              className="plant-card"
              key={id}
              onClick={() => handlePlantClick(plant)}
            >
              {plantImage && <img src={plantImage} alt={commonName} />}
              <p>Common Name: {commonName}</p>
              <p>Watering: {waterNeeds}</p>
              <p>Sunlight: {sunNeeds}</p>
            </div>
          </Link>
        );
      })}
      {currentPlant && <SelectedPlant plant={currentPlant} />}
    </section>
  );
}

PlantsDisplay.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      common_name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      default_image: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
      }),
      watering: PropTypes.string.isRequired,
      sunlight: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired
  ).isRequired,
};
export default PlantsDisplay;
