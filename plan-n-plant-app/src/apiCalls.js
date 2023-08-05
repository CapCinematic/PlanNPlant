async function getData(query) {
  try {
    const response = await fetch(`https://perenual.com/api/species${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default getData;