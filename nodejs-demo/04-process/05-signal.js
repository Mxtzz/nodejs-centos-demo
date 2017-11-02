#!/usr/bin/node

console.log('process id', process.pid);

process.stdin.resume();

process.on('SIGINT', function(){
  console.log('your press ctrl -c,good bye');
});

process.on('SIGTSTP',function(){
  console.log('your press ctrl -z,stop running');
});


//用kill杀死进程  kill -2 45047 
