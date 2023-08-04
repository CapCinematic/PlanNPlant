function getData(query) {
  return fetch(`https://perenual.com/api/species${query}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error(error));
}

export default getData;

