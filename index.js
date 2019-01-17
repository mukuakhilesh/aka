
var mongoose = require('mongoose');
var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');


var app = express();

var collegeRouter = require('./routes/collegeRouter');
var studentRouter = require('./routes/studentRouter');

app.get('/' ,function(req , res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded());

app.use('/api/colleges' , collegeRouter);
app.use('/api/students', studentRouter);
app.use(express.static(path.join(__dirname,'public')));

mongoose.connect('mongodb://localhost/mydb2' , {
  useNewUrlParser : true })
  .then(function(){
    console.log("database connected successfully");
  })
  .catch(function(err){
    console.log('failed to connect database')
  });

const PORT = 3000;
app.listen(PORT, function() {
  console.log("Server running on port : " + PORT);
});
