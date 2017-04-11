var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require("fs");
var csv = require ("fast-csv");
var mongo = require('mongodb');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);


var MongoClient = require('mongodb').MongoClient
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/mymean';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  db.close();
});





fs.createReadStream('DHFL loan data.csv')
.pipe(csv())
.on('data',function(data){
  
  csv.parse(data.toString(),{ delimiter: ','}, function(err,output){
    console.log(output)
  })
})
.on('end',function(data){
  console.log("succesfuly end")  
});

/*var readStream = fs.createReadStream('DHFL loan data.csv');
readStream.pipe(csv());
readStream.on('data', function(data) {
  console.log(data);
  readStream.pause();
  csv.parse(data.toString(), { delimiter: ','}, function(err, output) {
    db.mymean.insert(data, function(err) {
      readStream.resume();
    });
  });
});
readStream.on('end', function() {
  logger.info('file stored');
});
 */



module.exports = app;
