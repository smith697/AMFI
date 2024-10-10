var path = require('path');
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
 
//Configure port
var port=8080;
 
//App directories
var PROJECT_DIR = path.normalize(__dirname);
 
app.use('/',express.static(path.join(PROJECT_DIR, '')));
 
app.get('/getuniqueid', function (req, res) {
    let randomNumber = Math.floor(100000 + Math.random() * 900000);
 
    // Generate a random alphabet
    let randomAlphabet = String.fromCharCode(Math.floor(Math.random() * 26) + 64);
    let timestamp = Date.now();
    // console.log(timestamp); // Example output: 1693068284937
 
    // Concatenate the alphabet with the number
    let userID = randomAlphabet + randomNumber + timestamp;
   
    let returnStr = '{"uniqueid": "' + userID + '"}';
 
    res.send(returnStr);
 
  });
 
http.listen(port, function(){
    console.log('Sample Application runnning at http://localhost:'+port+'/UI');
});
 
 