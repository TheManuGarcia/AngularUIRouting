/**
 * Created by briandaves on 10/20/15.
 */
// Load our node packages
var express = require('express');
var path = require('path');
var app = express();



//index page
app.use(express.static(__dirname + '/views'));

//app.set('view engine', 'ejs'); //set up ejs for templating






var server = app.listen(8080, function(){
    var port = server.address().port;
    console.log('Listening on port', port);
});