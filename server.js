//-------------------------------------
// Variables
//-------------------------------------
var express = require('express');

//-------------------------------------
// Setup Express
//-------------------------------------
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/app');
app.use('/', express.static(process.cwd() + '/app'));

//-------------------------------------
// Add Routes
//-------------------------------------
app.get(/^(\/(\w+))*\/?(\.\w{5,})?\??([^.]+)?$/, function(req, res, next) {
  res.render('index.html');
});

app.listen(8080);