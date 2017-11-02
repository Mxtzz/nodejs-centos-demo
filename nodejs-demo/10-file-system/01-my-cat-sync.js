#!/usr/bin/node
 
var fs = require('fs');

//同步

var file = process.argv[2];

console.log(fs.readFileSync(file).toString('utf8'));
