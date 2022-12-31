var request = new XMLHttpRequest();
request.open('GET', 'movies.json', true);
request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
    console.log(data);
    // Use the data to populate the table
    data.forEach(movies => {
      var tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${movies.titre}</td>
        <td>${movies.réalisateur}</td>
        <td>${movies.durée}</td>
        <td>${movies.production}</td>
        <td>${movies.poster}</td>
        <td>${movies.festivals}</td>
        <td>${movies.acteurs}</td>
      `;
      document.querySelector('#movie-table tbody').appendChild(tr);
    });
  } else {
    // We reached our target server, but it returned an error
  }
};
request.onerror = function() {
  // There was a connection error of some sort
};
request.send();


