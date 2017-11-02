#!/usr/bin/node

var cp = require('child_process');

console.log('I am father proecss. PID:', process.pid);

var child = cp.spawn('./02-child.js', [], {detached: true,stdio:['ignore', 1, 2]});

//child.stdout.pipe(process.stdout);
//child.stderr.pipe(process.stderr);

child.unref();

setTimeout(function(){
  console.log('5s passed,father game over!');
  process.exit(0);
}, 5000);
