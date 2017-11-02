function fetchPage(){
  console.log('fetchpage');

  return new Promise(function(resolve, reject){
    //if everything ok
    var delay = parseInt((Math.random()*1000000)%5000);

    setTimeout(function(){
      console.log('the task cost '+ delay +' ms.');
      resolve('this is page data.');
    },delay);
    
  })
}

fetchPage().then(function(data){
  console.log(data);
});
