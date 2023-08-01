function getData(){
  fetch("https://perenual.com/api/species-list?page=1&key=sk-UpTm64c81a707233d1724")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

export default getData


