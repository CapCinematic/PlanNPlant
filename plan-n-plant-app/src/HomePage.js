import React from "react";

function PlantsDisplay ({plants}){
  return(
    <section>
      {plants.map(plant => {
        const commonName = plant.common_name;
        const id = plant.id;
        const plantImage = plant.default_image && plant.default_image.thumbnail;
        console.log(id, commonName)
        return (
          <div key={id}>
            {plantImage && <img src={plantImage} alt={commonName} />}
            <p>Common Name: {commonName}</p>
          </div>
        );
      })}
      <h1 className="app-title">Welcome to Plan N' Plant!</h1>
    </section>
  )
}

export default PlantsDisplay