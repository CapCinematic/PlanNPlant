import logo from './logo.svg';
import './App.css';
import PlantsDisplay from './HomePage';
import React, { useState } from 'react';
import { useEffect } from 'react';
import getData from './apiCalls';

function App() {
  const [plants, setPlants] = useState([])

  useEffect(() =>{
    fetch("https://perenual.com/api/species-list?page=1&key=sk-UpTm64c81a707233d1724")
    .then(response => response.json())
    .then(plants => {
      console.log(plants.data, "plantData")
      setPlants(plants.data)
    })
    .catch(error => console.error(error));
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        {plants.map(plant => (
          <div key={plant.id}>
            {plant.common_name}
            {plant.default_image && <img src={plant.default_image.regular_url} alt={plant.common_name} />}
          </div>
        ))}
      <PlantsDisplay/>
      </header>
    </div>
  );
}

export default App;
