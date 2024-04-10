// import React from "react";

// function PlantCard({plant, onClick, isFavorite}) {
//   const { common_name, id, default_image, watering, sunlight } = plant;
//   const plantImage = default_image && default_image.thumbnail;

//   return (
//     <div className={`plant-card ${isFavorite ? 'favorite' : ''}`}>
//       <Link to={`/${id}`}>
//         {plantImage && <img src={plantImage} alt={common_name} />}
//         <p>Common Name: {common_name}</p>
//       </Link>
//       <p>Watering: {watering}</p>
//       <p>Sunlight: {sunlight.join(', ')}</p>
//       <button onClick={onClick}>
//         {isFavorite ? "Remove from favorites" : "Add to favorites"}
//       </button>
//     </div>
//   );
// }

// PlantCard.propTypes = {
//   plant: PropTypes.object.isRequired,
//   onClick: PropTypes.func.isRequired,
//   isFavorite: PropTypes.bool.isRequired,
// };

// export default PlantCard;