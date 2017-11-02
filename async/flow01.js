var LongTimeOperation = function(taskID)
{
  var id = taskID;

this.go = function (callback){

  console.log("this is a longTimeOperation" + id);

  var delay = parseInt((Math.random()*1000000) % 5000);

    setTimeout(function(){

      console.log("the task #" + id +  " cost "+ delay +" ms.");
    
      callback();

    },delay);
}
}

//计数器
var count = 0;

function f2(){
  //
  count++;
  console.log("this is f2, I'm callback\n");
  if (count == 5)
  {
    end();
    console.timeEnd('FLOW.CONTRAL');
  }
  //
}

console.time('FLOW.CONTRAL');
for(var i=0; i<5; i++){
  var task = new LongTimeOperation(i);
  task.go(f2);
}


function end(){
  console.log('the end task.')
}
