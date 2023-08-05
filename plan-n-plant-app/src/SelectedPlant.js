import React from "react";
import JournalEntry from "./Journal";
import { useState, useEffect } from "react";
import getData from "./apiCalls";
import { useParams } from "react-router-dom";

function SelectedPlant() {
  const {id} = useParams()
  const [selectedPlant, setSelectedPlant] = useState({});
  console.log('selected', selectedPlant)
  useEffect(() => {
    if (selectedPlant) {
      const apiKey = 'sk-M3Xs64cda388bdd101768';
      const plantId = selectedPlant.id;
      const plantDetailsQuery = `/details/${id}?key=${apiKey}`;

      getData(plantDetailsQuery)
        .then(data => setSelectedPlant(data))
        .catch(error => console.error(error));
    }
  }, []);

  if (!selectedPlant) {
    return <p>Please select a plant.</p>;
  }

  return (
    <div>
      <h2>{selectedPlant.common_name}</h2>
      {selectedPlant && (
        <div>
          <p>Scientific name: {selectedPlant.scientific_name}</p>
          <p>Description: {selectedPlant.description}</p>
          <p>Family: {selectedPlant.family_common_name}</p>
          <img src={selectedPlant.default_image.thumbnail} alt={selectedPlant.common_name} />
        </div>
      )}
    </div>
  );
}

export default SelectedPlant;