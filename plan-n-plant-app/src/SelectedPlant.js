import React from "react";
import JournalEntry from "./Journal";
import { useState } from "react";

function SelectedPlant({ plant }) {
  const [showJournal, setShowJournal] = useState(false);
  const handleShowJournal = () => {
    setShowJournal(true);
  }
  console.log(plant, 'plant')
  return (
    <section className="selected-plant">
      <div className="home-button"></div>
      <div className="plant-info">
        <h2>{plant.commonName}</h2>
        <p>{plant.scientific_name}</p>
        <p>{plant.description}</p>
        <button onClick={handleShowJournal}>Open Journal</button>
      {showJournal && <JournalEntry />}
      </div>
      {/* <JournalEntry/> */}
    </section>
  );
}

export default SelectedPlant;