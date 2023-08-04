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
      const apiKey = 'sk-UpTm64c81a707233d1724';
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
        </div>
      )}
    </div>
  );
}

export default SelectedPlant;