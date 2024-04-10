async function getDummyData(query) {
  try {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: [
            {
              id: 1,
              common_name: "Daisy",
              scientific_name: "Bellis perennis",
              description: "Perennial plant with small white, pink or red flowers.",
              cycle: "Perennial",
              default_image: {
                thumbnail: "https://dummyimage.com/200x200",
              },
              watering: "Regularly",
              sunlight: ["Full Sun", "Partial Shade"],
            },
            {
              id: 2,
              common_name: "Rose",
              scientific_name: "Rosa",
              description: "Flowering shrub known for its showy flowers.",
              cycle: "Perennial",
              default_image: {
                thumbnail: "https://dummyimage.com/200x200",
              },
              watering: "Regularly",
              sunlight: ["Full Sun"],
            },
          ],
        });
      }, 500);
    });
  } catch (error) {
    console.error(error);
  }
}

export default getDummyData;