//counter code
var button = document.getElementById("counter");

button.onclick = function() {
  
  //create an object
  var request = new XMLHttpRequest();
  
  //Capture the response and store it in a variable 
  request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          //take some action
          if (request.status ===  200) {
              var counter = request.responseText;
              var span = document.getElementById("count");
              span.innerHTML = counter;
    
          }
      }
  //not done yet
      
  };
  //Make the request
  request.open('GET' , 'http://styx97.imad.hasura-app.io/counter', true);
  request.send(null);
};