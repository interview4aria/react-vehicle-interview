var express = require('express');
var app = express();
var fs = require("fs");
var cors = require('cors')

app.use(cors());

app.get('/api/vehicles', function (req, res) {
   fs.readFile( __dirname + "/" + "vehicles.json", 'utf8', function (err, data) {
      var vehicles = JSON.parse( data );
      console.log( data );
      res.setHeader('Content-Type', 'application/json');
      res.send(Object.values(vehicles));
   });
})

app.get('/api/vehicles/:id', function (req, res) {
   // First read existing vehicles.
   fs.readFile( __dirname + "/" + "vehicles.json", 'utf8', function (err, data) {
      var vehicles = JSON.parse( data );
      var vehicle = vehicles[req.params.id] 
      console.log( vehicle );
      res.setHeader('Content-Type', 'application/json');
      res.send(vehicle);
   });
})

app.post('/api/vehicles', function (req, res) {
   // First read existing vehicles.
   fs.readFile( __dirname + "/" + "vehicles.json", 'utf8', function (err, data) {
      console.log("req = ", req );
      data = JSON.parse( data );
      var nextId = Math.max(Object.values(data).map(a => {return a.id})) + 1;
      data[nextId] = vehicle["vehicle4"];
      console.log( data );
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
   });
})

app.delete('/api/vehicles/:id', function (req, res) {
   // First read existing vehicles.
   fs.readFile( __dirname + "/" + "vehicles.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data[req.params.id];
       
      console.log( data );
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})