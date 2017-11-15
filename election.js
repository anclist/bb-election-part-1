document.addEventListener("DOMContentLoaded", function() {
  var body = document.querySelector('body');
  var list = document.createElement('ul')
  body.append(list)

$.ajax({
  url: 'https://bb-election-api.herokuapp.com/',
  method: 'GET',
  dataType: 'json',
}).done(function(data) {
  for (var i = 0; i < data.candidates.length; i++) {
    var candidate = document.createElement('li');
    var result = document.createElement('p');

    result.innerText = `Name: ${data.candidates[i].name}, Total Votes: ${data.candidates[i].votes}`;

    candidate.append(result);
    list.append(candidate);
  };
});

});
