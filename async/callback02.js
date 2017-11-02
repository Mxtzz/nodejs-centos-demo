function longTimeOperation(callback){

  console.log("this is a longTimeOperation");

  var delay = parseInt((Math.random()*1000000) % 5000);

  setTimeout(function(){
    console.log("the longTimeOperation cost "+ delay +" ms.");
    callback();
  },delay);
}

function f2(){
  console.log("this is f2, I'm callback");
}

longTimeOperation(f2);
