#!/usr/bin/node
 
var http = require('http');
var url = require('url');

var msg = process.argv[2] || 'hello I am ma';

var options = url.parse('http://localhost:8080');
options.method = 'POST';
console.log('OPTIONS:',options);

var req = http.request(options,function(res){
  console.log('status:',res.statusCode);
  console.log('header:',res.headers);
  console.log('');

  res.setEncoding('utf8');
  res.on('data',function(data){
    console.log('problem with request:', err.message);
  });
});

req.write(msg + '\n');
req.end();
