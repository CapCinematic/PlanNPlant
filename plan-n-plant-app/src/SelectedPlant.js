import React from "react";
import JournalEntry from "./Journal";
import { useState, useEffect } from "react";
import getData from "./apiCalls";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import ErrorMessage from "./ErrorMessage";
import Banner from "./Banner";
import getDummyData from "./getDummyData";

function SelectedPlant() {
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [viewJournal, setView] = useState(false);
  const handleView = () => setView(true);

  useEffect(() => {
    const apiKey = "sk-BNId66175ecab58f51724";
    const plantDetailsQuery = `/details/${id}?key=${apiKey}`;
    getData(plantDetailsQuery)
      .then((data) => setSelectedPlant(data))
      .catch((error) => setErrorMessage(error.errorMessage));
  }, [id]);

  // useEffect(() => {
  //   const apiKey = "sk-gDEl6616daae842301803";
  //   const plantDetailsQuery = `/details/${id}?key=${apiKey}`;
  //   getData(plantDetailsQuery)
  //     .then((data) => {
  //       if (JSON.stringify(data) !== JSON.stringify(selectedPlant)) {
  //         setSelectedPlant(data);
  //       }
  //     })
  //     .catch((error) => setErrorMessage(error.errorMessage));
  // }, [selectedPlant, id]);

  if (!selectedPlant) {
    return <ErrorMessage message={errorMessage} />;
  }

  return (
    <div className="view-plant">
      <h2>{selectedPlant.common_name}</h2>
      {selectedPlant && (
        <div>
          <p>Scientific name: {selectedPlant.scientific_name}</p>
          <p>Description: {selectedPlant.description}</p>
          <p>Cycle: {selectedPlant.cycle}</p>
          <img
            src={selectedPlant.default_image.thumbnail}
            alt={selectedPlant.common_name}
          />
          <div className="journal-box">
            <button className="journal-open" onClick={handleView}>
              Journal
            </button>
            {viewJournal && <JournalEntry />}
          </div>
        </div>
      )}
    </div>
  );
}

SelectedPlant.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
export default SelectedPlant;
