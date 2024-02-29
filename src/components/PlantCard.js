import React, { useState } from "react";

function PlantCard({ id, name, image, price,  onDeletePlant }) {
  const [isInStock, setIsInStock] = useState(true);

  const handleToggleStock = () => {
    setIsInStock(!isInStock);
   
  };

  const handleDelete = () => {
    onDeletePlant(id);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={handleToggleStock} className={isInStock ? "primary" : ""}>
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
