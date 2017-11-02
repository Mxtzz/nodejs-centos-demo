#!/usr/bin/node
 
var fs = require('fs');

var dir = process.argv[2];

fs.mkdir(dir,function(error){
  if(error){
    console.log(err.massage);
  }
});
