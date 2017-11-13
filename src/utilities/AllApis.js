var api = {
  getPicOfDay(){
    var url = 'https://api.nasa.gov/planetary/apod?api_key=bDjAJREA3NnZzJOyREJFhpNMfeEu27fkD2xRw76k';
    return fetch(url).then( (res) => res.json() );
  }
}

export default api;
