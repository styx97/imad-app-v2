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

//Submit name 


var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    // make a request to the server and send the name
    //create a request object
  var request = new XMLHttpRequest();
  
  //Capture the response and store it in a variable 
  request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          //take some action
          if (request.status ===  200) {
             // Capture a lidt of names and render it as a list
            var names = request.responseText;
            names = JSON.parse(names);
            var list = '';
            for (var i = 0; i<names.length; i++ ) {
              list += '<li>'+ names[i] + '</li>';   
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
     
    
          }
      }
  //not done yet
      
  };
  
  var nameInput = document.getElementById('name');
  var name = nameInput.value;
  //Make the request
  request.open('GET' , 'http://styx97.imad.hasura-app.io/submit-name?name=' + name, true);
  request.send(null);
    
};
    
    



