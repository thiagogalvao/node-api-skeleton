var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
 
var testeApi = require('./api/v1/test');

app.use('/test', testeApi);
app.listen(port);

console.log('RESTful API server started on: ' + port);