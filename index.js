//requiring NPM modeles
var express 		= require('express');
var morgan 			= require('morgan');
var bodyParser 		= require('body-parser');
var mongoose 		= require('mongoose');
var db 				= mongoose.connection;
var app 			= express();


db.on('error', console.error);

//requiring local modeles
var configs 		= require('./config');
var routes 			= require('./routes/api');
var userModel 		= require('./models/users');
var helperFunctions = require('./helpers/helperFunctions');

// Uncomment the following lines to start logging requests to consoles.
// app.use(morgan('combined'));
// parse application/x-www-form-urlencoded.
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json.
app.use(bodyParser.json());

//connedting to mongoDB
mongoose.connect('mongodb://'+configs.dbHost+'/'+configs.dbName);
//populating data if DB is not already populated.
helperFunctions.populateDb();

//Initilizing routes.
routes(app);
// serve video files.

// serve client side code.
app.use('/',express.static('client'));
app.use('/login',express.static('client'));
app.use('/register',express.static('client'));
app.use(express.static(__dirname + '/videos'));
app.use('/video/:id',express.static('client'));
app.use(express.static(__dirname + '/client/assets'));
app.use(express.static(__dirname + '/client/app'));
app.use(express.static(__dirname + '/bower_components'));

//Finally starting the listener
app.listen(configs.applicationPort, function () {
  console.log('Example app listening on port '+configs.applicationPort+'!');
});
