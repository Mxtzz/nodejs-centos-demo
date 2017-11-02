#!/usr/bin/node

//1//var pi = require('./02-export-var');

//1//console.log('pi:',pi);


//2//var circle = require('./02-export-function');
var Circle = require('./02-export-object');

 //2//console.log(circle);
console.log(Circle);
var c = new Circle(10);
console.log('area:',c.diameter());
console.log('circumference:',c.circumference());
console.log('area:',c.area());
 //2//console.log('area:',circle(20).area());
 //2//console.log('circumference:',circle(20).circumference());
