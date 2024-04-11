import React, { useState } from "react";
import { Link } from "react-router-dom";
import SelectedPlant from "./SelectedPlant";
import PropTypes from "prop-types";
import "./SelectedPlant.css";
import "./HomePage.css";
import Banner from "./Banner";

function PlantsDisplay({ plants }) {
  const [currentPlant, setCurrentPlant] = useState(null);
  const [favoritePlants, setFavoritePlants] = useState([]);

  const handlePlantClick = (plant) => {
    setCurrentPlant((currentPlant) => {
      if (currentPlant && currentPlant.id === plant.id) {
        return null;
      } else {
        return plant;
      }
    });
  };

  const handleFavoriteClick = (plant) => {
    if (favoritePlants.some((p) => p.id === plant.id)) {
      setFavoritePlants(favoritePlants.filter((p) => p.id !== plant.id));
    } else {
      setFavoritePlants([...favoritePlants, plant]);
    }
  };

  const isFavorite = (plant) => {
    if (favoritePlants > 0) {
      return favoritePlants.some((p) => p.id === plant.id);
    } 
  };
  console.log(favoritePlants)

  return (
    <section className="plant-display">
      {plants.map((plant) => {
        const commonName = plant.common_name;
        const id = plant.id;
        const plantImage = plant.default_image && plant.default_image.thumbnail;
        const waterNeeds = plant.watering;
        const sunNeeds = plant.sunlight.map((sun, index) => (
          <li key={index}>{sun.toUpperCase()}</li>
        ));
        const isFav = isFavorite(plant.id);
        const cardClass = isFav ? "plant-card favorite" : "plant-card";
        return (
          <div className={cardClass} key={id}>
            <Link to={`/${id}`}>
              {plantImage && <img src={plantImage} alt={commonName} />}
              <p>Common Name: {commonName}</p>
            </Link>
            <p>Watering: {waterNeeds}</p>
            <p>Sunlight: {sunNeeds}</p>
            <button className="favorite" onClick={() => handleFavoriteClick(plant)}>
              {isFav ? "Remove from favorites" : "Add to favorites"}
            </button>
            <button className="learn-more" onClick={() => handlePlantClick(plant)}>
              {currentPlant && currentPlant.id === plant.id}
              Learn more
            </button>
          </div>
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


