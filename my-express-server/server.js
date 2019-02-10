//jshint esversion:6

const express = require('express');

const app = express();

app.get('/', function(request, response){
  response.send("hello");
});

app.get('/contact', function(req, res){
  res.send("Contact me at: honza@honza.eu");
});

app.get('/about', function(req, res){
  res.send("This about me page");
});

app.get('/hobbies', function(req, res){
  res.send("this is my hobby page");
});

app.listen(3000, function(){
  console.log("+++++ SERVER STARTED ON PORT 3000 +++++");
});
