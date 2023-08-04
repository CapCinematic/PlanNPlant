
import './App.css';
import PlantsDisplay from './HomePage';
import React, { useState, useEffect } from 'react';
import JournalEntry from './Journal';
import SelectedPlant from './SelectedPlant';
import getData from './apiCalls'
import { Route, Routes, Router } from 'react-router-dom';

function App() {
  const [plants, setPlants] = useState([]);
  
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");

  useEffect(() => {
    const easyPlants = "-list?key=sk-UpTm64c81a707233d1724&watering=minimum&indoor";
    
    getData(easyPlants)
      .then(data => {
        setPlants(data.data);
      })
      .catch(error => console.error(error));
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