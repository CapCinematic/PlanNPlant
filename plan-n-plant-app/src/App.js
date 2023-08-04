import logo from './logo.svg';
import './App.css';
import PlantsDisplay from './HomePage';
import React, { useState } from 'react';
import { useEffect } from 'react';
import getData from './apiCalls';
import JournalEntry from './Journal';
import SelectedPlant from './SelectedPlant';
function App() {
  const [plants, setPlants] = useState([])
  // const [date, setDate] = useState("");
  // const [title, setTitle] = useState("");
  // const [entry, setEntry] = useState("");
  
  useEffect(() =>{
  
    fetch("https://perenual.com/api/species-list?key=sk-UpTm64c81a707233d1724&watering=minimum&indoor=1")
    .then(response => response.json())
    .then(plants => {
      // console.log(plants.data, "plantData")
      setPlants(plants.data)
    })
    .catch(error => console.error(error));
  }, [])



  return (
    <div className="App">
        <PlantsDisplay plants={plants} />
        {/* <SelectedPlant /> */}
        {/* <JournalEntry date={date} title={title} entry={entry} /> */}
    </div>
  );
}


export default App;
