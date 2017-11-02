var LongTimeOperation = function(taskID)
{
  var id = taskID;

this.go = function (callback){

  console.log("this is a longTimeOperation # " + id);

  var delay = parseInt((Math.random()*1000000) % 5000);

    setTimeout(function(){

      console.log("the task #" + id +  " cost "+ delay +" ms.");
    
      callback();

    },delay);
}
}

var max = 3;
var total = 11;
var pool = max;
var count = 0;

function f2(){
  count ++;
  pool--;
  console.log("this is f2, I'm callback\n");

  if(count < total){
    var task = new LongTimeOperation(count);
    task.go(f2);
  }else{
    if(pool == 0){
      end();
      console.timeEnd('FLOW.CONTROL');
     }
  } 
}

function end(){
  console.log('the end task');
}

console.time('FLOW.CONTROL');
for(var i = 0; i<max ; i++,count++){
  var task = new LongTimeOperation(count);
  task.go(f2);
}
