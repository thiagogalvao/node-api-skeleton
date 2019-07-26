var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
 
// Include here the require and use of your API Module.
var testeApi = require('./api/v1/test');
app.use('/test', testeApi);

app.listen(port);
console.log('RESTful API server started on: ' + port);