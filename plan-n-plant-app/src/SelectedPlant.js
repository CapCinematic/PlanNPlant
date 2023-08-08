import React from "react";
import JournalEntry from "./Journal";
import { useState, useEffect } from "react";
import getData from "./apiCalls";
import { useParams, Link} from "react-router-dom";
import PropTypes from "prop-types";
import ErrorMessage from "./ErrorMessage";

function SelectedPlant() {
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedPlant, setSelectedPlant] = useState(undefined);
  const [viewJournal, setView] = useState(false);
  const handleView = () => setView(true);
  

  useEffect(() => {
    const apiKey = "sk-sUbp64d2900b4752a1803";
    const plantDetailsQuery = `/details/${id}?key=${apiKey}`;
    getData(plantDetailsQuery)
      .then((data) => setSelectedPlant(data))
      .catch((error) => setErrorMessage(error.errorMessage));
  }, []);

  if (!selectedPlant) {
    return  <ErrorMessage message={errorMessage}  />
  }

  return (
    <div className="view-plant">
       <div className='home-button'>
        <Link to="/"><p><span>⌂</span></p></Link> 
      </div>
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
            <button className='journal-open' onClick={handleView}>Journal</button>
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
