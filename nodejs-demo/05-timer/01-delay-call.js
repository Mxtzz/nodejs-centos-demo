#!/usr/bin/node

//setTimeout(function(){
  //console.log('hello from the past!');
  //console.log('first');
//},1000);
  
 // console.log('second');
 //
function Bomb(){
  this.message = "Bomb";
}

Bomb.prototype.explode = function(){
  console.log(this.message);
}

var bomb=new Bomb();

//setTimeout(bomb.explode.bind(bomb),2000); 可以爆炸
var timeID = setTimeout(bomb.explode.bind(bomb),2000);

clearTimeout(timeID);//拆除


