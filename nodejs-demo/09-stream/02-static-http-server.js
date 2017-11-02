#!/usr/bin/node

var http = require('http');  //引入http模块
var fs = require('fs');

http.createServer(function(req, res){
  console.log('---------------');
  console.log(req.headers);

  var fileName = __dirName + req.url;
  fs.readFile(fileName, function(err,data){
    if(err){
      console.log(err.message);
      res.statusCode = 500;
      res.end(err.message);
    }else{
      res.end(data);
    }
  })
}).listen(8080);
