#!/usr/bin/node
 
var server = require('net').createServer();

if(process.argv.length < 4){
  return console.log('Usage:\n\t ./02-my-telnet.js host port.');
}

var host = process.argv[2];
var post = process.argv[3];

var socket = net.connect({host:host,port:port},function(){
  console.log('conneted to', host, 'on port', port);

  process.stdin.on('data',function(data){
    console.log(data.length, data);
  });

  socket.pipe(process.stdout);
});

socket.on('end',function(){
  console.log('disconnected from server');
  process.exit();
});
