import "./App.css";
import PlantsDisplay from "./HomePage";
import SelectedPlant from "./SelectedPlant";
import getData from "./apiCalls";
import ErrorMessage from "./ErrorMessage";
import React, { useState, useEffect } from "react";
import { Route, Routes, Router, useNavigate } from "react-router-dom";

function App() {
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const easyPlants =
      "-list?key=sk-9XOH64ced33198bb31777&watering=minimum&indoor";

    getData(easyPlants)
      .then((data) => {
        setPlants(data.data);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Error retrieving plant data. Please try again later.");
      });
  }, []);

  useEffect(() => {
    if (!plants) {
      navigate("/");
    }
  }, [plants]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PlantsDisplay plants={plants} />} />
        <Route path="/:id" element={<SelectedPlant />} />
        <Route path="/*" element={<ErrorMessage message={errorMessage} />} />
      </Routes>
    </div>
  );
}

export default App;
