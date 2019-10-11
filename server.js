var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
fs = require('fs'),
dirData = JSON.parse(fs.readFileSync('diretorias.json', 'utf8'));;


app.listen(port);
app.get('/', (req, res) => {
  res.json(dirData)
})



console.log('Message RESTful API server started on: ' + port);
