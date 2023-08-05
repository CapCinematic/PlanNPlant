
import './App.css';
import PlantsDisplay from './HomePage';
import React, { useState, useEffect } from 'react';
import JournalEntry from './Journal';
import SelectedPlant from './SelectedPlant';
import getData from './apiCalls'
import { Route, Routes, Router } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
function App() {
  const [plants, setPlants] = useState([]);
  
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const [error, setError] = useState(null)

  useEffect(() => {
    const easyPlants = "-list?key=sk-M3Xs64cda388bdd101768&watering=minimum&indoor";
    
    getData(easyPlants)
      .then(data => {
        setPlants(data.data);
      })
      .catch(error => setError(error));
  }, []);

 

  const handleJournalSubmit = (date, title, entry) => {
    setDate(date);
    setTitle(title);
    setEntry(entry);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PlantsDisplay plants={plants} />} />
        <Route path="/:id" element={<SelectedPlant/>} />
        <Route path="/journal-entry" element={<JournalEntry handleJournalSubmit={handleJournalSubmit} />} />
      </Routes>
    </div>
  );
}

export default App;