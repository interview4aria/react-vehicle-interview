var express = require('express');
var app = express();
var fs = require("fs");
var cors = require('cors')
var bodyParser = require('body-parser')

app.use(cors());

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

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
      data = JSON.parse( data );

      var ids = Object.values(data).map(a => {return parseInt(a.id, 10)});
      var nextId = Math.max(...ids) + 1;

      data[nextId] = {
         id: nextId,
         ...req.body
      };

      fs.writeFileSync('vehicles.json', JSON.stringify(data, null, 2));

      res.setHeader('Content-Type', 'application/json');
      res.send(data);
   });
})

app.put('/api/vehicles/:id', function (req, res) {
   // First read existing vehicles.
   fs.readFile( __dirname + "/" + "vehicles.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      var record = data[req.params.id];

      if (record) {
         data[req.params.id] = {
            ...record,
            ...req.body
         };
      }

      fs.writeFileSync('vehicles.json', JSON.stringify(data, null, 2));

      res.setHeader('Content-Type', 'application/json');
      res.send(data);
   });
})

app.delete('/api/vehicles/:id', function (req, res) {
   // First read existing vehicles.
   fs.readFile( __dirname + "/" + "vehicles.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data[req.params.id];

      fs.writeFileSync('vehicles.json', JSON.stringify(data, null, 2));
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})