var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var movies = {
    title: 'Movies | Rupak Sarkar',
    heading: 'Feb 7, 2017',
    content: `<p>
                   These are the contents for my movie page.These are the contents for my movie page.These are the contents for my movie page.
                   These are the contents for my movie page.These are the contents for my movie page.These are the contents for my movie page.
                   These are the contents for my movie page.These are the contents for my movie page.These are the contents for my movie page.
               </p>
               <p>
                   These are the contents for my movie page.These are the contents for my movie page.These are the contents for my movie page.
                   These are the contents for my movie page.These are the contents for my movie page.These are the contents for my movie page.
                   These are the contents for my movie page.These are the contents for my movie page.These are the contents for my movie page.
               </p>
               <p>
                   These are the contents for my movie page.These are the contents for my movie page.These are the contents for my movie page.
                   These are the contents for my movie page.These are the contents for my movie page.These are the contents for my movie page.
                   These are the contents for my movie page.These are the contents for my movie page.These are the contents for my movie page.
               </p>`
    
};

function createTemplate(data)  { 
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate =
    `<html>
      <head>
          <title>
             ${title}
          </title>
           <meta name = "viewport" content = "width = device-width, initial-scale=1" />  
           <link href="/ui/style.css" rel="stylesheet" />
         
      </head>
       <body>
           <div class = "container">
               <div>
                   <a href = "/">Home</a>>
               </div>
               <hr/>
               <h3>
                   ${heading} 
               </h3>
               <div>
                   ${date}
                   
               </div>
               <div>
                   ${content}
                   </p>
               </div>
           </div>        
       </body>   
    </html>
    `;
    return  htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/movies',function(req,res) {
    res.send(createTemplate(movies));
});

app.get('/music',function(req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'music.html'));   
});

app.get('/kolkata',function(req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'kolkata.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
 
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
