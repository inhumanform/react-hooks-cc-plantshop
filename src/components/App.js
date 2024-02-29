import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const API_URL = "http://localhost:6001/plants";


function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((plantsData) => setPlants(plantsData));
  }, []);

  const handleAddPlant = (newPlantData) => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newPlantData),
    })
      .then((response) => response.json())
      .then((newPlant) => setPlants((currentPlants) => [...currentPlants, newPlant]));
  };

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onAddPlant={handleAddPlant} />
    </div>
  );
}

export default App;
